import { FC } from "react";
import { DialogBase, DialogProps } from ".";
import { Button, Stack, Typography } from "@mui/material";

interface IDialogSuccess extends DialogProps {
  resolve?: () => void;
}

export const DialogSuccess: FC<IDialogSuccess> = ({
  title,
  popDialog,
  ...props
}) => {
  const handleClose = () => {
    popDialog();
  };

  return (
    <DialogBase sx={{ minWidth: 500 }} {...props}>
      <Stack direction='column'>
        <Typography variant='h6' mb={2}>
          {title}
        </Typography>
        <Button fullWidth variant='contained' onClick={handleClose}>
          Закрыть
        </Button>
      </Stack>
    </DialogBase>
  );
};
