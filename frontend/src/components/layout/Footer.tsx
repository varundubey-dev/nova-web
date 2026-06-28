import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { METADATA } from "@data/metadata";
import { FOOTERLINKS } from "@data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-nova-border bg-nova-bg mt-24">
      <div className="max-w-300 mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link
              to="/"
              className="font-mono font-black text-xl text-nova-blue"
            >
              NOVA
            </Link>
            <p className="mt-3 text-sm text-nova-muted leading-relaxed">
              A modern statically typed programming language designed for
              simplicity, readability, and learning.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={METADATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-nova-muted hover:text-nova-text transition-colors"
              >
                <FaGithub size={15} />
                GitHub
              </a>
            </div>
          </div>

          {FOOTERLINKS.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-nova-muted mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-nova-muted hover:text-nova-text transition-colors"
                      >
                        {link.label}
                        <ExternalLink size={11} className="opacity-50" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-nova-muted hover:text-nova-text transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-nova-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-nova-muted-dark">
            Copyright © {new Date().getFullYear()} NOVA Language. MIT License.
          </p>
          <address className="not-italic text-sm text-nova-muted-dark">
            Built by{" "}
            <a
              href={METADATA.author_website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nova-muted hover:text-nova-blue transition-colors"
            >
              Varun Dubey
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
}
