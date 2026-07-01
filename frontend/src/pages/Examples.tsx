import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Play, Download, Copy, Check, Terminal } from "lucide-react";

import { examples } from "@data/examples";
import { METADATA } from "@data/metadata";

import ExampleCard from "@components/examples/ExampleCard";
import NovaCode from "@components/NovaCode";

const CATEGORIES = Array.from(
  new Set(examples.map((example) => example.category)),
);

export default function Examples() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [selectedId, setSelectedId] = useState(examples[0].id);
  const [copied, setCopied] = useState(false);
  const categoryRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const filtered = examples.filter(
    (example) => example.category === selectedCategory,
  );

  const selected =
    filtered.find((example) => example.id === selectedId) ??
    filtered[0] ??
    examples[0];

  async function handleCopyCode() {
    await navigator.clipboard.writeText(selected.code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function handleDownload() {
    const blob = new Blob([selected.code], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `${selected.id}.nova`;
    link.click();

    URL.revokeObjectURL(url);
  }

  useEffect(() => {
    categoryRefs.current[selectedCategory]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [selectedCategory]);

  return (
    <>
      <title>Examples • NOVA</title>
      <div className="min-h-screen bg-nova-bg pt-14">
        <div className="mx-auto max-w-300 px-4 py-10 sm:px-6 sm:py-12">
          <div className="mb-10">
            <h1 className="mb-3 text-4xl font-bold text-nova-text">Examples</h1>

            <p className="max-w-3xl text-lg text-nova-muted">
              Browse real {METADATA.name} programs organized by category. Open
              any example directly in the playground.
            </p>
          </div>

          <div className="-mx-4 mb-8 overflow-x-auto px-4 sm:mx-0 sm:px-0 scrollbar-none">
            <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
              {CATEGORIES.map((category) => (
                <button
                  ref={(el) => {
                    categoryRefs.current[category] = el;
                  }}
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);

                    const first = examples.find(
                      (example) => example.category === category,
                    );

                    if (first) {
                      setSelectedId(first.id);
                    }
                  }}
                  className={`shrink-0 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-nova-blue text-white"
                      : "border border-nova-border bg-nova-surface text-nova-muted hover:border-nova-blue/40 hover:text-nova-text"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
            <div className="space-y-2 xl:col-span-1">
              {filtered.map((example) => (
                <ExampleCard
                  key={example.id}
                  example={example}
                  isSelected={selected.id === example.id}
                  onSelect={() => setSelectedId(example.id)}
                />
              ))}
            </div>

            <div className="min-w-0 xl:col-span-2">
              <div className="nova-surface xl:sticky xl:top-20">
                <div className="flex flex-col gap-4 border-b border-nova-border p-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="mb-2">
                      <span className="rounded bg-nova-blue/10 px-2 py-0.5 font-mono text-xs text-nova-blue-light">
                        {selected.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-nova-text">
                      {selected.title}
                    </h2>

                    <p className="mt-2 text-sm text-nova-muted">
                      {selected.description}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-2">
                    <button
                      onClick={handleCopyCode}
                      className={`flex items-center gap-1.5 rounded px-3 py-1.5 text-xs transition-all ${
                        copied
                          ? "bg-nova-green/20 text-nova-green"
                          : "bg-nova-border text-nova-muted hover:text-nova-text"
                      }`}
                    >
                      {copied ? <Check size={11} /> : <Copy size={11} />}
                      {copied ? "Copied" : "Copy"}
                    </button>

                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-1.5 rounded bg-nova-border px-3 py-1.5 text-xs text-nova-muted transition-colors hover:text-nova-text"
                    >
                      <Download size={11} />
                      .nova
                    </button>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-nova-red opacity-60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-nova-yellow opacity-60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-nova-green opacity-60" />

                    <span className="ml-1 font-mono text-xs text-nova-muted-dark">
                      {selected.id}.nova
                    </span>
                  </div>

                  <div className="nova-code-block mb-5 max-h-64 overflow-y-auto p-4 sm:max-h-80">
                    <NovaCode code={selected.code} />
                  </div>

                  <div className="overflow-hidden rounded-lg border border-nova-border bg-nova-bg">
                    <div className="flex items-center gap-2 border-b border-nova-border bg-nova-surface px-4 py-2">
                      <Terminal size={12} className="text-nova-muted-dark" />

                      <span className="font-mono text-xs uppercase tracking-wider text-nova-muted-dark">
                        Output
                      </span>
                    </div>

                    <pre className="overflow-x-auto whitespace-pre-wrap p-4 font-mono text-sm leading-relaxed text-nova-green">
                      {selected.output}
                    </pre>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to={`/playground?code=${encodeURIComponent(selected.code)}`}
                      className="nova-btn-primary w-full justify-center py-2.5 text-sm sm:flex-1"
                    >
                      <Play size={14} />
                      Open in Playground
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
