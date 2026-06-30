import { Terminal, Trash2 } from "lucide-react";

interface OutputHeaderProps {
  onClear: () => void;
}

export default function OutputHeader({
  onClear,
}: OutputHeaderProps) {
  return (
    <div className="flex h-11 items-center justify-between border-b border-nova-border bg-nova-surface px-4">
      <div className="flex items-center gap-2">
        <Terminal className="h-4 w-4 text-nova-muted" />

        <span className="text-xs font-semibold uppercase tracking-wide text-nova-muted">
          Output
        </span>
      </div>

      <button
        onClick={onClear}
        className="flex items-center gap-1 rounded px-2 py-1 text-xs cursor-pointer text-nova-muted transition-colors hover:bg-nova-border hover:text-nova-text"
      >
        <Trash2 className="h-3.5 w-3.5" />
        Clear
      </button>
    </div>
  );
}