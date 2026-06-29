import { Link } from "react-router";
import { Play, BookOpen, Terminal, Check, Copy } from "lucide-react";
import HeroEditor from "@/components/HeroEditor";
import { METADATA } from "@data/metadata";
import { useState } from "react";

export default function HeroSection() {
  const [installCopied, setInstallCopied] = useState(false);

  const handleInstallCopy = async () => {
    await navigator.clipboard.writeText(`pip install ${METADATA.pypi.package}`);
    setInstallCopied(true);
    setTimeout(() => setInstallCopied(false), 2000);
  };
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-nova-bg via-nova-bg to-[#0f1923]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nova-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#818CF8]/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #3B82F6 40px, #3B82F6 41px),
                repeating-linear-gradient(90deg, transparent, transparent 40px, #3B82F6 40px, #3B82F6 41px)`,
          }}
        />
      </div>
      <div className="relative max-w-300 mx-auto px-6 py-18 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nova-blue/10 border border-nova-blue/20 text-xs sm:text-sm text-nova-blue-light font-mono mb-6 cursor-pointer">
              <span className="w-1.5 h-1.5 rounded-full bg-nova-green animate-pulse" />
              {METADATA.version} — Stable Release
            </div>

            <h1 className="font-mono font-black text-[clamp(3.5rem,8vw,4.5rem)] leading-[1.05] tracking-tight mb-6">
              <span className="nova-gradient-text">{METADATA.name}</span>
            </h1>

            <p className="text-lg md:text-xl text-nova-muted leading-relaxed mb-8 max-w-md font-light">
              A modern statically typed programming language designed for{" "}
              <span className="text-nova-text font-medium">simplicity</span>,{" "}
              <span className="text-nova-text font-medium">readability</span>,
              and <span className="text-nova-text font-medium">learning</span>.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/playground" className="nova-btn-primary">
                <Play size={15} />
                Try {METADATA.name}
              </Link>
              <Link to="/docs" className="nova-btn-secondary">
                <BookOpen size={15} />
                Documentation
              </Link>
            </div>

            <div className="flex items-center gap-2 p-3 bg-nova-surface border border-nova-border rounded-lg w-fit">
              <Terminal size={14} className="text-nova-blue shrink-0" />
              <code className="text-sm font-mono text-nova-muted">
                <span className="text-nova-muted-dark">$</span>{" "}
                <span className="text-nova-text">pip install </span>
                <span className="text-nova-blue">{METADATA.pypi.package}</span>
              </code>
              <button
                onClick={handleInstallCopy}
                className="ml-2 p-1 text-nova-muted-dark hover:text-nova-muted transition-colors"
                title="Copy"
              >
                {installCopied ? (
                  <Check size={13} className="text-nova-green" />
                ) : (
                  <Copy size={13} />
                )}
              </button>
            </div>
          </div>

          <div
            className="hidden lg:block animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="animate-glow rounded-lg h-100">
              <HeroEditor />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-nova-border flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 bg-nova-blue rounded-full" />
        </div>
      </div>
    </section>
  );
}
