import {
  ComponentType,
  ReactElement,
  forwardRef,
  Ref,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { TransitionProps } from "@mui/material/transitions";
import {
  IconButton,
  Stack,
  Typography,
  Slide,
  Dialog as MuiDialog,
  DialogContent as MuiDialogContent,
  DialogProps as MuiDialogProps,
} from "@mui/material";
import { IconClose } from "../../assets";

export interface DialogProps
  extends Omit<MuiDialogProps, "open" | "onClose" | "onSelect"> {
  title?: string;
  icon?: ReactNode;
  popDialog?: any;
  noPadding?: boolean;
}

interface LocalTransitionProps extends TransitionProps {
  children: ReactElement;
}

const Transition = forwardRef(
  ({ children, ...props }: LocalTransitionProps, ref: Ref<unknown>) => (
    <Slide direction='up' ref={ref} {...props}>
      {children}
    </Slide>
  )
);

export const DialogBase: ComponentType<DialogProps> = ({
  title,
  icon,
  popDialog,
  noPadding = false,
  children,
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleIconClose = () => {
    setOpen(false);

    setTimeout(() => {
      if (popDialog) popDialog();
    }, 300);
  };

  const handleClose = () => {
    setOpen(false);

    setTimeout(() => {
      if (popDialog) popDialog();
    }, 300);
  };

  useEffect(() => {
    setOpen(true);

    return () => setOpen(false);
  }, []);

  return (
    <MuiDialog
      {...props}
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        borderBottom='1px solid'
        borderColor='divider'
        py={1.5}
        pl={3}
        pr={1}
      >
        <Stack direction='row' alignItems='center' flex={2} spacing={2}>
          {icon}
          <Typography component='div'>{title}</Typography>
        </Stack>
        <IconButton onClick={handleIconClose}>
          <IconClose sx={{ fontSize: 21, color: "text.secondary" }} />
        </IconButton>
      </Stack>
      <MuiDialogContent sx={noPadding ? { padding: 0 } : {}}>
        {children}
      </MuiDialogContent>
    </MuiDialog>
  );
};
