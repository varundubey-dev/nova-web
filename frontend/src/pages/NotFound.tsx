import { Link } from "react-router";
import { Home, BookOpen, Play, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-nova-bg via-nova-bg to-[#0f1923]" />

        <div className="absolute top-20 left-20 w-64 h-64 bg-nova-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-8 right-16 w-56 h-56 bg-[#818CF8]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nova-blue/10 border border-nova-blue/20 text-sm text-nova-blue-light font-mono mb-4">
            <Terminal size={14} />
            NOVA Runtime
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-nova-text mb-3">
            Route not found
          </h1>

          <p className="text-nova-muted max-w-lg mx-auto">
            Looks like you asked NOVA to execute a route that doesn't exist.
          </p>
        </div>

        {/* Terminal */}
        <div className="nova-surface overflow-hidden max-w-2xl mx-auto">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-nova-border">
            <div className="w-2.5 h-2.5 rounded-full bg-nova-red opacity-60" />
            <div className="w-2.5 h-2.5 rounded-full bg-nova-yellow opacity-60" />
            <div className="w-2.5 h-2.5 rounded-full bg-nova-green opacity-60" />
            <span className="ml-2 text-xs text-nova-muted-dark font-mono">
              terminal
            </span>
          </div>

          <pre className="p-4 text-sm leading-6 font-mono overflow-x-auto whitespace-pre-wrap">
            <span className="text-nova-blue">$</span>{" "}
            <span className="text-nova-text">nova visit /unknown-route</span>
            {"\n\n"}
            <span className="text-nova-muted">Resolving route...</span>
            {"\n"}
            <span className="text-nova-muted">Loading module...</span>
            {"\n\n"}
            <span className="text-nova-red font-semibold">
              RouteNotFoundError
            </span>
            {"\n"}
            <span className="text-nova-string">'/unknown-route'</span>
            {"\n\n"}
            <span className="text-nova-green">Hint:</span>
            {"\n"}• Try <span className="text-nova-blue">/</span>
            {"\n"}• Try <span className="text-nova-blue">/docs</span>
            {"\n"}• Try <span className="text-nova-blue">/playground</span>
            {"\n\n"}
            <span className="text-nova-muted-dark">
              Process exited with code 404.
            </span>
          </pre>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Link to="/" className="nova-btn-primary">
            <Home size={15} />
            Go Home
          </Link>

          <Link to="/docs" className="nova-btn-secondary">
            <BookOpen size={15} />
            Documentation
          </Link>

          <Link to="/playground" className="nova-btn-secondary">
            <Play size={15} />
            Playground
          </Link>
        </div>
      </div>
    </section>
  );
}
