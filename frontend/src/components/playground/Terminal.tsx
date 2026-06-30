import type { RunError } from "@api/run";

interface TerminalProps {
  output: string;
  error: RunError | null;
  fileName: string;
}

export default function Terminal({ output, error, fileName }: TerminalProps) {
  return (
    <div className="flex-1 overflow-auto bg-nova-bg p-4 font-mono text-sm">
      {error ? (
        <div className="space-y-3">
          <div>
            <span className="font-semibold text-red-400">{error.category}</span>
            <span className="text-nova-text">: {error.message}</span>
          </div>

          {error.line > 0 && (
            <>
              <div className="text-cyan-400">
                {`--> ${fileName}:${error.line}:${error.column}`}
              </div>

              <div className="text-nova-text">
                <span className="text-nova-muted">{error.line} |</span>{" "}
                {error.sourceLine}
              </div>

              <div className="whitespace-pre text-yellow-400">
                {" ".repeat(
                  String(error.line).length + 3 + Math.max(error.column - 1, 0),
                )}
                ^
              </div>
            </>
          )}
        </div>
      ) : output ? (
        <pre className="whitespace-pre-wrap text-green-400">{output}</pre>
      ) : (
        <span className="text-nova-muted">
          Press Run to execute your program.
        </span>
      )}
    </div>
  );
}
