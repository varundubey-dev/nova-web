import type { InteractiveTab } from "@/types/types";

export const interactiveTabs: InteractiveTab[] = [
  {
    id: "variables",
    label: "Variables",
    description:
      "NOVA uses static typing. Variables are declared with a name, type annotation, and value.",
    code: `// Variable declarations
name: S = "NOVA" 
version: N = 1.0 
stable: B = true
lines: U = 0 // U -> Any

// Print values
print(name)
print(version)
print(stable)

// Reassignment
lines = 1000
print(lines)`,
  },
  {
    id: "functions",
    label: "Functions",
    description:
      "Functions in NOVA are declared with fn, return type may be defined and can be recursive.",
    code: `fn greet(name: S) {
    print("Hello", name)
}

fn factorial(n: N) -> N {
    if n <= 1 {
        return 1
    }
    return n * factorial(n - 1)
}

fn add(a: N, b: N) -> N {
    return a + b
}

greet("World")
print(factorial(5))
print(add(10, 32))`,
  },
  {
    id: "collections",
    label: "Collections",
    description:
      "Arrays and maps are built-in collection types with rich standard library support.",
    code: `// Arrays
nums: [N] = [1, 2, 3, 4, 5]
words: [S] = ["nova", "lang", "v1"]

// Access elements
print(nums[0])
print(words[2])

// Array operations
push(nums, 6)
print(length(nums))

// Iteration
for item in nums {
    print(item)
}`,
  },
  {
    id: "maps",
    label: "Maps",
    description:
      "Maps are NOVA's structured data type — similar to structs or records.",
    code: `Point: M = {
    x: N,
    y: N
}

Person: M = {
    name: S,
    age: N,
    active: B
}

// Create instances
p: Point = { x = 10, y = 20 }
alice: Person = {
    name = "Alice",
    age = 30,
    active = true
}

print(p.x)
print(alice.name)
print(alice.active)`,
  },
  {
    id: "loops",
    label: "Loops",
    description:
      "NOVA provides while and for loops with clean, readable syntax.",
    code: `// While loop
i: N = 0
while i < 5 {
    print(i)
    i = i + 1
}

//  For loop over array
fruits: [S] = ["apple", "banana", "cherry"]
for fruit in fruits {
    print(fruit)
}

//  Range-based iteration
for n in 1...10 {
    if n % 2 == 0 {
        print(n," is even")
    }
}`,
  },
  {
    id: "modules",
    label: "Modules",
    description: "Modules let you organize code cleanly.",
    code: `// greetings.nova
export greeting: S = "Hello from greetings"

export fn greet() {
    print(greeting)
}
    
// main.nova
import greetings
greetings.greet()

print(greetings.greeting)`,
  },
  {
    id: "stdlib",
    label: "Standard Library",
    description:
      "NOVA ships with a curated standard library covering math, arrays, random, stats, and time.",
    code: `import math
import stats
import time

//  Math operations
print(math.abs(-42))      // 42
print(math.pow(2, 10))    // 1024
print(math.floor(3.7))    // 3
print(math.ceil(3.2))     // 4

//  Statistics
data: [N] = [2, 4, 4, 4, 5, 5, 7, 9]
print(stats.mean(data))   // 5.0
print(stats.median(data)) // 4.5
print(stats.variance(data))    // 4
print(stats.stddev(data))    // 2.0

//  Time
print(time.now())`,
  },
];
