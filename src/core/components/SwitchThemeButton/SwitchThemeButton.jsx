import { IconButton, useTheme } from "@mui/material";
import DarkIcon from "@mui/icons-material/Brightness4";
import LightIcon from "@mui/icons-material/Brightness7";
import React from "react";
import { useContext } from "react";

import { ColorContext } from "core/contexts/ColorContext";

export const SwitchThemeButton = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorContext);

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
    </IconButton>
  );
};
