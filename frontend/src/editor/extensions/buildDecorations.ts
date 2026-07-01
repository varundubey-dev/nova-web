import { RangeSetBuilder } from "@codemirror/state";
import { Decoration, type DecorationSet } from "@codemirror/view";

import { TOKEN_THEME, SEMANTIC_THEME } from "@syntax/theme";
import { TOKEN_TYPES, type SemanticToken, type Token } from "@syntax/token";

export function buildDecorations(
  code: string,
  tokens: Token[],
  semanticTokens: SemanticToken[],
): DecorationSet {
  const builder = new RangeSetBuilder<Decoration>();

  // Same semantic lookup you already use
  const semanticMap = new Map<string, SemanticToken>();

  for (const semantic of semanticTokens) {
    const key = Array.isArray(semantic.value)
      ? semantic.value.join(".")
      : semantic.value;

    semanticMap.set(key, semantic);
  }

  const lineOffsets: number[] = [0];

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "\n") {
      lineOffsets.push(i + 1);
    }
  }

  for (const token of tokens) {
    if (token.type === TOKEN_TYPES.NEWLINE) {
      continue;
    }

    if (token.type === TOKEN_TYPES.EOF) {
      continue;
    }

    const value = token.value === null ? "null" : String(token.value);

    let className = TOKEN_THEME[token.type];

    if (token.type === TOKEN_TYPES.IDENTIFIER) {
      const semantic = semanticMap.get(value);

      if (semantic) {
        className = SEMANTIC_THEME[semantic.kind] ?? className;
      }
    }

    if (!className) {
      continue;
    }

    const offset = lineOffsets[token.line - 1] + (token.column - 1);

    builder.add(
      offset,
      offset + value.length,
      Decoration.mark({
        class: className,
      }),
    );
  }

  return builder.finish();
}
