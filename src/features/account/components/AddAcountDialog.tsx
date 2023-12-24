import { FC } from "react";
import { DialogBase } from "../../../components";
import { DialogProps } from "@mui/material";
import { AddAccountForm } from ".";
import { useAppDispatch } from "../../../store";
import { addUser } from "../slice";
import { IUser } from "../models";

export interface IAddAcountDialog extends DialogProps {
  type: "create" | "update";
  data?: IUser;
  resolve?: () => void;
}

export const AddAcountDialog: FC<IAddAcountDialog> = ({
  type,
  resolve,
  ...props
}) => {
  const dispatch = useAppDispatch();
  console.log(props);

  const handleSubmit = (values: any) => {
    dispatch(addUser(values));
    if (resolve) resolve();
    console.log(values);
  };

  return (
    <DialogBase {...props} title={"add user"} maxWidth='sm' fullWidth>
      <AddAccountForm
        onValid={handleSubmit}
        defaultValues={type === "create" ? {} : props.data}
      />
    </DialogBase>
  );
};
