import { examples } from "@data/examples";

export default function ExampleCard({
  example,
  isSelected,
  onSelect,
}: {
  example: (typeof examples)[number];
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      className={`nova-surface cursor-pointer transition-all
        ${
          isSelected
            ? "border-nova-blue/50 bg-nova-blue/5"
            : "hover:border-nova-blue/30"
        }`}
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="mb-1 text-sm font-semibold text-nova-text">
              {example.title}
            </h3>

            <p className="text-xs text-nova-muted">{example.description}</p>
          </div>

          <span className="shrink-0 rounded bg-nova-border px-2 py-0.5 font-mono text-xs text-nova-muted">
            {example.category}
          </span>
        </div>
      </div>
    </div>
  );
}
