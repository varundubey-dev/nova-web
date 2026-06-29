import { METADATA } from "@data/metadata";
import { ExternalLink, Download } from "lucide-react";
import CopyButton from "@components/CopyButton";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

export default function InstallSection() {
  return (
    <section className="py-16 border-t border-nova-border bg-nova-surface/40">
      <div className="max-w-300 mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-bold text-nova-text mb-2">
              Install {METADATA.name}
            </h2>
            <p className="text-nova-muted">
              Available via pip. Requires Python 3.8+
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-auto">
            <div className="flex items-center gap-3 p-3.5 bg-nova-bg border border-nova-border rounded-lg w-full max-w-md mx-auto md:max-w-none md:mx-0">
              <span className="text-nova-muted-dark font-mono text-sm">$</span>
              <code className="text-sm font-mono text-nova-text flex-1 min-w-55">
                pip install{" "}
                <span className="text-nova-blue">{METADATA.pypi.package}</span>
              </code>
              <CopyButton
                text={`pip install ${METADATA.pypi.package}`}
                size="sm"
                hideLabelOnMobile
                className="md:min-w-20 justify-center"
              />
            </div>
            <div className="flex items-center gap-3 p-3.5 bg-nova-bg border border-nova-border rounded-lg w-full max-w-md mx-auto md:max-w-none md:mx-0">
              <span className="text-nova-muted-dark font-mono text-sm">$</span>
              <code className="text-sm font-mono text-nova-muted">
                {METADATA.name.toLowerCase()}{" "}
                <span className="text-nova-text">hello.nova</span>
              </code>
            </div>
            <div className="flex gap-2 mt-1 justify-center md:justify-start flex-wrap">
              <a
                href={METADATA.pypi.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nova-btn-secondary text-xs py-2 px-3"
              >
                <ExternalLink size={12} />
                PyPI
              </a>
              <a
                href={METADATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nova-btn-secondary text-xs py-2 px-3"
              >
                <FaGithub size={12} />
                GitHub
              </a>
              <Link
                to="/download"
                className="nova-btn-secondary text-xs py-2 px-3"
              >
                <Download size={12} />
                All Options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
