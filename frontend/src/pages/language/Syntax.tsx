import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

import NovaCode from "@components/NovaCode";
import CopyButton from "@components/CopyButton";

import { SYNTAX_SECTIONS, SYNTAX_TYPES } from "@data/language";
import { METADATA } from "@data/metadata";

export default function Syntax() {
  const [activeSection, setActiveSection] = useState("types");

  const sectionRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const current =
    SYNTAX_SECTIONS.find((section) => section.id === activeSection) ??
    SYNTAX_SECTIONS[0];

  useEffect(() => {
    sectionRefs.current[activeSection]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeSection]);

  return (
    <>
      <title>Syntax • NOVA</title>
      <div className="min-h-screen bg-nova-bg pt-14">
        <div className="mx-auto max-w-275 px-4 py-10 sm:px-6 sm:py-16">
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-nova-blue">
            Language
          </div>

          <h1 className="mb-4 text-4xl font-bold text-nova-text">
            Syntax Reference
          </h1>

          <p className="mb-10 max-w-3xl text-lg text-nova-muted">
            Complete syntax reference for the {METADATA.name} programming
            language.
          </p>

          {/* Section Tabs */}

          <div className="-mx-4 mb-8 overflow-x-auto px-4 sm:mx-0 sm:px-0 scrollbar-none">
            <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
              {SYNTAX_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  ref={(el) => {
                    sectionRefs.current[section.id] = el;
                  }}
                  onClick={() => setActiveSection(section.id)}
                  className={`shrink-0 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? "bg-nova-blue text-white"
                      : "border border-nova-border bg-nova-surface text-nova-muted hover:border-nova-blue/40 hover:text-nova-text"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left */}

            <div>
              <h2 className="mb-3 text-2xl font-bold text-nova-text">
                {current.title}
              </h2>

              <p className="mb-6 leading-relaxed text-nova-muted">
                {current.description}
              </p>

              {current.id === "types" && (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {SYNTAX_TYPES.map((type) => (
                    <div key={type.t} className="nova-surface p-3 text-center">
                      <span
                        className={`font-mono text-2xl font-black ${type.color}`}
                      >
                        {type.t}
                      </span>

                      <div className="mt-1 text-xs text-nova-muted">
                        {type.name}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right */}

            <div className="nova-surface overflow-hidden">
              <div className="flex items-center justify-between border-b border-nova-border bg-nova-bg px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-nova-red opacity-60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-nova-yellow opacity-60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-nova-green opacity-60" />

                  <span className="ml-1 font-mono text-xs text-nova-muted-dark">
                    {current.id}.nova
                  </span>
                </div>

                <CopyButton text={current.code} size="sm" />
              </div>

              <div className="overflow-x-auto p-4">
                <NovaCode code={current.code} />
              </div>

              <div className="border-t border-nova-border px-4 pb-3 pt-2">
                <Link
                  to={`/playground?code=${encodeURIComponent(current.code)}`}
                  className="text-xs text-nova-blue transition-colors hover:text-nova-blue-light"
                >
                  → Run in Playground
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
