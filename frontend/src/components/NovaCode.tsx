import { useEffect, useMemo, useState } from "react";
import { tokenize } from "@api/tokenizer";
import { renderTokens } from "@syntax/renderTokens";
import type { Token, SemanticToken } from "@syntax/token";

interface NovaCodeProps {
  code: string;
  className?: string;
  showLineNumbers?: boolean;
}

export default function NovaCode({
  code,
  className = "",
  showLineNumbers = false,
}: NovaCodeProps) {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [semanticTokens, setSemanticTokens] = useState<SemanticToken[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const result = await tokenize(code);

        if (cancelled) return;

        setTokens(result.tokens);
        setSemanticTokens(result.semantic);
      } catch (err) {
        console.error(err);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [code]);



  const rendered = useMemo(
    () => renderTokens(tokens, semanticTokens),
    [tokens, semanticTokens],
  );

  if (showLineNumbers) {
    return (
      <div className={`nova-code-block overflow-hidden ${className}`}>
        <div className="flex">
          <div className="select-none py-4 pl-4 pr-3 text-right text-nova-muted-dark text-sm font-mono leading-[1.7] border-r border-nova-border min-w-12">
            {rendered.nodes.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          <div className="flex-1 py-4 px-4 overflow-x-auto">
            <pre className="text-sm font-mono leading-[1.7]whitespace-pre-wrap wrap-break-words ">
              {rendered.nodes.map((line, i) => (
                <div key={i}>{line.length ? line : "\u00A0"}</div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    );
  }

  return (
    <pre
      className={`text-sm font-mono leading-[1.7] whitespace-pre-wrap wrap-break-words  ${className}`}
    >
      {rendered.nodes.map((line, i) => (
        <div key={i}>{line.length ? line : "\u00A0"}</div>
      ))}
    </pre>
  );
}
