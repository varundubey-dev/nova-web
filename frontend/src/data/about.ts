import { METADATA } from "@data/metadata";

export const ABOUT_INTRO = {
  title: "About NOVA",
  description:
    "NOVA is a statically typed interpreted programming language created to explore modern language design through a clean, readable syntax. It combines explicit typing, reusable modules, structured data, and a growing standard library while remaining approachable for learning and experimentation.",
};

export const WHY_NOVA = {
  title: "Why NOVA?",
  paragraphs: [
    "NOVA began as a personal exploration into how programming languages work internally. The project started with a lexer and gradually evolved into a complete interpreter featuring parsing, runtime evaluation, static type checking, modules, schemas, and a standard library.",

    "Every language feature was implemented to better understand the complete execution pipeline from reading source code to producing runtime values. Rather than relying on existing compiler frameworks, NOVA was built from the ground up as an opportunity to learn how interpreters are designed and implemented.",

    "Today, NOVA serves as both a language design project and a showcase of compiler and interpreter engineering concepts presented through a modern documentation experience.",
  ],
};

export const DESIGN_PRINCIPLES = [
  {
    title: "Readable Syntax",
    description:
      "NOVA aims for syntax that is easy to read without becoming excessively verbose. The language balances natural readability with explicit structure.",
  },
  {
    title: "Static Typing",
    description:
      "Variables, parameters, and return values use explicit type annotations to improve readability and detect mistakes before execution.",
  },
  {
    title: "Consistency",
    description:
      "Similar concepts follow similar syntax throughout the language. NOVA favors predictable behavior over hidden rules or implicit conversions.",
  },
  {
    title: "Small Core",
    description:
      "The language itself remains intentionally compact while reusable functionality is provided through built-in functions and the standard library.",
  },
];

export const ARCHITECTURE = [
  { label: "Source Code", desc: ".nova files", color: "text-[#60A5FA]" },
  { label: "Lexer", desc: "Tokenizes source", color: "text-[#818CF8]" },
  { label: "Parser", desc: "Builds AST", color: "text-[#A78BFA]" },
  { label: "AST", desc: "Abstract Syntax Tree", color: "text-[#C084FC]" },
  { label: "Interpreter", desc: "Tree-walk interpreter", color: "text-[#E879F9]" },
  { label: "Runtime", desc: "Executes program", color: "text-[#22C55E]" },
];

export const PROJECT_STATS = [
  {
    label: "Implementation",
    value: "Python",
  },
  {
    label: "Execution",
    value: "Tree-walk Interpreter",
  },
  {
    label: "Current Version",
    value: `${METADATA.version}`,
  },
  {
    label: "Language License",
    value: "MIT",
  },
];

export const CAPABILITIES = [
  {
    title: "Static Type System",
    description:
      "Explicit type annotations for variables, parameters, and return values.",
  },
  {
    title: "Structured Data",
    description:
      "Schema maps with nested structures, optional properties, and arrays.",
  },
  {
    title: "Modules",
    description:
      "Import local modules and official standard library modules with aliases.",
  },
  {
    title: "Standard Library",
    description:
      "Five official modules alongside globally available built-in functions.",
  },
  {
    title: "Tree-walk Interpreter",
    description:
      "Complete execution pipeline from lexing and parsing to runtime evaluation.",
  },
  {
    title: "Developer Tools",
    description:
      "CLI, browser playground, documentation, syntax highlighting, and PyPI package.",
  },
];

export const ROADMAP = [
  {
    title: "Semantic Analysis",
    description:
      "Introduce a dedicated semantic analysis stage before interpretation for richer diagnostics and validation.",
  },
  {
    title: "Compiler Backend",
    description:
      "Explore compiling NOVA programs to a lower-level representation beyond the current interpreter.",
  },
  {
    title: "Standard Library",
    description:
      "Continue expanding official modules while keeping the language core small and consistent.",
  },
];