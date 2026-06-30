import OutputHeader from "./OutputHeader";
import Terminal from "./Terminal";

interface OutputPanelProps {
  output: string;
  error: string | null;
  onClear: () => void;
}

export default function OutputPanel({
  output,
  error,
  onClear,
}: OutputPanelProps) {
  return (
    <aside className="flex w-96 flex-col bg-nova-bg">
      <OutputHeader onClear={onClear} />

      <Terminal
        output={output}
        error={error}
      />
    </aside>
  );
}