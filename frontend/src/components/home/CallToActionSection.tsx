import { FaGithub } from "react-icons/fa";
import { Play, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { METADATA } from "@data/metadata";

export default function CallToActionSection() {
  return (
    <section className="py-24 border-t border-nova-border">
      <div className="max-w-150 mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-nova-text mb-4">
          Start writing {METADATA.name} today
        </h2>
        <p className="text-nova-muted mb-8 leading-relaxed">
          Install via pip, open the playground, or dive into the documentation.{" "}
          {METADATA.name} is ready.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/playground" className="nova-btn-primary">
            <Play size={15} />
            Open Playground
          </Link>
          <Link to="/docs" className="nova-btn-secondary">
            <BookOpen size={15} />
            Read the Docs
          </Link>
          <a
            href={METADATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nova-btn-secondary"
          >
            <FaGithub size={15} />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
