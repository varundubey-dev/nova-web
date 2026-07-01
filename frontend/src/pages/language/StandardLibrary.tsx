import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Play } from "lucide-react";

import { stdlibModules } from "@data/stdLibModules";

import NovaCode from "@components/NovaCode";
import CopyButton from "@components/CopyButton";

export default function StandardLibrary() {
  const [activeModule, setActiveModule] = useState(stdlibModules[0].name);

  const moduleRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const mod =
    stdlibModules.find((m) => m.name === activeModule) || stdlibModules[0];

  useEffect(() => {
    moduleRefs.current[activeModule]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeModule]);

  const exampleCode = `import ${mod.name}

${mod.functions
  .slice(0, 3)
  .map((f) => `// ${f.name}\n${f.example}`)
  .join("\n\n")}`;

  return (
    <>
      <title>Standard Library • NOVA</title>

      <div className="min-h-screen bg-nova-bg pt-14">
        <div className="mx-auto max-w-275 px-4 py-10 sm:px-6 sm:py-16">
          <div className="mb-10">
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-nova-blue">
              Language
            </div>

            <h1 className="mb-4 text-4xl font-bold text-nova-text">
              Standard Library
            </h1>

            <p className="max-w-3xl text-lg text-nova-muted">
              NOVA ships with {stdlibModules.length} standard library modules.
              Import them using the{" "}
              <code className="font-mono text-nova-blue-light">import</code>{" "}
              keyword.
            </p>
          </div>

          {/* Module Tabs */}

          <div className="-mx-4 mb-8 overflow-x-auto px-4 scrollbar-none sm:mx-0 sm:px-0">
            <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
              {stdlibModules.map((m) => (
                <button
                  key={m.name}
                  ref={(el) => {
                    moduleRefs.current[m.name] = el;
                  }}
                  onClick={() => setActiveModule(m.name)}
                  className={`shrink-0 whitespace-nowrap rounded-md px-4 py-2 font-mono text-sm font-medium transition-all ${
                    activeModule === m.name
                      ? "bg-nova-blue text-white"
                      : "border border-nova-border bg-nova-surface text-nova-muted hover:border-nova-blue/40 hover:text-nova-text"
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            {/* Functions */}

            <div>
              <div className="mb-6">
                <code className="font-mono text-2xl font-black text-nova-blue">
                  import {mod.name}
                </code>

                <p className="mt-3 text-nova-muted">{mod.description}</p>
              </div>

              <div className="space-y-4">
                {mod.functions.map((fn) => (
                  <div key={fn.name} className="nova-surface overflow-hidden">
                    <div className="border-b border-nova-border p-4">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <code className="font-mono text-sm font-semibold break-all text-nova-blue-light">
                          {fn.signature}
                        </code>

                        <span className="shrink-0 font-mono text-xs text-nova-muted-dark">
                          → {fn.returns}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 p-4">
                      <p className="text-sm leading-relaxed text-nova-muted">
                        {fn.description}
                      </p>

                      <div className="rounded border border-nova-border bg-nova-bg p-3">
                        <code className="font-mono text-xs text-nova-muted">
                          {fn.example}
                        </code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview */}

            <div className="min-w-0 xl:sticky xl:top-20">
              <div className="nova-surface overflow-hidden">
                <div className="flex items-center justify-between border-b border-nova-border bg-nova-bg px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-nova-red opacity-60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-nova-yellow opacity-60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-nova-green opacity-60" />

                    <span className="ml-1 font-mono text-xs text-nova-muted-dark">
                      {mod.name}_example.nova
                    </span>
                  </div>

                  <CopyButton text={exampleCode} size="sm" />
                </div>

                <div className="p-4">
                  <div className="nova-code-block max-h-96 overflow-auto p-4">
                    <NovaCode code={exampleCode} />
                  </div>
                </div>

                <div className="border-t border-nova-border p-4">
                  <Link
                    to={`/playground?code=${encodeURIComponent(exampleCode)}`}
                    className="nova-btn-primary w-full justify-center py-2.5 text-sm"
                  >
                    <Play size={14} />
                    Try in Playground
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
