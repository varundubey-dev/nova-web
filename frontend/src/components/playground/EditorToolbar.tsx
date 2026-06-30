interface EditorToolbarProps {
  fileName?: string;
}

export default function EditorToolbar({
  fileName = "main.nova",
}: EditorToolbarProps) {
  return (
    <div className="flex h-11 items-center border-b border-nova-border bg-nova-bg px-4">
      {/* Window controls */}
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500/70" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <div className="h-3 w-3 rounded-full bg-green-500/70" />
      </div>

      {/* File name */}
      <div className="ml-4">
        <span className="font-mono text-xs text-nova-muted">
          {fileName}
        </span>
      </div>

      {/* Future status */}
      <div className="ml-auto">
        <span className="font-mono text-xs text-nova-muted">
          Ctrl + Enter
        </span>
      </div>
    </div>
  );
}