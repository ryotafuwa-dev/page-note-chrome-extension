import { ToggleButton, ToggleButtonGroup, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import { UiMode, useEditorContext } from "../../../contexts/EditorContext";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import CropPortraitIcon from "@mui/icons-material/CropPortrait";

export const EditorUiModeToggle: React.FC = () => {
  const { uiMode } = useEditorContext();
  return (
    <ToggleButtonGroup
      orientation="vertical"
      color="secondary"
      value={uiMode.value}
      onChange={(_, v) => uiMode.set(v)}
      exclusive
      size='small'
    >
      {[
        Object.entries(UiMode).map(([_, uiMode]) => (
          <ToggleButton value={uiMode}>{getUiModeIcon(uiMode)}</ToggleButton>
        )),
      ]}
    </ToggleButtonGroup>
  );
};

const getUiModeIcon = (uiMode: UiMode): ReactNode => {
  switch (uiMode) {
    case UiMode.EDIT_VIEW_SIDE_TO_SIDE:
      return <VerticalSplitIcon />;
    case UiMode.ONLY_EDIT:
      return <ViewHeadlineIcon />;
    case UiMode.ONLY_VIEW:
    default:
      return <CropPortraitIcon />;
  }
};
