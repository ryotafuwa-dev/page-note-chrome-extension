import { useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100%",
        height: "2rem",
        alignContent: "center",
        backgroundColor: theme.palette.primary.light,
      }}
    ></Stack>
  );
};
