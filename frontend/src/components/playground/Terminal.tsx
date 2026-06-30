interface TerminalProps {
  output: string;
  error: string | null;
}

export default function Terminal({
  output,
  error,
}: TerminalProps) {
  return (
    <div className="flex-1 overflow-auto bg-nova-bg p-4 font-mono text-sm">
      {error ? (
        <pre className="whitespace-pre-wrap text-red-400">
          {error}
        </pre>
      ) : output ? (
        <pre className="whitespace-pre-wrap text-green-400">
          {output}
        </pre>
      ) : (
        <span className="text-nova-muted">
          Press Run to execute your program.
        </span>
      )}
    </div>
  );
}