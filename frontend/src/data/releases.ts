import type { Release } from "@/types/types";

export const TYPE_COLORS = {
  added: "text-[#22C55E] bg-[#22C55E]/10",
  changed: "text-[#F59E0B] bg-[#F59E0B]/10",
  fixed: "text-[#3B82F6] bg-[#3B82F6]/10",
  removed: "text-[#EF4444] bg-[#EF4444]/10",
};

export const TAG_COLORS = {
  major: "bg-[#3B82F6]/20 text-[#60A5FA] border border-[#3B82F6]/30",
  minor: "bg-[#22C55E]/20 text-[#4ADE80] border border-[#22C55E]/30",
  patch: "bg-[#94A3B8]/20 text-[#94A3B8] border border-[#94A3B8]/30",
};

export const releases: Release[] = [
  {
    version: "1.0.0",
    date: "2026-06-26",
    tag: "major",
    summary:
      "First stable release of NOVA, expanding the Standard Library with official modules for arrays, mathematics, randomness, statistics, and time while completing the language's first-generation feature set.",
    changes: [
      {
        type: "added",
        items: [
          "First stable public release of NOVA",
          "Expanded Standard Library",
          "array Standard Library module",
          "math Standard Library module",
          "random Standard Library module",
          "stats Standard Library module",
          "time Standard Library module",
          "Runtime intrinsics powering Standard Library modules",
          "Explicit Standard Library imports",
          "Improved project organization using user modules and Standard Library modules",
        ],
      },
    ],
  },
  {
    version: "0.9.0",
    date: "2026-06-26",
    tag: "minor",
    summary:
      "Introduced NOVA's first module system with imports, exports, aliases, hierarchical module resolution, and the first Standard Library module, enabling reusable code across multiple source files.",
    changes: [
      {
        type: "added",
        items: [
          "Module import system",
          "Module export declarations",
          "Selective imports",
          "Import aliases using the as keyword",
          "Hierarchical module paths",
          "Standard Library module support",
          "math Standard Library module",
          "Module resolution before program execution",
          "Circular import detection",
        ],
      },
    ],
  },
  {
    version: "0.8.0",
    date: "2026-06-26",
    tag: "minor",
    summary:
      "Introduced NOVA's first collection of globally available built-in functions, providing array manipulation, string processing, type conversion, user input, and runtime argument validation without requiring imports.",
    changes: [
      {
        type: "added",
        items: [
          "Globally available built-in function system",
          "Array built-in functions",
          "String built-in functions",
          "Type conversion built-in functions",
          "User input functions",
          "Built-in function dispatch within the interpreter",
          "Runtime argument count and type validation for built-ins",
          "Playground-compatible input abstraction",
        ],
      },
    ],
  },
  {
    version: "0.7.0",
    date: "2026-06-25",
    tag: "minor",
    summary:
      "Introduced user-defined functions, enabling reusable program logic through typed parameters, return values, recursion, lexical function scope, and function resolution before declaration.",
    changes: [
      {
        type: "added",
        items: [
          "Function declarations with the fn keyword",
          "Function calls with typed arguments",
          "Typed function parameters",
          "Return values with optional return type annotations",
          "Return type enforcement",
          "Early return statements",
          "Function-local execution scope",
          "Access to variables from parent and global scopes",
          "Variable shadowing within functions",
          "Recursive function support",
          "Function resolution before declaration",
        ],
      },
    ],
  },
  {
    version: "0.6.1",
    date: "2026-06-24",
    tag: "patch",
    summary:
      "Completed NOVA's loop execution model by introducing break and continue statements with compile-time validation, enabling controlled loop termination and iteration skipping.",
    changes: [
      {
        type: "added",
        items: [
          "break statement for early loop termination",
          "continue statement for skipping the current iteration",
          "Compile-time validation preventing break outside loops",
          "Compile-time validation preventing continue outside loops",
          "Runtime support for loop control statements",
        ],
      },
    ],
  },
  {
    version: "0.6.0",
    date: "2026-06-24",
    tag: "minor",
    summary:
      "Completed NOVA's foundational control-flow system with structured iteration, introducing while loops, range-based loops, array iteration, nested loops, and loop-scoped execution.",
    changes: [
      {
        type: "added",
        items: [
          "while loops",
          "Range-based for loops",
          "Inclusive ranges (...)",
          "Exclusive ranges (..)",
          "Descending range iteration",
          "Array iteration using for...in",
          "Nested loop support",
          "Loop-scoped variables",
          "Lexical loop scope",
        ],
      },
    ],
  },
  {
    version: "0.5.1",
    date: "2026-06-24",
    tag: "patch",
    summary:
      "Improved the print() built-in by adding support for multiple comma-separated expressions, making console output more convenient and reducing the need for repeated print statements.",
    changes: [
      {
        type: "fixed",
        items: [
          "Support for multiple expressions in print()",
          "Comma-separated output arguments",
          "Automatic space-separated formatting of printed values",
        ],
      },
    ],
  },
  {
    version: "0.5.0",
    date: "2026-06-23",
    tag: "minor",
    summary:
      "Introduced NOVA's first control-flow system with conditional execution, if/else statements, ternary expressions, lexical block scoping, and variable shadowing for structured program flow.",
    changes: [
      {
        type: "added",
        items: [
          "Conditional execution with if statements",
          "else and else if branches",
          "Nested conditional statements",
          "Ternary conditional expressions",
          "Lexical block scope",
          "Variable shadowing within nested scopes",
          "Parent scope variable resolution",
          "Unary minus operator",
        ],
      },
    ],
  },
  {
    version: "0.4.0",
    date: "2026-06-22",
    tag: "minor",
    summary:
      "Added schema maps and strongly typed map instances, enabling structured data with reusable schemas, nested objects, optional properties, property access, and runtime schema validation.",
    changes: [
      {
        type: "added",
        items: [
          "Schema map type (M)",
          "Strongly typed map instances",
          "Schema-based runtime type validation",
          "Optional schema properties",
          "Nested schemas",
          "Arrays of map instances",
          "Schemas containing array fields",
          "Property access using dot notation",
          "Property mutation with runtime validation",
          "Deep traversal of nested maps and collections",
        ],
      },
    ],
  },
  {
    version: "0.3.0",
    date: "2026-06-22",
    tag: "minor",
    summary:
      "Introduced arrays as NOVA's first collection type, including typed and nested arrays, array indexing and mutation, along with source-aware diagnostics for precise parser, type, and runtime error reporting.",
    changes: [
      {
        type: "added",
        items: [
          "Array type with literal syntax",
          "Typed arrays",
          "Multi-type arrays",
          "Nested arrays",
          "Array indexing",
          "Array element assignment and mutation",
          "Immutable array enforcement",
          "Source-aware diagnostics with precise line and column information",
          "Improved runtime validation for array operations",
        ],
      },
    ],
  },
  {
    version: "0.2.0",
    date: "2026-06-21",
    tag: "minor",
    summary:
      "Expanded NOVA's primitive type system with booleans, the Any type, constants, null values, comparison operators, and logical operators, bringing runtime type safety and significantly more expressive programs.",
    changes: [
      {
        type: "added",
        items: [
          "Boolean datatype (B)",
          "Any datatype (U)",
          "Constant declarations using ::",
          "Deferred constant initialization",
          "Null literal and null runtime value",
          "Comparison operators (<, >, <=, >=)",
          "Equality operators (==, !=)",
          "Logical operators (&&, ||, !)",
          "Runtime datatype validation for new primitive types",
          "Immutable constant enforcement",
          "Enhanced interpreter runtime supporting boolean and logical evaluation",
        ],
      },
    ],
  },
  {
    version: "0.1.0",
    date: "2026-06-21",
    tag: "minor",
    summary:
      "Initial public release of NOVA, establishing the complete language execution pipeline with lexical analysis, parsing, AST generation, interpretation, variable declarations, arithmetic evaluation, and the first command-line interface.",
    changes: [
      {
        type: "added",
        items: [
          "Initial lexer for tokenizing NOVA source code",
          "Recursive-descent parser for syntax analysis",
          "Abstract Syntax Tree (AST) generation",
          "Tree-walk interpreter for program execution",
          "Runtime environment and variable scope management",
          "Variable declaration and reassignment",
          "Number datatype (N)",
          "String datatype (S)",
          "Arithmetic operators (+, -, *, /, %)",
          "print() built-in function for console output",
          "Single-line (//) comments",
          "Multi-line (/* */) comments",
          "Runtime datatype validation",
          "Detection of uninitialized variable access",
          "Command-line interface (nova)",
        ],
      },
    ],
  },
];
