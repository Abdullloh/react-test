import { Box, Stack } from "@mui/material";
import { useAppSelector } from "../store";
import { AccountListCard } from "../features/account/components";

export const HomePage = () => {
  const { users } = useAppSelector((state) => state.accountSlice);

  return (
    <Box
      component={Stack}
      alignItems='center'
      justifyContent='center'
      height='100%'
    >
      <AccountListCard data={users} />
    </Box>
  );
};
