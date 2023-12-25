import { Box, Button, styled } from "@mui/material";

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
    width: 65,
    "&:after": {
      width: 0,
    },
  },
  [theme.breakpoints.down("xs")]: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: 256,
  margin: theme.spacing(0.5, 0),
  padding: theme.spacing(1.25, 2),
  fontSize: 13,
  fontWeight: 500,
  textAlign: "left",
  borderRadius: 6,
  "& svg": {
    transition: "all 250ms ease",
    "&:first-of-type": {
      marginRight: theme.spacing(2),
    },
  },
}));
