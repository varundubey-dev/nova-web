import type { FeatureCard } from "@/types/types";

export const featureCards: FeatureCard[] = [
  {
    icon: "Shield",
    title: "Static Typing",
    description:
      "Catch errors at parse time with NOVA's strong static type system.",
    code: `score: N = 100\nname: S = "NOVA"\n\nprint(name,score)`,
  },

  {
    icon: "List",
    title: "Arrays",
    description: "Built-in arrays with functional operations and iteration.",
    code: `nums: [N] = [1,2,3]\npush(nums,4)\n\nprint(nums)`,
  },

  {
    icon: "Layers",
    title: "Map Schemas",
    description:
      "Define structured data with maps — lightweight, composable records.",
    code: `Point: M = {\n  x: N,\n  y: N\n}`,
  },

  {
    icon: "GitBranch",
    title: "Control Flow",
    description: "Express logic with conditionals and looping constructs.",
    code: `result: S = age >= 18 ? "Adult" : "Minor"\n\nif age >= 18 {...}\n  else{...}`,
  },

  {
    icon: "ArrowRightLeft",
    title: "Iteration",
    description: "Iterate over arrays and ranges using clean, readable syntax.",
    code: `for item in list {\n\n  print(item)\n}`,
  },

  {
    icon: "Zap",
    title: "Functions",
    description:
      "User-defined functions with type annotations and recursion support.",
    code: `fn add(a: N, b: N) -> N {\n\n  return a + b\n}`,
  },

  {
    icon: "RefreshCw",
    title: "Recursion",
    description: "Full recursive function support for elegant algorithms.",
    code: `fn fib(n: N) -> N {\n  if n <= 1 { return n }\n  return fib(n-1)+fib(n-2)\n}`,
  },

  {
    icon: "Code2",
    title: "Built-in Functions",
    description:
      "print, length, upper, toString, and more — all built into the runtime.",
    code: `upper("nova")\n \nlength("hello")\n `,
  },

  {
    icon: "Package",
    title: "Modules",
    description: "Organize and share code with NOVA's clean module system.",
    code: `import greet from greetings\n \ngreet()\n `,
  },

  {
    icon: "BookOpen",
    title: "Standard Library",
    description:
      "A curated stdlib covering math, arrays, stats, random, and time.",
    code: `import stats\n \nstats.mean([1,2,3])\n `,
  },

  {
    icon: "TriangleAlert",
    title: "Error Diagnostics",
    description:
      "Precise diagnostics that point to the exact location and cause of errors.",
    code: `Runtime Error: Datatype mismatch\n --> main.nova:3:10\n3 | age: N = "18"\n  |          ^^^^`,
  },

  {
    icon: "Terminal",
    title: "Interpreter",
    description:
      "A clean, fast interpreter written in Python. Install via pip.",
    code: `\n$ pip install nova-pl\n$ nova hello.nova\n `,
  },
];
