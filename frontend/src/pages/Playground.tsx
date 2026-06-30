import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

import PlaygroundHeader from "@components/playground/PlaygroundHeader";
import ExampleSidebar from "@components/playground/ExampleSidebar";
import OutputPanel from "@components/playground/OutputPanel";
import NovaEditor from "@/editor/NovaEditor";

import { run, type RunError } from "@api/run";
import { examples, DEFAULT_CODE } from "@data/examples";

export default function Playground() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [code, setCode] = useState(DEFAULT_CODE);

  const [output, setOutput] = useState("");
  const [error, setError] = useState<RunError | null>(null);

  const [isRunning, setIsRunning] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedExample, setSelectedExample] = useState<string | null>(null);

  const [copied, setCopied] = useState(false);

  const hasLoadedFromUrl = useRef(false);

  const currentExample = examples.find(
    (example) => example.id === selectedExample,
  );

  const fileName = currentExample
    ? `${currentExample.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}.nova`
    : "main.nova";

  const execute = useCallback(
    async (source: string) => {
      if (isRunning) return;

      setIsRunning(true);

      try {
        const result = await run(source);

        setOutput(result.output.join("\n"));
        setError(result.error);
      } catch (error) {
        console.error(error);

        setOutput("");

        setError({
          category: "Connection Error",
          message: "Failed to connect to the NOVA backend.",
          line: 0,
          column: 0,
          sourceLine: "",
        });
      } finally {
        setIsRunning(false);
      }
    },
    [isRunning],
  );

  const handleRun = useCallback(() => {
    execute(code);
  }, [code, execute]);

  function handleClear() {
    setOutput("");
    setError(null);
  }

  function handleExampleSelect(id: string) {
    const example = examples.find((example) => example.id === id);

    if (!example) return;

    setCode(example.code);
    setSelectedExample(id);

    setOutput("");
    setError(null);
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function handleDownload() {
    const blob = new Blob([code], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(url);
  }

  useEffect(() => {
    const urlCode = searchParams.get("code");

    if (!urlCode) return;
    if (hasLoadedFromUrl.current) return;

    hasLoadedFromUrl.current = true;

    setCode(urlCode);
    setSelectedExample(null);

    setOutput("");
    setError(null);

    execute(urlCode);

    navigate("/playground", {
      replace: true,
    });
  }, [searchParams, execute, navigate]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!(event.ctrlKey || event.metaKey)) return;
      if (event.key !== "Enter") return;

      event.preventDefault();
      handleRun();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleRun]);

  return (
    <>
      <title>Playground • NOVA</title>

      <main className="flex h-screen flex-col bg-nova-bg pt-16">
        <PlaygroundHeader
          isRunning={isRunning}
          sidebarOpen={sidebarOpen}
          copied={copied}
          onRun={handleRun}
          onToggleSidebar={() => setSidebarOpen((open) => !open)}
          onCopy={handleCopy}
          onDownload={handleDownload}
        />

        <div className="relative flex min-h-0 flex-1">
          {/* Desktop Sidebar */}

          <div
            className={` hidden lg:flex h-full overflow-hidden transition-[width] duration-300 ease-in-out
              ${
                sidebarOpen
                  ? "w-60 border-r border-nova-border"
                  : "w-0 border-r-0"
              }
            `}
          >
            <ExampleSidebar
              selectedExample={selectedExample}
              onSelectExample={handleExampleSelect}
            />
          </div>

          {/* Mobile / Tablet Backdrop */}

          <div
            onClick={() => setSidebarOpen(false)}
            className={` fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 lg:hidden
              ${
                sidebarOpen
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }
            `}
          />

          {/* Mobile / Tablet Sidebar */}

          <aside
            className={`fixed left-0 top-16 bottom-0 overflow-y-auto z-40 flex w-64 flex-col border-r border-nova-border bg-nova-surface shadow-2xl transition-transform duration-300 ease-in-out lg:hidden
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <ExampleSidebar
              selectedExample={selectedExample}
              onSelectExample={(id) => {
                handleExampleSelect(id);
                setSidebarOpen(false);
              }}
            />
          </aside>

          <div className="flex min-h-0 flex-1 flex-col md:flex-row overflow-hidden">
            <div className="min-h-0 min-w-0 flex-3 md:flex-1 overflow-hidden">
              <NovaEditor
                code={code}
                fileName={fileName}
                onCodeChange={setCode}
                onRun={handleRun}
              />
            </div>

            <div className="min-h-0 flex-1 border-t border-nova-border md:w-80 md:flex-none md:border-t-0 md:border-l xl:w-96 overflow-hidden">
              <OutputPanel
                output={output}
                error={error}
                onClear={handleClear}
                fileName={fileName}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
