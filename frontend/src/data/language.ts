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

export const SYNTAX_SECTIONS = [
  {
    id: "types",
    title: "Type System",
    description:
      "NOVA uses static typing to catch type errors before execution. Every variable, function parameter, and return value has an explicit type, making programs easier to understand and safer to maintain.",
    code: `// Primitive types
n: N = 42.5        // Number (int or float)
s: S = "hello"     // String
b: B = false       // Boolean
a: U = "any"       // Any

// Function with typed params
fn add(x: N, y: N) -> N {
    return x + y
}

// Type in schema fields
Person: M = {
    name: S,
    age: N
}`,
  },
  {
    id: "variables",
    title: "Variables",
    description:
      "Variables are declared using a name, a type annotation, and an initial value. Once declared, they can be reassigned only with values that match their original type.",
    code: `// Variable declarations
name: S = "Alice"
age: N = 25
active: B = true
arr: [U] = [95, 87, 92, "string", true, false, null]

// Reassignment (type must match)
age = 26
name = "Bob"

// Print
print(name)
print(age)`,
  },
  {
    id: "functions",
    title: "Functions",
    description:
      "Functions are declared with the fn keyword. Parameters require explicit types, return types are specified with -> when needed, and recursion is fully supported.",
    code: `// Basic function
fn greet(name: S) -> S {
    return "Hello, " + name + "!"
}

// Multiple parameters
fn area(w: N, h: N) -> N {
    return w * h
}

// Recursive function
fn factorial(n: N) -> N {
    if n <= 1 {
        return 1
    }
    return n * factorial(n - 1)
}

print(greet("World"))
print(area(5, 10))
print(factorial(6))`,
  },
  {
    id: "control-flow",
    title: "Control Flow",
    description:
      "Control program execution using if, else if, else, and the ternary operator. Combine comparison and logical operators to build expressive conditional logic.",
    code: `score: N = 85

if score >= 90 {
    print("A")
} else if score >= 80 {
    print("B")
} else if score >= 70 {
    print("C")
} else {
    print("F")
}

// Logical operators
x: N = 10
result: S = x > 0 && x < 100 ? "in range" : "not in range"

print(result)

if !(x == 5) {
    print("not five")
}`,
  },
  {
    id: "loops",
    title: "Loops",
    description:
      "Repeat code using while loops or iterate over arrays and numeric ranges with for...in. Loop control statements such as break and continue are also supported.",
    code: `// While loop
i: N = 0
while i < 5 {
    print(i)
    i = i + 1
}

// For loop over array
fruits: [S] = ["apple", "banana", "cherry"]
for fruit in fruits {
    print(fruit)
}

// Range-based for loop
for n in 1..6 {
    print(n)
}`,
  },
  {
    id: "maps",
    title: "Maps",
    description:
      "Maps define structured data using named fields, similar to structs or records in other languages. They provide a clear way to model complex data and access properties with dot notation.",
    code: `// Define a Map
Rectangle: M = {
    width: N,
    height: N
}

// Function accepting a Map
fn area(r: Rectangle) -> N {
    return r.width * r.height
}

// Create an instance
rect: Rectangle = { width = 10, height = 5 }

// Access fields
print(rect.width)
print(rect.height)
print(area(rect))`,
  },
  {
    id: "modules",
    title: "Modules",
    description:
      "Organize code by importing standard library or local modules. Modules can be aliased with as, and exported functions or values are accessed using dot notation.",
    code: `import math as m
import array
import random
import stats

// math module
print(m.abs(-42))
print(m.sqrt(144))
print(m.pow(2, 8))

// array module
nums: [N] = [3, 1, 4, 1, 5]
print(array.sort(nums))

// stats module
print(stats.mean(nums))
print(stats.mode(nums))

// random module
print(random.randint(1, 100))`,
  },
  {
    id: "comments",
    title: "Comments",
    description:
      "Document your code with single-line (//) or multi-line (/* ... */) comments. Comments are ignored by the interpreter and exist only to improve readability and maintainability.",
    code: `// This is a comment

x: N = 10  // Inline comment

/* Comments are ignored by the interpreter
   Use them to document your code */

fn add(a: N, b: N) -> N {
    // Add two numbers and return the result
    return a + b
}`,
  },
];

export const SYNTAX_TYPES = [
  { t: "N", name: "Number", color: "text-[#A78BFA]" },
  { t: "S", name: "String", color: "text-[#FCD34D]" },
  { t: "B", name: "Boolean", color: "text-[#34D399]" },
  { t: "U", name: "Any", color: "text-[#60A5FA]" },
];
