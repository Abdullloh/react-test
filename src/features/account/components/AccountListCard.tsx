import { FC, FocusEvent } from "react";
import { IUser } from "../models";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AccountActionMenu } from ".";
import { useDialog } from "../../../common/hooks";
import { AddAcountDialog } from "./AddAcountDialog";
import { DialogSuccess } from "../../../components";
import { useAppDispatch } from "../../../store";
import { searchUser } from "../slice";
import { IconSearch } from "../../../assets";

interface IAccountListCard {
  data: IUser[];
  handleToggle: () => void;
}

export const AccountListCard: FC<IAccountListCard> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [openDialog] = useDialog(AddAcountDialog);
  const [openSuccessDialog] = useDialog(DialogSuccess);

  const handleOpenDialog = () => {
    openDialog({
      type: "create",
      title: "Отправьте приглашение",
      resolve: () =>
        openSuccessDialog({
          title: "Приглашение отправлено на почту example@email.com",
        }),
    });
  };

  const handleSearchUser = (e: FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(searchUser(value));
  };

  return (
    <Box
      component={Card}
      sx={{
        width: { xs: "100%", lg: "80%" },
        height: { xs: "100vh", lg: "auto" },
      }}
    >
      <Stack
        spacing={2}
        p={2}
        direction={{ sx: "column", md: "row" }}
        justifyContent='space-between'
      >
        <Typography variant='h6'>Команда</Typography>
        <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
          <TextField
            label='Поиск по Email'
            size='small'
            onChange={handleSearchUser}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <IconSearch viewBox='0 0 26 16' />
                </IconButton>
              ),
            }}
          />
          <Button variant='contained' onClick={handleOpenDialog}>
            Добавить пользователя
          </Button>
        </Stack>
      </Stack>

      <CardContent>
        {data.map((user, idx) => (
          <Stack
            key={idx}
            my={4}
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <Stack direction='row' alignItems='center' spacing={2}>
              <Box
                component='img'
                src={user.image}
                height={64}
                width={64}
                borderRadius={50}
                sx={{
                  objectFit: "cover",
                }}
              />
              <Stack spacing={2}>
                <Box
                  component={Stack}
                  direction='row'
                  alignItems='center'
                  spacing={2}
                >
                  <Typography variant='h5'>{user.name}</Typography>
                  <Typography color='text.secondary'>{user.email}</Typography>
                </Box>
                <Box component={Stack} spacing={2} direction='row'>
                  {user?.permissions?.map((item, idx) => (
                    <Chip key={idx} variant='outlined' label={item} />
                  ))}
                </Box>
              </Stack>
            </Stack>
            <Box>
              <AccountActionMenu data={user} idx={idx} />
            </Box>
          </Stack>
        ))}
      </CardContent>
    </Box>
  );
};
