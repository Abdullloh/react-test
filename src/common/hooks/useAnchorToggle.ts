import { MouseEvent, useCallback, useState } from "react";

export const useAnchorToggle = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleToggle = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (open) handleClose();
      else handleOpen(e);
    },
    [open, handleOpen, handleClose]
  );

  return { anchorEl, open, handleOpen, handleClose, handleToggle };
};
