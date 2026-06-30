import { RangeSet, StateEffect, StateField } from "@codemirror/state";
import { type DecorationSet, EditorView } from "@codemirror/view";

export const setDecorations = StateEffect.define<DecorationSet>();

export const highlightState = StateField.define<DecorationSet>({
  create() {
    return RangeSet.empty;
  },

  update(decorations, transaction) {
    decorations = decorations.map(transaction.changes);

    for (const effect of transaction.effects) {
      if (effect.is(setDecorations)) {
        decorations = effect.value;
      }
    }

    return decorations;
  },

  provide: (field) => EditorView.decorations.from(field),
});
