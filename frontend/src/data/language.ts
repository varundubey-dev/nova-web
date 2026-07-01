export const OVERVIEW_CODE = `// NOVA — overview

// Static types
name: S = "NOVA"
version: N = 1.0
stable: B = true
any: U = "Any Type"

// Functions with type annotations
fn greet(lang: S) -> S {
    return ("Hello from " + lang + "!")
}

// Maps for structured data
Point: M = {
    x: N,
    y: N
}

// Standard library
import math
import stats

data: [N] = [1, 2, 3, 4, 5]
print(stats.mean(data))    // 3.0
print(math.sqrt(16))       // 4.0
print(greet(name))         // Hello from NOVA!`;

export const OVERVIEW_DATA = [
  {
    title: "Static Typing",
    desc: "All variables and function parameters carry explicit types. Type errors are caught before the program runs.",
    color: "bg-[#3B82F6]",
  },
  {
    title: "Clean Syntax",
    desc: "NOVA's syntax is minimal and consistent. No semicolons. No verbose boilerplate. Code looks like pseudocode.",
    color: "bg-[#22C55E]",
  },
  {
    title: "Standard Library",
    desc: "Ships with math, array, random, stats, and time modules. Common operations don't require external packages.",
    color: "bg-[#F59E0B]",
  },
  {
    title: "Maps",
    desc: "Define structured data types with Maps. NOVA's answer to structs, records, and data classes.",
    color: "bg-[#818CF8]",
  },
  {
    title: "pip Installable",
    desc: "Distributed as a Python package. Install with pip install nova-pl and start writing immediately.",
    color: "bg-[#EC4899]",
  },
];

export const OVERVIEW_STATS = [
  { value: "4", label: "Types" },
  { value: "5", label: "Std Modules" },
  { value: "10+", label: "Releases" },
];
