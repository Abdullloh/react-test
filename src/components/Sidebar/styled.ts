import { Box, styled } from "@mui/material";

export const StyledSidebar = styled(Box)(({ theme }) => ({
  height: "100vh",
  overflow: "auto",
  padding: theme.spacing(2, 1.5),
}));

export const StyledCollapse = styled(Box)(({ theme }) => ({
  alignSelf: "flex-start",
  position: "sticky",
  top: 0,
  zIndex: theme.zIndex.drawer,
  width: 280,
  overflow: "hidden",
  transition: "all 200ms ease-in-out",
  background: theme.palette.common.white,
  "&:after": {
    content: '""',
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
    width: 280,
    transition: "all 200ms ease-in-out",
  },
  "&.Mui-collapsed": {
    width: 110,
    "&:after": {
      width: 0,
    },
  },
  [theme.breakpoints.down("lg")]: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 110,
  },
}));
