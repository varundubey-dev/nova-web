import { stdlibModules } from "@data/stdLibModules";
import { Link } from "react-router";
import { BookOpen } from "lucide-react";
import { METADATA } from "@data/metadata";

export default function StdLibPreviewSection() {
  return (
    <section className="py-24">
      <div className="max-w-300 mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="nova-section-title mb-4">Standard Library</h2>
          <p className="nova-section-subtitle mx-auto text-center">
            {METADATA.name} ships with a curated set of modules for common
            programming tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stdlibModules.map((mod) => (
            <Link
              key={mod.name}
              to={`/language/stdlib#${mod.name.toLowerCase()}`}
              className="nova-surface-hover p-6 group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-mono font-bold text-lg text-nova-blue">
                  {mod.name}
                </h3>

                <span className="text-xs text-nova-muted-dark font-mono">
                  {mod.functions.length} functions
                </span>
              </div>

              <p className="text-sm text-nova-muted leading-relaxed mb-4">
                {mod.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {mod.functions.slice(0, 4).map((fn) => (
                  <span
                    key={fn.name}
                    className="px-2 py-0.5 bg-nova-bg border border-nova-border rounded text-xs font-mono text-nova-blue-light"
                  >
                    {fn.name}()
                  </span>
                ))}

                {mod.functions.length > 4 && (
                  <span className="px-2 py-0.5 text-xs text-nova-muted-dark font-mono">
                    +{mod.functions.length - 4} more
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/language/stdlib" className="nova-btn-secondary">
            <BookOpen size={15} />
            View Full Standard Library
          </Link>
        </div>
      </div>
    </section>
  );
}
