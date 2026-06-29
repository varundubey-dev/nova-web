import { STATS } from "@data/stats";

export default function StatsSection() {
  return (
    <section className="py-24 border-b border-nova-border bg-nova-surface/40">
      <div className="max-w-300 mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:grid md:grid-cols-5">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="nova-surface p-6 text-center w-[calc(50%-0.75rem)] md:w-auto"
            >
              <div className="font-mono font-black text-3xl text-nova-blue mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-nova-text text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-nova-muted-dark font-mono">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
