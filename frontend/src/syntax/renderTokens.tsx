import { SEMANTIC_THEME, TOKEN_THEME } from "@syntax/theme";
import { TOKEN_TYPES, type SemanticToken, type Token } from "@syntax/token";

interface RenderResult {
  nodes: React.ReactNode[][];
  cursorLine: number;
  cursorColumn: number;
}

export function renderTokens(
  tokens: Token[],
  semanticTokens: SemanticToken[],
  visibleCharacters = Number.MAX_SAFE_INTEGER,
): RenderResult {
  const lines: React.ReactNode[][] = [[]];

  // Semantic lookup by identifier name only
  const semanticMap = new Map<string, SemanticToken>();

  for (const semantic of semanticTokens) {
    const key = Array.isArray(semantic.value)
      ? semantic.value.join(".")
      : semantic.value;

    semanticMap.set(key, semantic);
  }

  let cursorLine = 1;
  let cursorColumn = 1;
  let remaining = visibleCharacters;

  for (const [index, token] of tokens.entries()) {
    const value = token.value === null ? "null" : String(token.value);

    if (token.type === TOKEN_TYPES.NEWLINE) {
      if (remaining <= 0) break;

      remaining--;
      lines.push([]);
      cursorLine++;
      cursorColumn = 1;
      continue;
    }

    if (token.type === TOKEN_TYPES.EOF) {
      continue;
    }

    while (cursorLine < token.line) {
      lines.push([]);
      cursorLine++;
      cursorColumn = 1;
    }

    const spaces = token.column - cursorColumn;

    if (spaces > 0) {
      const visibleSpaces = Math.min(spaces, remaining);

      if (visibleSpaces > 0) {
        lines[cursorLine - 1].push(
          <span key={`space-${index}`}>{" ".repeat(visibleSpaces)}</span>,
        );

        remaining -= visibleSpaces;
        cursorColumn += visibleSpaces;
      }

      if (visibleSpaces < spaces) break;
    }

    if (remaining <= 0) break;

    const visibleValue = value.slice(0, remaining);

    let className = TOKEN_THEME[token.type];

    if (token.type === TOKEN_TYPES.IDENTIFIER) {
      const semantic = semanticMap.get(value);

      if (semantic) {
        className = SEMANTIC_THEME[semantic.kind] ?? className;
      }
    }

    lines[cursorLine - 1].push(
      <span key={`token-${index}`} className={className}>
        {visibleValue}
      </span>,
    );

    remaining -= visibleValue.length;
    cursorColumn += visibleValue.length;

    if (visibleValue.length < value.length) break;
  }

  return {
    nodes: lines,
    cursorLine,
    cursorColumn,
  };
}
