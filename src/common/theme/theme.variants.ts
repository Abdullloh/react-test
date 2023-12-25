import { createTheme } from "@mui/material";
import { lighPalette } from "./palette/light";
import { components } from "./components";

export const theme = createTheme({
  palette: lighPalette,
  components,
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
