import { Code2, Lightbulb, Target, BookOpen, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { METADATA } from "@data/metadata";
import {
  ABOUT_INTRO,
  WHY_NOVA,
  DESIGN_PRINCIPLES,
  PROJECT_STATS,
  CAPABILITIES,
  ROADMAP,
  ARCHITECTURE,
} from "@data/about";

export default function About() {
  return (
    <>
      <title>About • NOVA</title>

      <div className="min-h-screen bg-nova-bg pt-14">
        <div className="mx-auto max-w-225 px-6 py-16">
          {/* Header */}
          <section className="mb-18">
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-nova-blue">
              Project
            </div>

            <h1 className="mb-4 text-4xl font-bold text-nova-text">
              {ABOUT_INTRO.title}
            </h1>

            <p className="max-w-4xl text-lg leading-relaxed text-nova-muted">
              {ABOUT_INTRO.description}
            </p>
          </section>

          {/* Why NOVA */}
          <section className="mb-18">
            <div className="mb-6 flex items-center gap-3">
              <Lightbulb size={22} className="text-nova-yellow" />
              <h2 className="text-2xl font-bold text-nova-text">
                {WHY_NOVA.title}
              </h2>
            </div>

            <div className="space-y-5 text-nova-muted leading-relaxed">
              {WHY_NOVA.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Design Principles */}
          <section className="mb-18">
            <div className="mb-6 flex items-center gap-3">
              <Target size={22} className="text-nova-blue" />

              <h2 className="text-2xl font-bold text-nova-text">
                Design Principles
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {DESIGN_PRINCIPLES.map((principle) => (
                <div key={principle.title} className="nova-surface p-5">
                  <h3 className="mb-2 text-lg font-semibold text-nova-text">
                    {principle.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-nova-muted">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section className="mb-18">
            <div className="mb-6 flex items-center gap-3">
              <Code2 size={22} className="text-nova-green" />

              <h2 className="text-2xl font-bold text-nova-text">
                Architecture
              </h2>
            </div>

            <p className="mb-8 max-w-3xl text-nova-muted">
              Every NOVA program passes through lexical analysis, parsing,
              abstract syntax tree generation, and interpretation before
              execution. Each stage is implemented independently to keep the
              language architecture modular and easy to understand.
            </p>

            <div className="flex flex-col items-center">
              {ARCHITECTURE.map((stage, index) => (
                <div key={stage.label} className="flex flex-col items-center">
                  <div className="nova-surface w-68 px-8 py-4 text-center">
                    <div
                      className={`font-mono text-lg font-bold ${stage.color}`}
                    >
                      {stage.label}
                    </div>

                    <div className="mt-1 text-xs text-nova-muted-dark">
                      {stage.desc}
                    </div>
                  </div>

                  {index !== ARCHITECTURE.length - 1 && (
                    <div className="my-1 flex flex-col items-center">
                      <div className="h-4 w-px bg-nova-border" />
                      <div className="text-nova-muted-dark">↓</div>
                      <div className="h-4 w-px bg-nova-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities */}
          <section className="mb-18">
            <div className="mb-6 flex items-center gap-3">
              <BookOpen size={22} className="text-nova-blue-light" />

              <h2 className="text-2xl font-bold text-nova-text">
                Current Capabilities
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map((item) => (
                <div key={item.title} className="nova-surface p-5">
                  <h3 className="mb-2 font-semibold text-nova-text">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-nova-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Project Stats */}
          <section className="mb-18">
            <h2 className="mb-6 text-2xl font-bold text-nova-text">
              Project Statistics
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PROJECT_STATS.map((stat) => (
                <div key={stat.label} className="nova-surface p-5 text-center">
                  <div className="mb-2 text-2xl font-bold text-nova-blue-light">
                    {stat.value}
                  </div>

                  <div className="text-sm text-nova-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section className="mb-18">
            <h2 className="mb-6 text-2xl font-bold text-nova-text">Roadmap</h2>

            <div className="space-y-4">
              {ROADMAP.map((item) => (
                <div key={item.title} className="nova-surface flex gap-4 p-5">
                  <ArrowRight
                    size={16}
                    className="mt-1 shrink-0 text-nova-blue"
                  />

                  <div>
                    <h3 className="mb-1 font-semibold text-nova-text">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-nova-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="nova-surface p-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-nova-text">
              Open Source
            </h2>

            <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-nova-muted">
              NOVA is developed as an open-source project. The interpreter,
              standard library, documentation, website, and examples are
              publicly available on GitHub. Feedback, bug reports, and
              contributions are always welcome.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={METADATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nova-btn-primary"
              >
                <FaGithub size={15} />
                View on GitHub
              </a>

              <a
                href={`${METADATA.github}/issues`}
                target="_blank"
                rel="noopener noreferrer"
                className="nova-btn-secondary"
              >
                Open an Issue
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
