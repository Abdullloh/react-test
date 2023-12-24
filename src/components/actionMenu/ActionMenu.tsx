import { FC } from "react";
import { Box, IconButton, ListItemText, Menu, MenuItem } from "@mui/material";
import { useAnchorToggle } from "../../common/hooks";
import { IconMoreDots } from "../../assets";

export interface ActionMenuDataProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

interface ActionMenuProps {
  data: ActionMenuDataProps[];
}

export const ActionMenu: FC<ActionMenuProps> = ({ data = [] }) => {
  const { anchorEl, open, handleToggle, handleClose } = useAnchorToggle();

  const onCustomClick = (onClick) => () => {
    onClick();
    handleClose();
  };

  const renderMenuItems = () => {
    return data.map(({ label, onClick, disabled }, idx) => (
      <MenuItem onClick={onCustomClick(onClick)} disabled={disabled} key={idx}>
        <ListItemText>{label}</ListItemText>
      </MenuItem>
    ));
  };

  return (
    <>
      <Box display='flex' justifyContent='center' position='relative'>
        <IconButton
          onClick={handleToggle}
          sx={{ position: "relative", zIndex: 2 }}
        >
          <IconMoreDots />
        </IconButton>
      </Box>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {renderMenuItems()}
      </Menu>
    </>
  );
};
