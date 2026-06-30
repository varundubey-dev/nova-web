import { useEffect, useRef, useState } from "react";

import { tokenize } from "@api/tokenizer";
import { renderTokens } from "@syntax/renderTokens";

export function useSyntaxHighlighting(code: string) {
  const requestIdRef = useRef(0);
  const lastCodeRef = useRef("");

  const [renderedLines, setRenderedLines] = useState<React.ReactNode[][]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (code === lastCodeRef.current) {
      return;
    }

    const timeout = setTimeout(async () => {
      const requestId = ++requestIdRef.current;

      try {
        const { tokens, semantic } = await tokenize(code);

        if (requestId !== requestIdRef.current) {
          return;
        }

        lastCodeRef.current = code;

        const { nodes } = renderTokens(tokens, semantic);

        setRenderedLines(nodes);

        if (!ready) {
          setReady(true);
        }
      } catch (error) {
        if (requestId === requestIdRef.current) {
          console.error(error);
        }
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [code, ready]);

  return {
    renderedLines,
    ready,
  };
}