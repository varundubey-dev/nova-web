import type { Example } from "@/types/types";

export const DEFAULT_CODE = `// Welcome to the NOVA Playground
// Write NOVA code here and click Run

fn greet(name: S) {
    print("Hello", name)
}

fn factorial(n: N) -> N {
    if n <= 1 {
        return 1
    }
    return n * factorial(n - 1)
}

greet("World!")
greet("NOVA!")
print(factorial(5))
print(factorial(10))`;

export const examples: Example[] = [
  {
    id: "hello-world",
    title: "Hello, World!",
    description: "The classic first program in NOVA.",
    category: "Getting Started",
    code: `print("Hello, World!")`,
    output: `Hello, World!`,
  },
  {
    id: "variables",
    title: "Variables",
    description: "Declaring variables with static type annotations.",
    category: "Getting Started",
    code: `name: S = "NOVA"\nversion: N = 1.0\nstable: B = true\nlines: U = 0 // U -> Any\n\n\nprint(name)\nprint(version)\nprint(stable)\nprint(lines)`,
    output: `NOVA\n1.0\ntrue\n0`,
  },
  {
    id: "constants",
    title: "Constants",
    description: "Immutable values using constant declarations.",
    category: "Getting Started",
    code: `PI:: N = 3.1415926535

radius: N = 5

area: N = PI * radius * radius

print(area)`,
    output: `78.5398163375`,
  },
  {
    id: "type-conversion",
    title: "Type Conversion",
    description: "Convert values between supported types.",
    category: "Getting Started",
    code: `number: N = 42

text: S = toString(number)

print(text)

print(toNumber("100") + 50)

print(toBoolean("true"))
print(toBoolean("false"))`,
    output: `42
150
true
false`,
  },
  {
    id: "string-operations",
    title: "String Operations",
    description: "Common string manipulation functions.",
    category: "Getting Started",
    code: `text: S = "  Hello NOVA  "

print(length(text))
print(trim(text))
print(upper(text))
print(lower(text))
print(startsWith(text, " "))
print(endsWith(text, " "))
print(replace(text, "NOVA", "World"))`,
    output: `14
Hello NOVA
HELLO NOVA
hello nova
true
true
Hello World`,
  },
  {
    id: "fizzbuzz",
    title: "FizzBuzz",
    description: "The classic FizzBuzz problem in NOVA.",
    category: "Control Flow",
    code: `for i in 1..31 {\n    if i % 15 == 0 {\n        print("FizzBuzz")\n    } else if i % 3 == 0 {\n        print("Fizz")\n    } else if i % 5 == 0 {\n        print("Buzz")\n    } else {\n        print(i)\n    }\n}`,
    output: `1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n...`,
  },
  {
    id: "countdown",
    title: "Countdown",
    description: "Descending range loops.",
    category: "Control Flow",
    code: `for i in 10..1 {
    print(i)
}

print("Lift off!")`,
    output: `10
9
8
7
6
5
4
3
2
1
Lift off!`,
  },
  {
    id: "break-continue",
    title: "Break & Continue",
    description: "Control loop execution.",
    category: "Control Flow",
    code: `for i in 1..10 {

    if i == 4 {
        continue
    }

    if i == 8 {
        break
    }

    print(i)
}`,
    output: `1
2
3
5
6
7`,
  },
  {
    id: "grade-calculator",
    title: "Grade Calculator",
    description: "Using nested ternary expressions.",
    category: "Control Flow",
    code: `score: N = 86

grade: S = (
    score >= 90 ? "A" :
    score >= 80 ? "B" :
    score >= 70 ? "C" :
    score >= 60 ? "D" :
    "F" )

print(grade)`,
    output: `B`,
  },
  {
    id: "array-ops",
    title: "Array Operations",
    description: "Common array manipulation patterns.",
    category: "Collections",
    code: `nums: [N] = [5, 2, 8, 1, 9, 3]\n\n// Sort\nimport array\nsorted: [N] = array.sort(nums)\nprint(sorted)\n\n// Filter (manual)\nevens: [N] = []\nfor n in nums {\n    if n % 2 == 0 {\n       push(evens,n)\n    }\n}\nprint(evens)\n\n// Sum\ntotal: N = 0\nfor n in nums {\n    total = total + n\n}\nprint(total)`,
    output: `[1, 2, 3, 5, 8, 9]\n[2, 8]\n28`,
  },
  {
    id: "array-reverse",
    title: "Reverse Array",
    description: "Reverse an array in-place.",
    category: "Collections",
    code: `numbers: [N] = [1,2,3,4,5]

left: N = 0
right: N = length(numbers)-1

while left < right {

    temp: N = numbers[left]

    numbers[left] = numbers[right]
    numbers[right] = temp

    left = left + 1
    right = right - 1
}

print(numbers)`,
    output: `[5, 4, 3, 2, 1]`,
  },
  {
    id: "matrix",
    title: "2D Arrays",
    description: "Working with nested arrays.",
    category: "Collections",
    code: `matrix: [[N]] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

print(matrix)
print(matrix[1][2])`,
    output: `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
6`,
  },
  {
    id: "map-example",
    title: "Schemas & Maps",
    description: "Using Maps to define structured data.",
    category: "Collections",
    code: `Rectangle: M = {\n    width: N,\n    height: N\n}\n\nfn area(r: Rectangle) -> N {\n    return r.width * r.height\n}\n\nfn perimeter(r: Rectangle) -> N {\n    return 2 * (r.width + r.height)\n}\n\nrect: Rectangle = { width = 10, height = 5 }\nprint(area(rect))\nprint(perimeter(rect))`,
    output: `50\n30`,
  },
  {
    id: "student-map",
    title: "Schema Example",
    description: "Maps representing structured data.",
    category: "Collections",
    code: `Student: M = {
    name: S,
    marks: N,
    passed: B
}

student: Student = {
    name = "Alice",
    marks = 91,
    passed = true
}

print(student)`,
    output: `{ name = Alice, marks = 91, passed = true }`,
  },
  {
    id: "optional-fields",
    title: "Optional Properties",
    description: "Schemas with optional properties.",
    category: "Collections",
    code: `Person: M = {
    name: S,
    age?: N,
    city?: S
}

user: Person = {
    name = "Alex"
}

print(user)`,
    output: `{ name = Alex }`,
  },
  {
    id: "nested-maps",
    title: "Nested Schemas",
    description: "Maps containing other maps.",
    category: "Collections",
    code: `Address: M = {
    city: S,
    country: S
}

Person: M = {
    name: S,
    address: Address
}

person: Person = {
    name = "John",
    address = {
        city = "Tokyo",
        country = "Japan"
    }
}

print(person.address.city)`,
    output: `Tokyo`,
  },
  {
    id: "factorial",
    title: "Factorial",
    description: "Compute factorial using recursive functions.",
    category: "Algorithms",
    code: `fn factorial(n: N) -> N {\n    if n <= 1 {\n        return 1\n    }\n    return n * factorial(n - 1)\n}\n\nprint(factorial(5))\nprint(factorial(10))`,
    output: `120\n3628800`,
  },
  {
    id: "fibonacci",
    title: "Fibonacci Sequence",
    description: "Generate Fibonacci numbers with recursion.",
    category: "Algorithms",
    code: `fn fib(n: N) -> N {\n    if n <= 1 {\n        return n\n    }\n    return fib(n - 1) + fib(n - 2)\n}\n\nfor i in 0...10 {\n    print(fib(i))\n}`,
    output: `0\n1\n1\n2\n3\n5\n8\n13\n21\n34`,
  },
  {
    id: "gcd",
    title: "Greatest Common Divisor",
    description: "Recursive Euclidean algorithm.",
    category: "Algorithms",
    code: `fn gcd(a: N, b: N) -> N {

    if b == 0 {
        return a
    }

    return gcd(b, a % b)
}

print(gcd(48, 18))`,
    output: `6`,
  },
  {
    id: "prime-checker",
    title: "Prime Numbers",
    description: "Generate prime numbers.",
    category: "Algorithms",
    code: `fn prime(n: N) -> B {
    if n < 2 {
        return false
    }
    i: N = 2
    while i * i <= n {
        if n % i == 0 {
            return false
        }
        i = i + 1
    }
    return true
}

for i in 2..30 {
    if prime(i) {
        print(i)
    }
}`,
    output: `2
3
5
7
11
13
17
19
23
29`,
  },
  {
    id: "bubble-sort",
    title: "Bubble Sort",
    description: "Implement bubble sort algorithm on an array.",
    category: "Algorithms",
    code: `fn bubble_sort(arr: [N]) -> [N] {\n    n: N = length(arr)\n    i: N = 0\n    while i < n {\n        j: N = 0\n        while j < n - i - 1 {\n            if arr[j] > arr[j + 1] {\n                temp: N = arr[j]\n                arr[j] = arr[j + 1]\n                arr[j + 1] = temp\n            }\n            j = j + 1\n        }\n        i = i + 1\n    }\n    return arr\n}\n\nnums: [N] = [64, 34, 25, 12, 22, 11, 90]\nprint(bubble_sort(nums))`,
    output: `[11, 12, 22, 25, 34, 64, 90]`,
  },
  {
    id: "math-example",
    title: "Math Module",
    description: "Using the built-in math standard library.",
    category: "Standard Library",
    code: `import math\n\nprint(math.abs(-42))\nprint(math.sqrt(256))\nprint(math.pow(2, 8))\nprint(math.floor(3.9))\nprint(math.ceil(3.1))\nprint(math.PI)`,
    output: `42\n16.0\n256\n3\n4\n3.141592653589793`,
  },
  {
    id: "stats-example",
    title: "Statistics",
    description: "Statistical analysis using the stats module.",
    category: "Standard Library",
    code: `import stats\n\ndata: [N] = [2, 4, 4, 4, 5, 5, 7, 9]\n\nprint(stats.mean(data))\nprint(stats.median(data))\nprint(stats.mode(data))\nprint(stats.variance(data))\nprint(stats.stddev(data))`,
    output: `5\n4.5\n4\n4\n2.0`,
  },
  {
    id: "circle-calculator",
    title: "Circle Geometry",
    description: "Area and circumference using the math module.",
    category: "Standard Library",
    code: `import math

radius: N = 8

area: N = math.PI * math.pow(radius,2)
circumference: N = 2 * math.PI * radius

print(area)
print(circumference)`,
    output: `201.06192982974676
50.26548245743669`,
  },
  {
    id: "module-alias",
    title: "Module Alias",
    description: "Importing modules with aliases.",
    category: "Standard Library",
    code: `import math as m

print(m.PI)
print(m.sqrt(64))
print(m.pow(2,10))`,
    output: `3.141592653589793
8
1024`,
  },
  {
    id: "modules-example",
    title: "Module Showcase",
    description: "Importing and using multiple standard library modules.",
    category: "Standard Library",
    code: `import math\nimport random\nimport stats\n\n// Generate random data\ndata: [N] = []\ni: N = 0\nwhile i < 10 {\n    push(data,random.randint(1, 100))\n    i = i + 1\n}\n\nprint(data)\nprint(stats.mean(data))\nprint(stats.mode(data))\nprint(math.sqrt(stats.mean(data)))`,
    output: `[4, 91, 85, 71, 44, 2, 77, 85, 86, 67]\n61.2\n85\n7.8230428862431785`,
  },
  {
    id: "dice-roller",
    title: "Dice Roller",
    description: "Generate random dice rolls.",
    category: "Random & Games",
    code: `import random

for i in 1..5 {
    print(random.randint(1,6))
}`,
    output: `Random numbers between 1 and 6`,
  },
  {
    id: "random-game",
    title: "Guess the Number",
    description: "A simple number guessing game using the random module.",
    category: "Random & Games",
    code: `import random\n\nsecret: N = random.randint(1, 10)\nguess: N = 5  // simulated guess\ntries: N = 0\n\nwhile guess != secret {\n    tries = tries + 1\n    if guess < secret {\n        print("Too low!")\n        guess = guess + 1\n    } else {\n        print("Too high!")\n        guess = guess - 1\n    }\n}\n\nprint("Found ",secret," in ",tries," tries!")`,
    output: `Too low!\nToo low!\nToo high!\nFound 70 in 3 tries!`,
  },
  {
    id: "battle-simulator",
    title: "Battle Simulator",
    description: "A tiny turn-based RPG battle simulation.",
    category: "Mini Projects",
    code: `import random

hero: N = 100
monster: N = 100

turn: N = 1

print("⚔️ Battle Start!")

while hero > 0 && monster > 0 {

    print("Turn", turn)

    heroDamage: N = random.randint(10, 20)
    monster = monster - heroDamage

    print("Hero attacks for", heroDamage)

    if monster <= 0 {
        print("Monster defeated!")
        break
    }

    monsterDamage: N = random.randint(8, 18)
    hero = hero - monsterDamage

    print("Monster attacks for", monsterDamage)

    print("Hero HP:", hero)
    print("Monster HP:", monster)

    print("----------------")

    turn = turn + 1
}

if hero > 0 {
    print("🏆 Hero Wins!")
} else {
    print("💀 Monster Wins!")
}`,
    output: `Hero HP: 46
Monster HP: -9`,
  },
  {
    id: "supermarket-receipt",
    title: "Supermarket Receipt",
    description: "Calculate totals and tax.",
    category: "Mini Projects",
    code: `items: [S] = [
    "Apple",
    "Milk",
    "Bread",
    "Chocolate"
]

prices: [N] = [
    30,
    70,
    45,
    120
]

total: N = 0

print("====== RECEIPT ======")

for i in 0...length(items)-1 {

    print(items[i], "-", prices[i])

    total = total + prices[i]
}

tax: N = total * 0.18

print("----------------------")
print("Subtotal:", total)
print("Tax:", tax)
print("Total:", total + tax)`,
    output: `====== RECEIPT ======
Apple - 30
Milk - 70
Bread - 45
Chocolate - 120
----------------------
Subtotal: 265
Tax: 47.7
Total: 312.7`,
  },
  {
    id: "histogram",
    title: "Text Histogram",
    description: "Render a simple text histogram.",
    category: "Mini Projects",
    code: `scores: [N] = [2,5,4,1]

for value in scores {

    line: S = ""

    i: N = 0

    while i < value {
        line = line + "*"
        i = i + 1
    }

    print(line)
}`,
    output: `**
*****
****
*`,
  },
  {
    id: "progress-bar",
    title: "Progress Bar",
    description: "Draw a text-based progress bar.",
    category: "Mini Projects",
    code: `progress: N = 7

bar: S = ""

for i in 1..10 {

    if i <= progress {
        bar = bar + "#"
    } else {
        bar = bar + "-"
    }
}

print("[", bar, "]")`,
    output: `[ #######--- ]`,
  },
  {
    id: "student-report",
    title: "Student Report Card",
    description: "Calculate a student's average marks.",
    category: "Mini Projects",
    code: `Student: M = {
    name: S,
    maths: N,
    science: N,
    english: N
}

fn average(student: Student) -> N {
    return (
        student.maths +
        student.science +
        student.english
    ) / 3
}

student: Student = {
    name = "Alice",
    maths = 92,
    science = 84,
    english = 88
}

print(student.name)
print(average(student))`,
    output: `Alice
88`,
  },
];
