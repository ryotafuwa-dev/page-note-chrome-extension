import { useAsyncEffect } from "@react-hook/async";
import { useState } from "react";

export const useUrl = (): URL | null => {
  const [url, setUrl] = useState<URL | null>(null);

  useAsyncEffect(async () => {
    const tabs = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });
    if (tabs.length === 0) {
      return;
    }

    const { url } = tabs[0];
    setUrl(url ? new URL(url) : null);
  }, []);

  return url;
};
