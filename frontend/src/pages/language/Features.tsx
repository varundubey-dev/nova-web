import { featureCards } from "@data/featureCard";
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
import { Link } from "react-router";

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

export default function Features() {
  return (
    <>
      <title>Features • NOVA</title>
      <div className="min-h-screen bg-nova-bg pt-14">
        <div className="max-w-275 mx-auto px-6 py-16 flex justify-center flex-col items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="text-xs font-mono text-nova-blue uppercase tracking-widest mb-3">
              Language
            </div>
            <h1 className="text-4xl font-bold text-nova-text mb-4">Features</h1>
            <p className="text-nova-muted text-lg max-w-xl mb-12 text-center">
              A complete set of language features designed for modern
              programming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureCards.map((card) => {
              const Icon = ICON_MAP[card.icon] || Code2;
              return (
                <div key={card.title} className="nova-surface p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-nova-blue/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-nova-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-nova-text mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-nova-muted mb-3 leading-relaxed">
                      {card.description}
                    </p>
                    <div className="bg-nova-bg border border-nova-border rounded p-3 overflow-x-auto">
                      <pre className="text-xs font-mono text-nova-muted leading-relaxed whitespace-pre">
                        {card.code}
                      </pre>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 nova-surface p-6 text-center max-w-96">
            <h3 className="text-lg font-semibold text-nova-text mb-2">
              See all features in action
            </h3>
            <p className="text-sm text-nova-muted mb-4">
              Try every feature directly in the browser playground.
            </p>
            <Link to="/playground" className="nova-btn-primary">
              Open Playground
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
