import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./common/theme";
import { Provider } from "react-redux";
import { store } from "./store";
import { DialogProvider } from "./common/providers/dialog.provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DialogProvider>
          <App />
        </DialogProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
