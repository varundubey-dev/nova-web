import { METADATA } from "@data/metadata";
import NovaCode from "@components/NovaCode";
import { BUILTIN_CATEGORIES } from "@data/language";

export default function BuiltIns() {
  return (
    <>
      <title>Built-ins • NOVA</title>
      <div className="min-h-screen bg-nova-bg pt-14">
        <div className="mx-auto max-w-225 px-6 py-16">
          <div className="mb-12">
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-nova-blue">
              Language
            </div>

            <h1 className="mb-4 text-4xl font-bold text-nova-text">
              Built-in Functions
            </h1>

            <p className="text-lg text-nova-muted">
              Core functions available in every {METADATA.name} program without
              any imports.
            </p>
          </div>

          <div className="space-y-14">
            {BUILTIN_CATEGORIES.map((category) => (
              <section key={category.id}>
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-bold text-nova-text">
                    {category.title}
                  </h2>

                  <p className="text-nova-muted">{category.description}</p>
                </div>

                <div className="space-y-6">
                  {category.functions.map((fn) => (
                    <div
                      key={`${category.id}-${fn.name}`}
                      className="nova-surface overflow-hidden"
                    >
                      <div className="border-b border-nova-border p-5">
                        <h3 className="mb-1 font-mono text-xl font-bold text-nova-blue-light">
                          {fn.name}()
                        </h3>

                        <code className="font-mono text-sm text-nova-muted-dark">
                          {fn.signature}
                        </code>
                      </div>

                      <div className="grid grid-cols-1 gap-5 p-5 lg:grid-cols-2">
                        <div>
                          <p className="text-sm leading-relaxed text-nova-muted">
                            {fn.description}
                          </p>
                        </div>

                        <div>
                          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-nova-muted-dark">
                            Example
                          </p>

                          <div className="nova-code-block p-3">
                            <NovaCode code={fn.code} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
