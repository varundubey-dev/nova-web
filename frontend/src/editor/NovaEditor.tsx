import CodeMirror from "@uiw/react-codemirror";

import EditorToolbar from "@components/playground/EditorToolbar";

import { basicExtensions } from "./extensions/basic";
import { novaTheme } from "./theme";

interface NovaEditorProps {
  code: string;
  fileName: string;
  onCodeChange: (code: string) => void;
  onRun: () => void;
}

export default function NovaEditor({
  code,
  fileName,
  onCodeChange,
  onRun,
}: NovaEditorProps) {
  return (
   <section className="flex h-full min-w-0 flex-col overflow-hidden border-r border-nova-border bg-nova-bg">
    <EditorToolbar fileName={fileName} />
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <CodeMirror
          value={code}
          onChange={(value) => onCodeChange(value)}
          extensions={basicExtensions(onRun)}
          theme={novaTheme}
          basicSetup={false}
          height="100%"
          className="min-w-0  flex-1"
        />
      </div>
    </section>
  );
}
