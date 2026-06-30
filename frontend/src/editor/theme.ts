import { EditorView } from "@codemirror/view";

export const novaTheme = EditorView.theme({
  "&": {
    minheight: "100%",
    backgroundColor: "var(--color-nova-bg)",
    color: "var(--color-nova-text)",
    fontFamily: "var(--font-mono)",
    fontSize: "14px",
    lineHeight: "28px",
    caretColor: "var(--color-nova-blue)",
  },

  ".cm-editor": {
    height: "100%",
  },

  ".cm-scroller": {
    overflow: "auto",
    fontFamily: "inherit",
    lineHeight: "28px",
  },

  ".cm-content": {
    paddingLeft: "8px",
    paddingRight: "16px",
    fontFamily: "var(--font-mono)",
    fontSize: "14px",
    lineHeight: "28px",
},

  ".cm-line": {
    padding: 0,
  },

  ".cm-focused": {
    outline: "none",
  },

  /* ---------- Line Numbers ---------- */

  ".cm-gutters": {
    backgroundColor: "var(--color-nova-bg)",
    borderRight: "1px solid var(--color-nova-border)",

    color: "var(--color-nova-muted)",
    fontFamily: "var(--font-mono)",
    fontSize: "14px",
    lineHeight: "28px",
    userSelect: "none",
  },

  ".cm-lineNumbers": {
    width: "52px",
    minWidth: "52px",
    paddingRight: "10px",
    boxSizing: "border-box",
  },

  ".cm-gutterElement": {
    textAlign: "right",
    lineHeight: "28px",
    height: "28px",
  },

  ".cm-activeLine": {
    backgroundColor: "transparent",
  },

  ".cm-activeLineGutter": {
    backgroundColor: "transparent",
    color: "var(--color-nova-text)",
  },

  ".cm-selectionBackground": {
    backgroundColor: "rgba(59,130,246,.25)",
  },

  ".cm-cursor": {
    borderLeftColor: "var(--color-nova-blue)",
  },
});
