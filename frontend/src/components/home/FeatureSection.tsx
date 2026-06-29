import { featureCards } from "@data/featureCard";
import { METADATA } from "@data/metadata";
import {
  Shield,
  List,
  Layers,
  GitBranch,
  ArrowRightLeft,
  Zap,
  RefreshCw,
  Code2,
  Package,
  BookOpen,
  TriangleAlert,
  Terminal,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Shield,
  List,
  Layers,
  GitBranch,
  ArrowRightLeft,
  Zap,
  RefreshCw,
  Code2,
  Package,
  BookOpen,
  TriangleAlert,
  Terminal,
};

export default function FeatureSection() {
  return (
    <section className="py-24">
      <div className="max-w-300 mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="nova-section-title mb-4">Built for learning</h2>
          <p className="nova-section-subtitle mx-auto text-center">
            {METADATA.name} packs powerful language features into a clean,
            minimal syntax designed for learning and production.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {featureCards.map((card, i) => {
            const Icon = ICON_MAP[card.icon] || Code2;
            return (
              <div
                className="animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s` }}
                key={card.title}
              >
                <div className="nova-surface-hover p-5 flex flex-col gap-3 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-nova-blue/10 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-nova-blue" />
                    </div>
                    <h3 className="font-semibold text-nova-text text-sm ">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs text-nova-muted leading-relaxed">
                    {card.description}
                  </p>
                  <div className="mt-auto p-2.5 bg-nova-bg rounded border border-nova-border">
                    <pre className="text-[11px] font-mono text-nova-muted leading-relaxed whitespace-pre overflow-hidden">
                      {card.code}
                    </pre>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
