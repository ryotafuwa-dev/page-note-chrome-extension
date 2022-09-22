import { Typography } from "@mui/material";
import React from "react";
import { useUrl } from "../../../../hooks/useUrl";

const FALLBACK_TITLE = "Welcome to Note!";

export const Title: React.FC = () => {
  const url = { host: FALLBACK_TITLE}; // useUrl();
  return (
    <Typography variant="h6" fontWeight="bold" alignSelf="center" sx={{color: "white"}} >
      {url ? url.host : FALLBACK_TITLE}
    </Typography>
  );
};
