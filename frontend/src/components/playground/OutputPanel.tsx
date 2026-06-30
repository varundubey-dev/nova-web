import type { RunError } from "@api/run";
import OutputHeader from "./OutputHeader";
import Terminal from "./Terminal";

interface OutputPanelProps {
  output: string;
  error: RunError | null;
  fileName: string;
  onClear: () => void;
}

export default function OutputPanel({
  output,
  error,
  fileName,
  onClear,
}: OutputPanelProps) {
  return (
    <aside className="flex h-full min-h-0 w-full flex-col bg-nova-bg">
      <OutputHeader onClear={onClear} />

      <Terminal output={output} error={error} fileName={fileName} />
    </aside>
  );
}
