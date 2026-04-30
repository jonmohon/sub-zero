"use client";

import { useEffect } from "react";

const SCRIPT_SRC = "https://cdn.apigateway.co/webchat-client..prod/sdk.js";
const WIDGET_ID = "74b52434-3e52-11f1-9591-d6af760c4600";
const FALLBACK_DELAY_MS = 6000;

const INTERACTION_EVENTS = [
  "scroll",
  "pointerdown",
  "keydown",
  "touchstart",
  "mousemove",
] as const;

export default function ChatWidgetLoader() {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;

    let loaded = false;

    const inject = () => {
      if (loaded) return;
      loaded = true;
      cleanup();

      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.dataset.widgetId = WIDGET_ID;
      script.defer = true;
      document.head.appendChild(script);
    };

    const cleanup = () => {
      INTERACTION_EVENTS.forEach((event) => {
        window.removeEventListener(event, inject);
      });
      window.clearTimeout(timeoutId);
    };

    INTERACTION_EVENTS.forEach((event) => {
      window.addEventListener(event, inject, { passive: true, once: true });
    });

    const timeoutId = window.setTimeout(inject, FALLBACK_DELAY_MS);

    return cleanup;
  }, []);

  return null;
}
