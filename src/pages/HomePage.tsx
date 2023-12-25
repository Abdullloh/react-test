import { Box, Stack } from "@mui/material";
import { useAppSelector } from "../store";
import { AccountListCard } from "../features/account/components";
import { FC } from "react";

interface IHomePage {
  handdleToggle: () => void;
}

export const HomePage: FC<IHomePage> = ({ handdleToggle }) => {
  const { users } = useAppSelector((state) => state.accountSlice);

  return (
    <Box
      component={Stack}
      alignItems='center'
      justifyContent='center'
      height='100%'
    >
      <AccountListCard data={users} handleToggle={handdleToggle} />
    </Box>
  );
};
