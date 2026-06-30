import { ChevronRight } from "lucide-react";
import { examples } from "@data/examples";

interface ExampleSidebarProps {
  selectedExample: string | null;
  onSelectExample: (id: string) => void;
}

export default function ExampleSidebar({
  selectedExample,
  onSelectExample,
}: ExampleSidebarProps) {
  const categories = [...new Set(examples.map((example) => example.category))];

  return (
    <aside className="w-60 shrink-0 overflow-y-auto border-r border-nova-border bg-nova-surface">
      <div className="border-b border-nova-border px-4 py-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-nova-muted">
          Examples
        </h2>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-nova-muted-dark">
            {category}
          </div>

          {examples
            .filter((example) => example.category === category)
            .map((example) => (
              <button
                key={example.id}
                onClick={() => onSelectExample(example.id)}
                className={`flex w-full items-center gap-2 px-4 py-2 text-left text-xs font-mono transition-colors ${
                  selectedExample === example.id
                    ? "bg-nova-blue/10 text-nova-blue"
                    : "text-nova-muted hover:bg-nova-border hover:text-nova-text"
                }`}
              >
                <ChevronRight size={12} className="opacity-60" />

                <span>{example.title}</span>
              </button>
            ))}
        </div>
      ))}
    </aside>
  );
}
