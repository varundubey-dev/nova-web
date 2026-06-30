import { useState } from "react";
import PlaygroundHeader from "@components/playground/PlaygroundHeader";
import ExampleSidebar from "@components/playground/ExampleSidebar";
import CodeEditor from "@components/playground/CodeEditor";
import OutputPanel from "@components/playground/OutputPanel";
import { examples } from "@data/examples";

const DEFAULT_CODE = `// Welcome to NOVA

print("Hello, World!")
`;

export default function Playground() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedExample, setSelectedExample] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const currentExample = examples.find(
    (example) => example.id === selectedExample,
  );

  const fileName = currentExample
    ? `${currentExample.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}.nova`
    : "main.nova";

  function handleRun() {
    setIsRunning(true);

    setTimeout(() => {
      setOutput("Hello, World!");
      setError(null);
      setIsRunning(false);
    }, 500);
  }

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

  return (
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
      <div className="flex flex-1 overflow-hidden">
        <div
          className={`overflow-hidden border-r border-nova-border transition-all duration-300 ease-in-out
            ${sidebarOpen ? "w-60 opacity-100" : "w-0 opacity-0 border-r-0"}`}
        >
          <ExampleSidebar
            selectedExample={selectedExample}
            onSelectExample={handleExampleSelect}
          />
        </div>

        <CodeEditor code={code} onCodeChange={setCode} fileName={fileName} />

        <OutputPanel output={output} error={error} onClear={handleClear} />
      </div>
    </main>
  );
}
