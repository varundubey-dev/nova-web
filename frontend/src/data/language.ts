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

export const BUILTIN_CATEGORIES = [
  {
    id: "input",
    title: "I/O Functions",
    description:
      "Functions for interacting with the console. These built-ins allow programs to display output to the user and receive input during execution without importing any modules.",
    functions: [
      {
        name: "print",
        signature: "print(expression)",
        description:
          "Evaluates the given expression and writes its value to standard output followed by a newline. It accepts values of any type, including numbers, strings, booleans, arrays, maps, and null.",
        code: `name: S = "NOVA"

print(name)`,
      },
      {
        name: "input",
        signature: "input(prompt?: S) -> S",
        description:
          "Displays an optional prompt and reads a full line of text from standard input. The returned value is always a string and can be converted to another type using the conversion functions if needed.",
        code: `name: S = input("Enter your name: ")

print(name)`,
      },
    ],
  },

  {
    id: "string",
    title: "String Functions",
    description:
      "Built-in functions for inspecting, searching, modifying, and transforming string values. These operations always work on string data and return either a new string, a boolean result, or an array.",
    functions: [
      {
        name: "length",
        signature: "length(string: S) -> N",
        description:
          "Returns the total number of characters contained in a string. This includes letters, numbers, spaces, and punctuation.",
        code: `text: S = "Nova"

print(length(text))`,
      },
      {
        name: "upper",
        signature: "upper(string: S) -> S",
        description:
          "Returns a new string with every alphabetic character converted to uppercase. The original string remains unchanged.",
        code: `print(
    upper("Nova")
)`,
      },
      {
        name: "lower",
        signature: "lower(string: S) -> S",
        description:
          "Returns a new string with every alphabetic character converted to lowercase without modifying the original value.",
        code: `print(
    lower("NOVA")
)`,
      },
      {
        name: "trim",
        signature: "trim(string: S) -> S",
        description:
          "Removes whitespace from the beginning and end of a string. Internal spaces between words are preserved.",
        code: `print(
    trim("   Nova   ")
)`,
      },
      {
        name: "contains",
        signature: "contains(string: S, substring: S) -> B",
        description:
          "Returns true if the specified substring appears anywhere within the string, otherwise returns false.",
        code: `print(
    contains(
        "Nova Language",
        "Language"
    )
)`,
      },
      {
        name: "startsWith",
        signature: "startsWith(string: S, prefix: S) -> B",
        description:
          "Returns true if the string begins with the specified prefix. This is commonly used for validation and parsing text.",
        code: `print(
    startsWith(
        "Nova",
        "No"
    )
)`,
      },
      {
        name: "endsWith",
        signature: "endsWith(string: S, suffix: S) -> B",
        description:
          "Returns true if the string ends with the specified suffix. Useful when checking file extensions, identifiers, or formatted text.",
        code: `print(
    endsWith(
        "Nova",
        "va"
    )
)`,
      },
      {
        name: "replace",
        signature: "replace(string: S, old: S, new: S) -> S",
        description:
          "Returns a new string where every occurrence of the specified text has been replaced with another value. The original string is not modified.",
        code: `print(
    replace(
        "Hello World",
        "World",
        "Nova"
    )
)`,
      },
      {
        name: "split",
        signature: "split(string: S, delimiter: S) -> [S]",
        description:
          "Splits a string into an array using the provided delimiter. Each separated portion becomes an element of the returned array.",
        code: `parts: [S] = split(
    "A,B,C",
    ","
)

print(parts)`,
      },
    ],
  },

  {
    id: "array",
    title: "Array Functions",
    description:
      "Functions for inspecting and modifying arrays. These built-ins allow elements to be added, removed, searched, and manipulated directly without requiring any external modules.",
    functions: [
      {
        name: "length",
        signature: "length(array: [U]) -> N",
        description:
          "Returns the number of elements currently stored in an array regardless of the element type.",
        code: `numbers: [N] = [1,2,3]

print(length(numbers))`,
      },
      {
        name: "push",
        signature: "push(array: [U], value: U)",
        description:
          "Appends a new element to the end of an array, increasing its size by one.",
        code: `numbers: [N] = [1,2,3]

push(numbers, 4)

print(numbers)`,
      },
      {
        name: "pop",
        signature: "pop(array: [U]) -> U",
        description:
          "Removes the last element from an array and returns it. The array becomes one element shorter after the operation.",
        code: `numbers: [N] = [1,2,3]

value: N = pop(numbers)

print(value)`,
      },
      {
        name: "insert",
        signature: "insert(array: [U], index: N, value: U)",
        description:
          "Inserts a value at the specified index. Existing elements at and after that position are shifted to the right.",
        code: `numbers: [N] = [1,3]

insert(numbers,1,2)

print(numbers)`,
      },
      {
        name: "remove",
        signature: "remove(array: [U], index: N)",
        description:
          "Removes the element located at the specified index. All following elements automatically shift one position to fill the gap.",
        code: `numbers: [N] = [1,2,3]

remove(numbers,1)

print(numbers)`,
      },
      {
        name: "contains",
        signature: "contains(array: [U], value: U) -> B",
        description:
          "Returns true if the array contains the specified value, otherwise returns false.",
        code: `numbers: [N] = [1,2,3]

print(
    contains(numbers,2)
)`,
      },
      {
        name: "clear",
        signature: "clear(array: [U])",
        description:
          "Removes every element from the array, leaving it empty while preserving the array itself.",
        code: `numbers: [N] = [1,2,3]

clear(numbers)

print(numbers)`,
      },
    ],
  },

  {
    id: "conversion",
    title: "Conversion Functions",
    description:
      "Functions for converting values between NOVA's primitive data types. These are useful when processing user input, formatting output, or working with values whose type must change during execution.",
    functions: [
      {
        name: "toString",
        signature: "toString(value: U) -> S",
        description:
          "Converts any supported value into its string representation. Numbers, booleans, arrays, maps, and null can all be converted to strings.",
        code: `text: S = toString(25)

print(text)`,
      },
      {
        name: "toNumber",
        signature: "toNumber(value: S) -> N",
        description:
          "Converts a valid numeric string into a number. If the provided string cannot be interpreted as a number, a runtime error is produced.",
        code: `age: N = toNumber("19")

print(age)`,
      },
      {
        name: "toBoolean",
        signature: "toBoolean(value: S) -> B",
        description:
          "Converts the strings 'true' or 'false' into their corresponding boolean values. Invalid strings result in a runtime error.",
        code: `flag: B = toBoolean("true")

print(flag)`,
      },
    ],
  },
];
