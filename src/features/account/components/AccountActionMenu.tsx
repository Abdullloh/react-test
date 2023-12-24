import { FC } from "react";
import {
  ActionMenu,
  ActionMenuDataProps,
  DialogSuccess,
} from "../../../components";
import { useAppDispatch } from "../../../store";
import { deleteUser } from "../slice";
import { IUser } from "../models";
import { useDialog } from "../../../common/hooks";
import { AddAcountDialog } from ".";

interface IAccountActionMenu {
  data: IUser;
}

export const AccountActionMenu: FC<IAccountActionMenu> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [openDialog] = useDialog(AddAcountDialog);
  const [openSuccessDialog] = useDialog(DialogSuccess);

  const handleDelete = () => {
    dispatch(deleteUser(data.email));
    openSuccessDialog({ title: "Пользователь успешно удален " });
  };

  const handleEdit = () => {
    openDialog({
      data,
      resolve: () => {},
    });
  };

  const menuData: ActionMenuDataProps[] = [
    {
      label: "action.edit",
      onClick: handleEdit,
    },
    {
      label: "action.delete",
      onClick: handleDelete,
    },
  ];

  return <ActionMenu data={menuData} />;
};
