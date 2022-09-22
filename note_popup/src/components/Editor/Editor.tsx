import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import {
  EditorContextProvider,
  UiMode,
  useEditorContext,
} from "../../contexts/EditorContext";
import "./Editor.css";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { EditorUiModeToggle } from "./EditorUiModeToggle";

const PLACEHOLDER_TEXT = "# Welcome to Page Note!";
const getDefaultText = (place: string) => `# ${place}`;

export const Editor: React.FC = () => {
  const [text, setText] = useState<string>("");

  return (
    <EditorContextProvider>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            right: 7,
            top: 7,
            transitionDuration: "0.3s",
            bgcolor: "white",
            ":not(:hover)": { opacity: 0.15 },
          }}
        >
          <EditorUiModeToggle />
        </Box>
        <EditorLayout text={text} setText={setText} />
      </Box>
    </EditorContextProvider>
  );
};

const EditorLayout: React.FC<{
  text: string;
  setText: (v: string) => void;
}> = ({ text, setText }) => {
  const { uiMode } = useEditorContext();

  if (uiMode.value === UiMode.EDIT_VIEW_SIDE_TO_SIDE) {
    return (
      <Grid container>
        <Grid item xs={6} sx={{ borderRight: "1px solid lightgray" }}>
          <Editor_ text={text} setText={setText} />
        </Grid>
        <Grid item xs={6}>
          <Viewer text={text} />
        </Grid>
      </Grid>
    );
  }

  if (uiMode.value === UiMode.ONLY_EDIT) {
    return <Editor_ text={text} setText={setText} />;
  }

  return <Viewer text={text} />;
};

const Editor_: React.FC<{ text: string; setText: (v: string) => void }> = ({
  text,
  setText,
}) => (
  <textarea
    style={{
      width: "100%",
      height: "600px", // longer than the max of height limited by chrome extention
      boxSizing: "border-box",
      border: "none",
      marginLeft: "0.25rem",
      marginTop: "0.25rem",
      backgroundColor: "inherit",
    }}
    value={text || ""}
    placeholder={text.length === 0 ? PLACEHOLDER_TEXT : undefined}
    onChange={(e) => setText(e.target.value)}
  />
);

const Viewer: React.FC<{ text: string }> = ({ text }) => (
  <Box
    className={"popup-viewer"}
    sx={{ pl: "0.25rem", boxSizing: "border-box" }}
  >
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      rehypePlugins={[
        [rehypeHighlight, { subset: false, ignoreMissing: true }],
      ]}
    >
      {text}
    </ReactMarkdown>
  </Box>
);
