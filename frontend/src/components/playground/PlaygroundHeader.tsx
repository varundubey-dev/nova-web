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

        <div className="flex items-baseline gap-2">
          <span className="text-sm font-semibold text-nova-text">
            {METADATA.name}
          </span>

          <span className="md:inline text-sm font-semibold text-nova-text">
            Playground
          </span>

          <span className="hidden lg:block font-mono text-xs text-nova-muted-dark">
            {METADATA.version}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleSidebar}
          className={`inline-flex h-9 items-center justify-center gap-2 rounded-lg border px-3 text-sm transition-colors cursor-pointer ${
            sidebarOpen
              ? "border-nova-blue bg-nova-blue/10 text-nova-blue"
              : "border-nova-border text-nova-muted hover:text-nova-text"
          }`}
        >
          <BookOpen size={16} />
          <span className="hidden lg:inline">Examples</span>
        </button>

        <button
          onClick={onCopy}
          className={`inline-flex h-9 items-center justify-center gap-2 rounded-lg border px-3 text-sm transition-colors cursor-pointer ${
            copied
              ? "border-green-500 bg-green-500/10 text-green-500"
              : "border-nova-border text-nova-muted hover:text-nova-text"
          }`}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          <span className="hidden lg:inline">{copied ? "Copied" : "Copy"}</span>
        </button>

        <button
          onClick={onDownload}
          className="hidden md:inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-nova-border px-3 text-sm cursor-pointer text-nova-muted transition-colors hover:text-nova-text"
        >
          <Download size={16} />
          <span className="hidden xl:inline">Download</span>
        </button>

        <button
          onClick={onRun}
          disabled={isRunning}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-nova-blue px-3 md:px-4 text-sm font-medium cursor-pointer text-white transition-colors hover:bg-nova-blue/80 disabled:opacity-60"
        >
          <Play size={15} />
          <span className="hidden sm:inline">
            {isRunning ? "Running..." : "Run"}
          </span>
        </button>
      </div>
    </header>
  );
}
