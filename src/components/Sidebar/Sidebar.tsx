import { FC } from "react";
import { StyledButton, StyledCollapse, StyledSidebar } from "./styled";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTE_BASE } from "../../common/constants";
import {
  IconBanner,
  IconBlog,
  IconBurger,
  IconDollar,
  IconGroup,
  IconLogOut,
  IconLogo,
  IconModerator,
  IconPieChart,
} from "../../assets";

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
          <StyledButton color='inherit'>
            <IconPieChart />
            <Typography>Аналитика</Typography>
          </StyledButton>
          <StyledButton color='inherit'>
            <IconModerator />
            <Typography>Модерация</Typography>
          </StyledButton>
          <StyledButton color='inherit'>
            <IconBanner />
            <Typography>Баннеры</Typography>
          </StyledButton>
          <StyledButton color='inherit'>
            <IconGroup />
            <Typography>Команда</Typography>
          </StyledButton>
          <StyledButton color='inherit'>
            <IconBlog />
            <Typography>Блог</Typography>
          </StyledButton>
          <StyledButton color='inherit'>
            <IconDollar />
            <Typography>Курс валют</Typography>
          </StyledButton>
          <StyledButton color='inherit'>
            <IconLogOut />
            <Typography>Курс валют</Typography>
          </StyledButton>
        </Box>
      </StyledSidebar>
    </StyledCollapse>
  );
};
