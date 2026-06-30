import { EditorView, ViewPlugin, ViewUpdate } from "@codemirror/view";

import { PlaygroundSocket } from "@api/playground";

import { buildDecorations } from "@/editor/extensions/buildDecorations";
import { setDecorations } from "@/editor/extensions/highlightState";

export const novaHighlightExtension = ViewPlugin.fromClass(
  class {
    private socket: PlaygroundSocket;

    private timeout: ReturnType<typeof setTimeout> | null = null;

    constructor(view: EditorView) {
      this.socket = new PlaygroundSocket(({ tokens, semantic }) => {
        const decorations = buildDecorations(
          view.state.doc.toString(),
          tokens,
          semantic,
        );

        view.dispatch({
          effects: setDecorations.of(decorations),
        });
      });

      this.highlight(view);
    }

    update(update: ViewUpdate) {
      if (!update.docChanged) return;

      this.highlight(update.view);
    }

    destroy() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.socket.close();
    }

    private highlight(view: EditorView) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(() => {
        this.socket.send(view.state.doc.toString());
      }, 50);
    }
  },
);
