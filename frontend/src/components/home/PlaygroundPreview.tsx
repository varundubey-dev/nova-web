import { useCallback, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Play, Terminal } from "lucide-react";

import NovaEditor from "@/editor/NovaEditor";
import { run, type RunError } from "@api/run";
import { METADATA } from "@data/metadata";

const DEFAULT_CODE = `fn factorial(n: N) -> N {
    if n <= 1 {
        return 1
    }

    return n * factorial(n - 1)
}

print(factorial(5))
print(factorial(10))`;

export default function PlaygroundPreview() {
  const [code, setCode] = useState(DEFAULT_CODE);

  const [output, setOutput] = useState("");
  const [error, setError] = useState<RunError | null>(null);
  const [running, setRunning] = useState(false);

  const handleRun = useCallback(async () => {
    if (running) return;

    setRunning(true);

    try {
      const result = await run(code);

      setOutput(result.output.join("\n"));
      setError(result.error);
    } catch (err) {
      console.error(err);

      setOutput("");

      setError({
        category: "Connection Error",
        message: "Failed to connect to the NOVA backend.",
        line: 0,
        column: 0,
        sourceLine: "",
      });
    } finally {
      setRunning(false);
    }
  }, [code, running]);

  return (
    <section className="py-24 bg-nova-surface/30 border-y border-nova-border">
      <div className="max-w-300 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-nova-green/20 bg-nova-green/10 px-3 py-1 font-mono text-sm text-nova-green mb-6">
              <Play size={11} />
              Live Playground
            </div>

            <h2 className="nova-section-title mb-4">
              Try {METADATA.name} in your browser
            </h2>

            <p className="nova-section-subtitle mb-8">
              Write, edit and execute {METADATA.name} programs instantly.
              Experiment with the language before installing anything.
            </p>

            <Link to="/playground" className="nova-btn-primary">
              <Terminal size={15} />
              Open Full Playground
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-lg border border-nova-border bg-nova-bg shadow-lg">
            {/* Preview Toolbar */}
            <div className="flex items-center justify-between border-b border-nova-border bg-nova-surface px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-nova-red opacity-70" />
                <div className="w-3 h-3 rounded-full bg-nova-yellow opacity-70" />
                <div className="w-3 h-3 rounded-full bg-nova-green opacity-70" />

                <span className="ml-2 font-mono text-xs text-nova-muted-dark">
                  playground.nova
                </span>
              </div>

              <button
                onClick={handleRun}
                disabled={running}
                className="nova-btn-primary px-3 py-1.5 text-xs"
              >
                <Play size={12} />
                {running ? "Running..." : "Run"}
              </button>
            </div>

            <div className="h-72">
              <NovaEditor
                code={code}
                fileName="playground.nova"
                onCodeChange={setCode}
                onRun={handleRun}
                showToolbar={false}
              />
            </div>

            {/* Output */}

            <div className="border-t border-nova-border bg-nova-bg">
              <div className="flex items-center gap-2 border-b border-nova-border px-4 py-2">
                <Terminal size={12} className="text-nova-muted-dark" />

                <span className="font-mono text-xs uppercase tracking-wider text-nova-muted-dark">
                  Output
                </span>
              </div>

              <div className="h-36 overflow-auto px-4 py-3">
                {running ? (
                  <div className="flex items-center gap-2 font-mono text-sm text-nova-muted">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-nova-blue" />
                    Running...
                  </div>
                ) : error ? (
                  <pre className="whitespace-pre-wrap font-mono text-sm leading-7 text-nova-red">
                    {error.message}
                  </pre>
                ) : output ? (
                  <pre className="whitespace-pre-wrap font-mono text-sm leading-7 text-nova-green">
                    {output}
                  </pre>
                ) : (
                  <span className="font-mono text-sm text-nova-muted-dark">
                    Press Run to execute the program.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
