import { Components, Theme } from "@mui/material";

export const components: Components<Omit<Theme, "components">> = {
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.spacing(2),
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        borderRadius: theme.spacing(1.25),
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.spacing(3),
      }),
    },
  },
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.spacing(1.2),
        "&:hover": {
          cursor: "pointer",
          color: theme.palette.secondary.dark,
          borderColor: theme.palette.secondary.dark,
        },
      }),
    },
  },
};
