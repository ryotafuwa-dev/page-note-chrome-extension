import { Stack } from "@mui/material";
import React from "react";
import { GoogleDriveSyncedChip } from "../../GoogleDriveSyncedChip";
import { MenuDrawer } from "../../MenuDrawer/MenuDrawer";

export const Header: React.FC = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "scroll",
        paddingX: 1,
        borderBottom: "1px solid lightgray",
      }}
    >
      <MenuDrawer />
      <GoogleDriveSyncedChip />
    </Stack>
  );
};
