import { FC, FocusEvent } from "react";
import { IUser } from "../models";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
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

interface IAccountListCard {
  data: IUser[];
}

export const AccountListCard: FC<IAccountListCard> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [openDialog] = useDialog(AddAcountDialog);
  const [openSuccessDialog] = useDialog(DialogSuccess);

  const handleOpenDialog = () => {
    openDialog({
      resolve: () => openSuccessDialog(),
    });
  };

  const handleSearchUser = (e: FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(searchUser(value));
  };

  return (
    <Card sx={{ width: "80%" }}>
      <CardHeader
        title='Команда'
        action={
          <Stack direction='row' spacing={2}>
            <TextField size='small' onChange={handleSearchUser} />
            <Button variant='contained' onClick={handleOpenDialog}>
              Добавить пользователя
            </Button>
          </Stack>
        }
      />
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
    </Card>
  );
};
