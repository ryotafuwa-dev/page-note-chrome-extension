import { Box, Chip, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { GoogleDriveIcon } from "../icons";

export const GoogleDriveSyncedChip: React.FC = () => {
  const theme = useTheme();
  return (
    <Chip
      size="small"
      onClick={() => {}}
      label={
        <Stack direction="row" spacing={1}>
          <GoogleDriveIcon />
          <Box
            sx={{
              fontWeight: "bold",
              alignSelf: "center",
              color: theme.palette.primary.main,
            }}
          >
            Synced
          </Box>
        </Stack>
      }
    />
  );
};
