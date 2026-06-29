import { useEffect, useMemo, useState } from "react";
import { tokenize } from "@api/tokenizer";
import { renderTokens } from "@syntax/renderTokens";
import type { SemanticToken, Token } from "@syntax/token";
import { METADATA } from "@data/metadata";
import { SNIPPETS } from "@data/snippet";

export default function HeroEditor() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [semanticTokens, setSemanticTokens] = useState<SemanticToken[]>([]);

  const currentSnippet = SNIPPETS[snippetIndex];

  const rendered = useMemo(
    () => renderTokens(tokens, semanticTokens, charIndex),
    [tokens, semanticTokens, charIndex],
  );

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (charIndex < currentSnippet.length) {
      timeout = setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, 28);
    } else {
      timeout = setTimeout(() => {
        setSnippetIndex((i) => (i + 1) % SNIPPETS.length);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, currentSnippet]);

  useEffect(() => {
    let cancelled = false;

    async function loadTokens() {
      try {
        const result = await tokenize(currentSnippet);

        if (cancelled) return;

        setTokens(result.tokens);
        setSemanticTokens(result.semantic);
        setCharIndex(0); // start typing only after tokens are ready
      } catch (error) {
        if (!cancelled) {
          console.error(error);
        }
      }
    }

    loadTokens();

    return () => {
      cancelled = true;
    };
  }, [currentSnippet]);

  return (
    <div className="nova-code-block h-full flex flex-col">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-nova-border bg-nova-surface rounded-t-lg">
        <div className="w-3 h-3 rounded-full bg-nova-red opacity-70" />
        <div className="w-3 h-3 rounded-full bg-nova-yellow opacity-70" />
        <div className="w-3 h-3 rounded-full bg-nova-green opacity-70" />

        <span className="ml-2 text-xs text-nova-muted-dark font-mono">
          main.nova
        </span>
      </div>

      <div className="flex flex-1 min-h-0">
        <div className="select-none py-4 pl-4 pr-3 text-right text-nova-muted-dark text-sm font-mono leading-[1.7] border-r border-nova-border min-w-12">
          {Array.from({ length: Math.max(rendered.cursorLine, 12) }, (_, i) => (
            <div key={i} className="opacity-60">
              {i + 1}
            </div>
          ))}
        </div>

        <div className="flex-1 py-4 px-4 overflow-hidden">
          <pre className="text-sm font-mono leading-[1.7] whitespace-pre">
            {rendered.nodes.map((line, index) => (
              <div key={index}>
                {line.length > 0 ? line : "\u00A0"}

                {index + 1 === rendered.cursorLine && (
                  <span className="inline-block w-0.5 h-4 bg-nova-blue ml-0.5 align-text-bottom animate-blink" />
                )}
              </div>
            ))}
          </pre>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-1.5 bg-nova-surface border-t border-nova-border rounded-b-lg">
        <span className="text-xs text-nova-muted-dark font-mono">
          {METADATA.name} {METADATA.version}
        </span>

        <div className="flex items-center gap-3">
          <span className="text-xs text-nova-green font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-nova-green" />
            Ready
          </span>

          <span className="text-xs text-nova-muted-dark font-mono">
            Ln {rendered.cursorLine}
          </span>
        </div>
      </div>
    </div>
  );
}
