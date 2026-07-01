import { useState } from "react";
import {
  Download,
  Terminal,
  ExternalLink,
  Check,
  Copy,
  Package,
  ArrowRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { METADATA } from "@data/metadata";
import { Link } from "react-router";

export default function DownloadPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const installSteps = [
    {
      step: "1",
      cmd: `pip install ${METADATA.pypi.package}`,
      desc: `Install ${METADATA.name} via pip`,
    },
    { step: "2", cmd: "nova --version", desc: "Verify installation" },
    { step: "3", cmd: `nova hello.nova`, desc: "Run your first program" },
  ];

  return (
    <>
      <title>Download • NOVA</title>
      <div className="min-h-screen bg-nova-bg pt-14">
        <div className="max-w-225 mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nova-green/10 border border-nova-green/20 text-sm text-nova-green font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-nova-green" />
              Latest Release — {METADATA.version}
            </div>
            <h1 className="text-4xl font-bold text-nova-text mb-4">
              Install {METADATA.name}
            </h1>
            <p className="text-nova-muted text-lg max-w-xl mx-auto">
              {METADATA.name} is available via pip. It requires Python 3.8 or
              higher.
            </p>
          </div>

          {/* Primary install */}
          <div className="nova-surface p-6 mb-10">
            <h2 className="text-lg font-semibold text-nova-text mb-4">
              Quick Install
            </h2>
            <div className="space-y-3">
              {installSteps.map((step, i) => (
                <div
                  key={step.step}
                  className="flex items-center gap-4 p-4 bg-nova-bg border border-nova-border rounded-lg"
                >
                  <span className="w-6 h-6 rounded-full bg-nova-blue/20 text-nova-blue text-xs font-bold flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-nova-muted mb-1">{step.desc}</p>
                    <code className="text-sm font-mono text-nova-text block truncate">
                      <span className="text-nova-muted-dark">$ </span>
                      {step.cmd}
                    </code>
                  </div>
                  <button
                    onClick={() => handleCopy(step.cmd, i)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono transition-all shrink-0 ${
                      copiedIndex === i
                        ? "bg-nova-green/20 text-nova-green"
                        : "bg-nova-border text-nova-muted hover:text-nova-text"
                    }`}
                  >
                    {copiedIndex === i ? (
                      <Check size={11} />
                    ) : (
                      <Copy size={11} />
                    )}
                    {copiedIndex === i ? "✓" : "Copy"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Install options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <a
              href={METADATA.pypi.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nova-surface-hover p-5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <Package size={18} className="text-nova-yellow" />
                <span className="font-semibold text-nova-text">PyPI</span>
                <ExternalLink
                  size={12}
                  className="text-nova-muted-dark ml-auto"
                />
              </div>
              <p className="text-sm text-nova-muted">
                View on the Python Package Index. pip install nova-pl
              </p>
              <code className="text-xs font-mono text-nova-muted-dark">
                pypi.org/project/nova-pl
              </code>
            </a>

            <a
              href={METADATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nova-surface-hover p-5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <FaGithub size={18} className="text-nova-muted" />
                <span className="font-semibold text-nova-text">
                  Source Code
                </span>
                <ExternalLink
                  size={12}
                  className="text-nova-muted-dark ml-auto"
                />
              </div>
              <p className="text-sm text-nova-muted">
                Clone the repository and build from source.
              </p>
              <code className="text-xs font-mono text-nova-muted-dark">
                github.com/varundubey-dev/nova
              </code>
            </a>

            <a
              href={`${METADATA.github}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              className="nova-surface-hover p-5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <Download size={18} className="text-nova-blue" />
                <span className="font-semibold text-nova-text">Releases</span>
                <ExternalLink
                  size={12}
                  className="text-nova-muted-dark ml-auto"
                />
              </div>
              <p className="text-sm text-nova-muted">
                Download specific versions and release archives.
              </p>
              <code className="text-xs font-mono text-nova-muted-dark">
                Latest: {METADATA.version}
              </code>
            </a>
          </div>

          {/* Build from source */}
          <div className="nova-surface p-6 mb-8">
            <h2 className="text-lg font-semibold text-nova-text mb-4">
              Build from Source
            </h2>
            <div className="space-y-2">
              {[
                `git clone ${METADATA.github}`,
                "cd nova",
                "pip install -e .",
                "nova --version",
              ].map((cmd, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded border border-nova-border bg-nova-bg p-3"
                >
                  <span className="select-none font-mono text-sm text-nova-muted-dark">
                    $
                  </span>

                  <code className="min-w-0 flex-1 break-all font-mono text-sm text-nova-text">
                    {cmd}
                  </code>

                  <button
                    onClick={() => handleCopy(cmd, i + 10)}
                    className={`shrink-0 flex items-center gap-1 rounded px-2 py-1 text-xs font-mono transition-all ${
                      copiedIndex === i + 10
                        ? "text-nova-green"
                        : "text-nova-muted-dark hover:text-nova-muted"
                    }`}
                  >
                    {copiedIndex === i + 10 ? (
                      <Check size={10} />
                    ) : (
                      <Copy size={10} />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* System requirements */}
          <div className="nova-surface p-6 mb-8">
            <h2 className="text-lg font-semibold text-nova-text mb-4">
              System Requirements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Python", value: "3.8 or higher" },
                { label: "pip", value: "Latest recommended" },
                { label: "OS", value: "Windows, macOS, Linux" },
                {
                  label: "NOVA version",
                  value: `${METADATA.version} (stable)`,
                },
              ].map((req) => (
                <div
                  key={req.label}
                  className="flex items-center justify-between p-3 bg-nova-bg rounded border border-nova-border"
                >
                  <span className="text-sm text-nova-muted">{req.label}</span>
                  <span className="text-sm font-mono text-nova-text">
                    {req.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Next steps */}
          <div className="text-center">
            <p className="text-nova-muted mb-4">After installing NOVA:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/docs" className="nova-btn-primary">
                <ArrowRight size={14} />
                Read Documentation
              </Link>
              <Link to="/playground" className="nova-btn-secondary">
                <Terminal size={14} />
                Try Playground
              </Link>
              <Link to="/examples" className="nova-btn-secondary">
                Browse Examples
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
