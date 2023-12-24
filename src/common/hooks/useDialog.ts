import { ElementType, useCallback, useContext } from "react";
import { DialogContext } from "../contexts";

export const useDialog = <T = any>(Component: ElementType) => {
  const { pushDialog, popDialog } = useContext(DialogContext);

  const openDialog = useCallback(
    (props?: T) => {
      return new Promise((resolve, reject) =>
        pushDialog([Component, props, resolve, reject])
      );
    },
    [Component, pushDialog]
  );

  const closeDialog = useCallback(() => {
    popDialog();
  }, [popDialog]);

  return [openDialog, closeDialog];
};
