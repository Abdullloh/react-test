import {
  ComponentClass,
  ComponentType,
  FunctionComponent,
  PropsWithChildren,
  Children,
  createElement,
  useCallback,
  useMemo,
  useState,
} from "react";
import { DialogContext } from "../contexts";

type DialogProps = [
  Component: FunctionComponent | ComponentClass,
  props: any,
  resolve: any,
  reject: any,
];

type DialogsState = DialogProps[];

export const DialogProvider: ComponentType<PropsWithChildren<any>> = ({
  children,
}) => {
  const [dialogs, setComponents] = useState<DialogsState>([]);

  const pushDialog = useCallback(
    (dialog: DialogProps) => {
      setComponents([...dialogs, dialog]);
    },
    [dialogs]
  );

  const popDialog = useCallback(
    (e: any, result: any) => {
      const dialog = dialogs.pop();

      if (dialog && Array.isArray(dialog)) {
        const [, , resolve] = dialog;
        resolve(result);
      }
      setComponents([...dialogs]);
    },
    [dialogs]
  );

  const dialogContext = useMemo(() => {
    return { pushDialog, popDialog };
  }, [pushDialog, popDialog]);

  return (
    <DialogContext.Provider value={dialogContext}>
      {Children.only(children)}
      {dialogs.map(([component, componentProps], index) => {
        return createElement(component, {
          key: index,
          popDialog,
          ...componentProps,
        });
      })}
    </DialogContext.Provider>
  );
};
