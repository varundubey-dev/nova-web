import CodeMirror from "@uiw/react-codemirror";
import clsx from "clsx";

import EditorToolbar from "@components/playground/EditorToolbar";

import { basicExtensions } from "@/editor/extensions/basic";
import { novaTheme } from "@/editor/theme";

interface NovaEditorProps {
  code: string;
  fileName: string;
  onCodeChange: (code: string) => void;
  onRun: () => void;

  showToolbar?: boolean;
  className?: string;
}

export default function NovaEditor({
  code,
  fileName,
  onCodeChange,
  onRun,
  showToolbar = true,
  className,
}: NovaEditorProps) {
  return (
    <section
      className={clsx(
        "flex h-full min-w-0 flex-col overflow-hidden bg-nova-bg",
        showToolbar && "border-r border-nova-border",
        className,
      )}
    >
      {showToolbar && <EditorToolbar fileName={fileName} />}

      <div className="flex min-h-0 flex-1 overflow-hidden">
        <CodeMirror
          value={code}
          onChange={onCodeChange}
          extensions={basicExtensions(onRun)}
          theme={novaTheme}
          basicSetup={false}
          height="100%"
          className="min-w-0 flex-1"
        />
      </div>
    </section>
  );
}
