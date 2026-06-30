import { EditorState } from "@codemirror/state";
import {
  drawSelection,
  highlightActiveLine,
  highlightActiveLineGutter,
  keymap,
  lineNumbers,
} from "@codemirror/view";
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from "@codemirror/commands";

import { highlightState } from "@/editor/extensions/highlightState";
import { novaHighlightExtension } from "@/editor/extensions/highlighting";

export function basicExtensions(onRun: () => void) {
  return [
    lineNumbers({
      formatNumber: (lineNo) => String(lineNo),
    }),

    history(),

    drawSelection(),

    highlightActiveLine(),

    highlightActiveLineGutter(),

    EditorState.tabSize.of(4),

    keymap.of([
      {
        key: "Ctrl-Enter",
        run: () => {
          onRun();
          return true;
        },
      },
      {
        key: "Cmd-Enter",
        run: () => {
          onRun();
          return true;
        },
      },

      indentWithTab,
      ...defaultKeymap,
      ...historyKeymap,
    ]),

    highlightState,
    novaHighlightExtension,
  ];
}