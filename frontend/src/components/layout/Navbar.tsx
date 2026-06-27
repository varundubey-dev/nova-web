import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router";
import { FaGithub } from "react-icons/fa";
import { ChevronDown, X, Menu } from "lucide-react";
import { NAVLINKS } from "../../data/navigation";
import { METADATA } from "../../data/metadata";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
        setLangDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setLangDropdownOpen(false);
  };

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(`${href}/`);

  return (
    <header
      ref={navRef}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          closeMenus();
        }
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nova-bg/95 backdrop-blur-md border-b border-nova-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-300 mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          onClick={closeMenus}
          className="font-mono text-xl transition-transform duration-250 hover:scale-110"
        >
          <span className="text-nova-blue font-black">NOVA</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {NAVLINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setLangDropdownOpen((open) => !open)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-nova-blue"
                      : "text-nova-muted hover:text-nova-text"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform ${langDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`absolute top-full left-0 mt-1 min-w-45 rounded-lg border border-nova-border bg-nova-surface shadow-xl shadow-black/40 origin-top transition-all duration-200 ease-out ${
                    langDropdownOpen
                      ? "translate-y-0 scale-100 opacity-100 visible"
                      : "-translate-y-2 scale-95 opacity-0 invisible pointer-events-none"
                  }`}
                >
                  {link.children.map((child) => (
                    <NavLink
                      key={child.href}
                      to={child.href}
                      onClick={closeMenus}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        location.pathname === child.href
                          ? "text-nova-blue bg-nova-blue/10"
                          : "text-nova-muted hover:text-nova-text hover:bg-nova-border"
                      }`}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={closeMenus}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-nova-blue"
                    : "text-nova-muted hover:text-nova-text"
                }`}
              >
                {link.label}
              </NavLink>
            ),
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={METADATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-nova-muted hover:text-nova-text transition-colors"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="relative flex h-9 w-9 items-center justify-center md:hidden text-nova-muted hover:text-nova-text transition-colors"
          aria-label="Toggle menu"
        >
          <Menu
            size={20}
            className={`absolute transition-all duration-300 ease-in-out ${
              mobileOpen
                ? "rotate-90 scale-75 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }`}
          />

          <X
            size={20}
            className={`absolute transition-all duration-300 ease-in-out ${
              mobileOpen
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-75 opacity-0"
            }`}
          />
        </button>
      </nav>

      <div
        className={`
    md:hidden
    overflow-hidden
    border-t border-nova-border
    bg-nova-surface
    transition-all duration-300 ease-in-out
    ${
      mobileOpen
        ? "max-h-128 opacity-100"
        : "max-h-0 opacity-0 border-transparent"
    }
  `}
      >
        <div className="px-4 py-4 space-y-1">
          {NAVLINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className={`transition-all duration-300 ${
                  mobileOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
              >
                <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-nova-muted">
                  {link.label}
                </div>

                {link.children.map((child) => (
                  <NavLink
                    key={child.href}
                    to={child.href}
                    onClick={closeMenus}
                    className={`block rounded px-6 py-2 text-sm transition-colors ${
                      location.pathname === child.href
                        ? "text-nova-blue"
                        : "text-nova-muted hover:text-nova-text"
                    }`}
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            ) : (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={closeMenus}
                className={`block rounded px-3 py-2 text-sm transition-all duration-300 ${
                  mobileOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                } ${
                  isActive(link.href)
                    ? "bg-nova-blue/10 text-nova-blue"
                    : "text-nova-muted hover:text-nova-text"
                }`}
              >
                {link.label}
              </NavLink>
            ),
          )}

          <a
            href={METADATA.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenus}
            className={`flex items-center gap-2 px-3 py-2 text-sm transition-all duration-300 ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            } text-nova-muted hover:text-nova-text`}
          >
            <FaGithub size={16} />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
