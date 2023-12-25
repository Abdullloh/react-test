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
  idx: number;
}

export const AccountActionMenu: FC<IAccountActionMenu> = ({ data, idx }) => {
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
      type: "update",
      title: "Изменить права доступа",
      idx,
      resolve: () => {
        openSuccessDialog({ title: "Успешно обновлено" });
      },
    });
  };

  const menuData: ActionMenuDataProps[] = [
    {
      label: "Изменить права доступа",
      onClick: handleEdit,
    },
    {
      label: "Удалить",
      onClick: handleDelete,
    },
  ];

  return <ActionMenu data={menuData} />;
};
