import { useState } from "react";
import { Tag, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { METADATA } from "@data/metadata";
import { releases, TYPE_COLORS, TAG_COLORS } from "@data/releases";

export default function Releases() {
  const [expandedVersions, setExpandedVersions] = useState<string[]>(["1.0.0"]);

  const toggleVersion = (version: string) => {
    setExpandedVersions((prev) =>
      prev.includes(version)
        ? prev.filter((v) => v !== version)
        : [...prev, version],
    );
  };

  return (
    <>
      <title>Releases • NOVA</title>

      <div className="min-h-screen bg-nova-bg pt-14">
        <div className="mx-auto max-w-200 px-6 py-16">
          <div className="mb-12">
            <h1 className="mb-3 text-4xl font-bold text-nova-text">
              Release Notes
            </h1>

            <p className="text-lg text-nova-muted">
              Complete history of {METADATA.name} releases — from v0.1.0 to{" "}
              {METADATA.version} stable.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href={`${METADATA.github}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="nova-btn-secondary py-2 text-sm"
              >
                <FaGithub size={14} />
                View on GitHub
              </a>

              <span className="font-mono text-sm text-nova-muted-dark">
                {releases.length} releases
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-6 left-4 top-6 w-px bg-linear-to-b from-nova-blue via-nova-border to-nova-border" />

            <div className="space-y-6">
              {releases.map((release, index) => (
                <div key={release.version} className="relative pl-10">
                  <div
                    className={`absolute left-2.5 top-4 h-3 w-3 -translate-x-1/2 rounded-full ${
                      index === 0
                        ? "bg-nova-blue shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                        : "border border-nova-muted-dark bg-nova-border"
                    }`}
                  />

                  <div className="nova-surface overflow-hidden">
                    <button
                      onClick={() => toggleVersion(release.version)}
                      className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-nova-border/30"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-lg font-bold text-nova-text">
                          v{release.version}
                        </span>

                        <span
                          className={`rounded px-2 py-0.5 font-mono text-xs ${TAG_COLORS[release.tag]}`}
                        >
                          {release.tag}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs text-nova-muted">
                          <Calendar size={12} />

                          {new Date(release.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>

                      {expandedVersions.includes(release.version) ? (
                        <ChevronUp
                          size={16}
                          className="shrink-0 text-nova-muted-dark"
                        />
                      ) : (
                        <ChevronDown
                          size={16}
                          className="shrink-0 text-nova-muted-dark"
                        />
                      )}
                    </button>

                    <div className="px-5 pb-3">
                      <p className="text-sm text-nova-muted">
                        {release.summary}
                      </p>
                    </div>

                    {expandedVersions.includes(release.version) && (
                      <div className="space-y-4 border-t border-nova-border px-5 pt-2 pb-5">
                        {release.changes.map((change) => (
                          <div key={change.type}>
                            <div
                              className={`mb-3 inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-semibold uppercase tracking-wider ${TYPE_COLORS[change.type]}`}
                            >
                              <Tag size={10} />
                              {change.type}
                            </div>

                            <ul className="space-y-1.5">
                              {change.items.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-nova-muted"
                                >
                                  <span className="mt-1 shrink-0 text-xs text-nova-blue">
                                    •
                                  </span>

                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        <a
                          href={`${METADATA.github}/releases/tag/v${release.version}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1.5 text-sm text-nova-blue transition-colors hover:text-nova-blue-light"
                        >
                          <FaGithub size={13} />
                          View release on GitHub
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
