import { FC } from "react";
import { StyledCollapse, StyledSidebar } from "./styled";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTE_BASE } from "../../common/constants";
import { IconBurger, IconLogo, IconPieChart } from "../../assets";

interface ISidebar {
  collapsed: boolean;
  handleToggle: () => void;
}

export const Sidebar: FC<ISidebar> = ({ collapsed, handleToggle }) => {
  return (
    <StyledCollapse className={collapsed ? "Mui-collapsed" : ""}>
      <StyledSidebar>
        <Box textAlign='center' mb={6}>
          <Stack
            component={Link}
            to={ROUTE_BASE}
            alignItems='center'
            spacing={3}
          >
            <IconLogo />
          </Stack>
        </Box>
        <Stack spacing={1} direction='row' alignItems='center'>
          <IconButton onClick={handleToggle} color='inherit'>
            <IconBurger />
          </IconButton>
        </Stack>
        <Box component='nav' position='sticky' top={20}>
          <Stack direction='row' spacing={2}>
            <IconPieChart />
            <Typography>Аналитика</Typography>
          </Stack>
        </Box>
      </StyledSidebar>
    </StyledCollapse>
  );
};
