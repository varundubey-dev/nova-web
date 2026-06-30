import { METADATA } from "@data/metadata";
import { BookOpen, Copy, Check, Download, FileCode, Play } from "lucide-react";

interface PlaygroundHeaderProps {
  isRunning: boolean;
  sidebarOpen: boolean;
  copied: boolean;

  onRun: () => void;
  onToggleSidebar: () => void;
  onCopy: () => void;
  onDownload: () => void;
}

export default function PlaygroundHeader({
  isRunning,
  sidebarOpen,
  copied,
  onRun,
  onToggleSidebar,
  onCopy,
  onDownload,
}: PlaygroundHeaderProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-nova-border bg-nova-surface px-4">
      <div className="flex items-center gap-3">
        <FileCode className="h-5 w-5 text-nova-blue" />

        <div className="flex gap-3 items-baseline leading-none">
          <span className="text-sm font-semibold text-nova-text">
            {METADATA.name} Playground
          </span>

          <span className="hidden font-mono text-xs text-nova-muted-dark sm:block">
            {METADATA.version}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleSidebar}
          className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm transition-colors ${
            sidebarOpen
              ? "border-nova-blue bg-nova-blue/10 text-nova-blue"
              : "border-nova-border bg-nova-surface text-nova-muted hover:text-nova-text"
          }`}
        >
          <BookOpen size={14} />
          Examples
        </button>

        <button
          onClick={onCopy}
          className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm transition-colors ${
            copied
              ? "border-green-500 bg-green-500/10 text-green-500"
              : "border-nova-border bg-nova-surface text-nova-muted hover:text-nova-text"
          }`}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}

          {copied ? "Copied" : "Copy"}
        </button>

        <button
          onClick={onDownload}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-nova-border bg-nova-surface px-3 py-1.5 text-sm text-nova-muted transition-colors hover:text-nova-text"
        >
          <Download size={14} />
          Download
        </button>

        <button
          onClick={onRun}
          disabled={isRunning}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-nova-blue px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-nova-blue/70 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Play size={13} />

          {isRunning ? "Running..." : "Run"}
        </button>
      </div>
    </header>
  );
}
