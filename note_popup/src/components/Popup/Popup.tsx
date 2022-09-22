import { Box, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Editor } from "../Editor/Editor";
import { EditorContextProvider } from "../../contexts/EditorContext";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: purple,
   },
});

export const Popup: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "800px",
          minHeight: "600px",
          boxSizing: "border-box"
        }}
      >
        <Header />
        <Editor />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};
