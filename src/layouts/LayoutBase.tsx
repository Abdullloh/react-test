import { FC, useState } from "react";
import { Box, Stack } from "@mui/material";
import { Sidebar } from "../components";
import { HomePage } from "../pages";

export const LayoutBase: FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box sx={{ background: "#EBEBF0" }} component={Stack} direction='row'>
      <Sidebar collapsed={collapsed} handleToggle={handleCollapse} />
      <Box flex={2}>
        <HomePage handdleToggle={handleCollapse} />
      </Box>
    </Box>
  );
};
