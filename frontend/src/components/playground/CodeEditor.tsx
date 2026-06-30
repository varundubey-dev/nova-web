import { useRef } from "react";

import EditorToolbar from "./EditorToolbar";
import LineNumbers from "./LineNumbers";

interface CodeEditorProps {
  code: string;
   fileName: string;
  onCodeChange: (code: string) => void;
}

export default function CodeEditor({ code, onCodeChange, fileName }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Tab") return;

    event.preventDefault();

    const textarea = event.currentTarget;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const updated = code.slice(0, start) + "    " + code.slice(end);

    onCodeChange(updated);

    requestAnimationFrame(() => {
      if (!textareaRef.current) return;

      textareaRef.current.selectionStart = start + 4;
      textareaRef.current.selectionEnd = start + 4;
    });
  }
  function handleScroll() {
    if (!textareaRef.current || !lineNumbersRef.current) return;

    lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
  }

  return (
    <section className="flex flex-1 flex-col border-r border-nova-border">
      <EditorToolbar fileName={fileName} />

      <div className="flex flex-1 overflow-hidden">
        <LineNumbers ref={lineNumbersRef} lineCount={code.split("\n").length} />
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder="Write NOVA code..."
          className="flex-1 resize-none overflow-auto whitespace-pre bg-nova-bg px-4 py-4 font-mono text-sm text-nova-text outline-none leading-7 caret-nova-blue"
        />
      </div>
    </section>
  );
}
