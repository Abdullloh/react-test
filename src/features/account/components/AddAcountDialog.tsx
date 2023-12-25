import { FC } from "react";
import { DialogBase } from "../../../components";
import { DialogProps } from "@mui/material";
import { AddAccountForm } from ".";
import { useAppDispatch } from "../../../store";
import { addUser, updateUser } from "../slice";
import { IUser } from "../models";
import { ADD_ACCOUNT_DEFAULT_VALUES } from "../constants";

export interface IAddAcountDialog extends DialogProps {
  type: "create" | "update";
  data?: IUser;
  idx?: number;
  resolve?: () => void;
}

export const AddAcountDialog: FC<IAddAcountDialog> = ({
  type,
  title,
  resolve,
  idx,
  ...props
}) => {
  const dispatch = useAppDispatch();
  console.log(type, props);

  const handleSubmit = (values: any) => {
    console.log(values);

    type === "create"
      ? dispatch(addUser(values))
      : dispatch(updateUser({ idx, data: values }));
    if (resolve) resolve();
  };

  return (
    <DialogBase {...props} title={title} maxWidth='sm' fullWidth>
      <AddAccountForm
        onValid={handleSubmit}
        defaultValues={
          type === "create" ? ADD_ACCOUNT_DEFAULT_VALUES : props.data
        }
      />
    </DialogBase>
  );
};
