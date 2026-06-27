import {METADATA} from "./metadata"

export const NAVLINKS = [
  {
    label: "Language",
    href: "/language/overview",
    children: [
      { label: "Overview", href: "/language/overview" },
      { label: "Features", href: "/language/features" },
      { label: "Syntax", href: "/language/syntax" },
      { label: "Built-ins", href: "/language/builtins" },
      { label: "Standard Library", href: "/language/stdlib" },
      { label: "Roadmap", href: "/language/roadmap" },
    ],
  },
  { label: "Documentation", href: "/docs" },
  { label: "Playground", href: "/playground" },
  { label: "Examples", href: "/examples" },
  { label: "Download", href: "/download" },
];

export const FOOTERLINKS = [
  {
    title: "Language",
    links: [
      { label: "Overview", href: "/language/overview" },
      { label: "Features", href: "/language/features" },
      { label: "Syntax", href: "/language/syntax" },
      { label: "Built-ins", href: "/language/builtins" },
      { label: "Standard Library", href: "/language/stdlib" },
      { label: "Roadmap", href: "/language/roadmap" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Playground", href: "/playground" },
      { label: "Examples", href: "/examples" },
      { label: "Releases", href: "/releases" },
      { label: "Download", href: "/download" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "About", href: "/about" },
      { label: "GitHub", href: METADATA.github, external: true },
      { label: "PyPI", href: METADATA.pypi.url, external: true },
      { label: "MIT License", href: `${METADATA.github}/blob/main/LICENSE`, external: true },
    ],
  },
];