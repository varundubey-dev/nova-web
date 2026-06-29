import { useState } from "react";
import { Link } from "react-router";
import { METADATA } from "@data/metadata";
import { Play, BookOpen } from "lucide-react";
import { interactiveTabs } from "@data/interactiveTab";
import NovaCode from "@components/NovaCode";
import CopyButton from "@components/CopyButton";

export default function InteractiveSection() {
  const [activeTab, setActiveTab] = useState("variables");
  const currentTab =
    interactiveTabs.find((t) => t.id === activeTab) || interactiveTabs[0];

  return (
    <section className="py-24 bg-nova-surface/30 border-y border-nova-border">
      <div className="max-w-300 mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="nova-section-title mb-4">Explore the language</h2>
          <p className="nova-section-subtitle mx-auto text-center">
            See how {METADATA.name} handles different programming concepts with
            clean, readable syntax.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {interactiveTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 text-sm rounded font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-nova-blue text-white"
                      : "bg-nova-surface text-nova-muted border border-nova-border hover:text-nova-text hover:border-nova-blue/40"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="nova-surface p-4">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-nova-border">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-nova-red opacity-60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-nova-yellow opacity-60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-nova-green opacity-60" />
                  <span className="ml-1 text-xs text-nova-muted-dark font-mono">
                    example.nova
                  </span>
                </div>
                <CopyButton text={currentTab.code} size="sm" />
              </div>
              <NovaCode code={currentTab.code} />
            </div>
          </div>

          {/* Description */}
          <div className="lg:sticky lg:top-24">
            <div className="nova-surface p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-nova-blue rounded-full" />
                <h3 className="font-semibold text-nova-text">
                  {currentTab.label}
                </h3>
              </div>
              <p className="text-nova-muted text-sm leading-relaxed mb-6">
                {currentTab.description}
              </p>

              <div className="space-y-3">
                <Link
                  to={`/playground?code=${encodeURIComponent(currentTab.code)}`}
                  className="nova-btn-primary w-full justify-center text-sm py-2.5"
                >
                  <Play size={14} />
                  Run in Playground
                </Link>
                <Link
                  to="/docs"
                  className="nova-btn-secondary w-full justify-center text-sm py-2.5"
                >
                  <BookOpen size={14} />
                  Read Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
