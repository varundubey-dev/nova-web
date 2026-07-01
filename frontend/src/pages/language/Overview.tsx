import { Link } from "react-router";
import { ArrowRight, Play } from "lucide-react";

import NovaCode from "@components/NovaCode";
import CopyButton from "@components/CopyButton";

import { OVERVIEW_CODE, OVERVIEW_DATA, OVERVIEW_STATS } from "@data/language";
import { METADATA } from "@data/metadata";

export default function Overview() {
  return (
    <>
      <title>Overview • NOVA</title>
      <div className="min-h-screen bg-nova-bg pt-14">
        <div className="max-w-275 mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-3 font-mono text-xs uppercase tracking-widest text-nova-blue">
                Language
              </div>

              <h1 className="mb-6 text-4xl font-bold text-nova-text">
                Overview
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-nova-muted">
                {METADATA.name} is a statically typed programming language that
                prioritizes readability and simplicity. It is designed as a
                complete language ecosystem not just a scripting tool.
              </p>

              <div className="mb-10 space-y-6">
                {OVERVIEW_DATA.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${item.color}`}
                    />

                    <div>
                      <h3 className="mb-1 font-semibold text-nova-text">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-nova-muted">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Link
                  to="/language/syntax"
                  className="nova-btn-primary text-sm"
                >
                  Explore Syntax
                  <ArrowRight size={14} />
                </Link>

                <Link to="/playground" className="nova-btn-secondary text-sm">
                  <Play size={14} />
                  Try it Live
                </Link>
              </div>
            </div>

            <div>
              <div className="nova-surface overflow-hidden">
                <div className="flex items-center justify-between border-b border-nova-border bg-nova-bg px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-nova-red opacity-60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-nova-yellow opacity-60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-nova-green opacity-60" />

                    <span className="ml-1 font-mono text-xs text-nova-muted-dark">
                      overview.nova
                    </span>
                  </div>

                  <CopyButton text={OVERVIEW_CODE} size="sm" />
                </div>

                <div className="overflow-x-auto p-5">
                  <NovaCode code={OVERVIEW_CODE} />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {OVERVIEW_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="nova-surface p-4 text-center"
                  >
                    <div className="font-mono text-2xl font-black text-nova-blue">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-xs text-nova-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
