import type { StdLibModule } from "@/types/types";

export const stdlibModules: StdLibModule[] = [
  {
    name: "math",
    description:
      "Math functions for numerical computing.",
    functions: [
      {
        name: "PI",
        signature: "math.PI: N",
        description: "The mathematical constant π.",
        example: `pi: N = math.PI
print(pi)`,
        returns: "N",
      },
      {
        name: "abs",
        signature: "math.abs(value: N) -> N",
        description: "Returns the absolute value of a number.",
        example: `result: N = math.abs(-42)
print(result)`,
        returns: "N",
      },
      {
        name: "min",
        signature: "math.min(a: N, b: N) -> N",
        description: "Returns the smaller of two numbers.",
        example: `result: N = math.min(5, 2)
print(result)`,
        returns: "N",
      },
      {
        name: "max",
        signature: "math.max(a: N, b: N) -> N",
        description: "Returns the larger of two numbers.",
        example: `result: N = math.max(5, 2)
print(result)`,
        returns: "N",
      },
      {
        name: "pow",
        signature: "math.pow(base: N, exponent: N) -> N",
        description: "Raises a number to a power.",
        example: `result: N = math.pow(2, 10)
print(result)`,
        returns: "N",
      },
      {
        name: "sqrt",
        signature: "math.sqrt(value: N) -> N",
        description: "Returns the square root of a number.",
        example: `result: N = math.sqrt(144)
print(result)`,
        returns: "N",
      },
      {
        name: "round",
        signature: "math.round(value: N) -> N",
        description: "Rounds a number to the nearest integer.",
        example: `result: N = math.round(3.6)
print(result)`,
        returns: "N",
      },
      {
        name: "floor",
        signature: "math.floor(value: N) -> N",
        description: "Rounds a number down.",
        example: `result: N = math.floor(3.9)
print(result)`,
        returns: "N",
      },
      {
        name: "ceil",
        signature: "math.ceil(value: N) -> N",
        description: "Rounds a number up.",
        example: `result: N = math.ceil(3.1)
print(result)`,
        returns: "N",
      },
    ],
  },

  {
    name: "array",
    description: "Utilities for working with arrays.",
    functions: [
      {
        name: "sort",
        signature: "array.sort(values: [U]) -> [U]",
        description: "Returns a sorted copy of the array.",
        example: `sorted: [U] = array.sort([3, 1, 2])
print(sorted)`,
        returns: "[U]",
      },
      {
        name: "reverse",
        signature: "array.reverse(values: [U]) -> [U]",
        description: "Returns a reversed copy of the array.",
        example: `reversed: [U] = array.reverse([1, 2, 3])
print(reversed)`,
        returns: "[U]",
      },
      {
        name: "unique",
        signature: "array.unique(values: [U]) -> [U]",
        description: "Removes duplicate elements.",
        example: `uniqueValues: [U] = array.unique([1, 2, 2, 3])
print(uniqueValues)`,
        returns: "[U]",
      },
      {
        name: "count",
        signature: "array.count(values: [U], value: U) -> N",
        description: "Counts how many times a value appears.",
        example: `count: N = array.count([1, 2, 2], 2)
print(count)`,
        returns: "N",
      },
      {
        name: "indexOf",
        signature: "array.indexOf(values: [U], value: U) -> N",
        description: "Returns the index of the first occurrence of a value.",
        example: `index: N = array.indexOf([1, 2, 3], 2)
print(index)`,
        returns: "N",
      },
    ],
  },

  {
    name: "random",
    description: "Random number generation utilities.",
    functions: [
      {
        name: "random",
        signature: "random.random() -> N",
        description: "Returns a random number between 0 and 1.",
        example: `value: N = random.random()
print(value)`,
        returns: "N",
      },
      {
        name: "randint",
        signature: "random.randint(min: N, max: N) -> N",
        description: "Returns a random integer between min and max.",
        example: `value: N = random.randint(1, 100)
print(value)`,
        returns: "N",
      },
      {
        name: "choice",
        signature: "random.choice(values: [U]) -> U",
        description: "Returns a random element from an array.",
        example: `value: U = random.choice(["a", "b", "c"])
print(value)`,
        returns: "U",
      },
      {
        name: "shuffle",
        signature: "random.shuffle(values: [U]) -> [U]",
        description: "Returns a shuffled copy of the array.",
        example: `shuffled: [U] = random.shuffle([1, 2, 3])
print(shuffled)`,
        returns: "[U]",
      },
      {
        name: "seed",
        signature: "random.seed(value: N)",
        description: "Seeds the random number generator.",
        example: `random.seed(42)
print("Seed initialized")`,
        returns: "void",
      },
    ],
  },

  {
    name: "stats",
    description: "Statistical functions for numeric arrays.",
    functions: [
      {
        name: "mean",
        signature: "stats.mean(values: [N]) -> N",
        description: "Returns the arithmetic mean.",
        example: `mean: N = stats.mean([1, 2, 3])
print(mean)`,
        returns: "N",
      },
      {
        name: "median",
        signature: "stats.median(values: [N]) -> N",
        description: "Returns the median value.",
        example: `median: N = stats.median([1, 2, 3])
print(median)`,
        returns: "N",
      },
      {
        name: "mode",
        signature: "stats.mode(values: [N]) -> N",
        description: "Returns the most frequent value.",
        example: `mode: N = stats.mode([1, 2, 2, 3])
print(mode)`,
        returns: "N",
      },
      {
        name: "variance",
        signature: "stats.variance(values: [N]) -> N",
        description: "Returns the variance.",
        example: `variance: N = stats.variance([2, 4, 4, 4, 5, 5, 7, 9])
print(variance)`,
        returns: "N",
      },
      {
        name: "stddev",
        signature: "stats.stddev(values: [N]) -> N",
        description: "Returns the standard deviation.",
        example: `stddev: N = stats.stddev([2, 4, 4, 4, 5, 5, 7, 9])
print(stddev)`,
        returns: "N",
      },
    ],
  },

  {
    name: "time",
    description: "Time and date utilities.",
    functions: [
      {
        name: "now",
        signature: "time.now() -> S",
        description:
          "Returns the current local date and time as a formatted string.",
        example: `current: S = time.now()
print(current)`,
        returns: "S",
      },
      {
        name: "unix",
        signature: "time.unix() -> N",
        description: "Returns the current Unix timestamp.",
        example: `timestamp: N = time.unix()
print(timestamp)`,
        returns: "N",
      },
      {
        name: "timestamp",
        signature: "time.timestamp() -> N",
        description: "Returns the current timestamp.",
        example: `timestamp: N = time.timestamp()
print(timestamp)`,
        returns: "N",
      },
      {
        name: "sleep",
        signature: "time.sleep(seconds: N)",
        description: "Pauses execution for the specified number of seconds.",
        example: `time.sleep(1)
print("Done")`,
        returns: "void",
      },
    ],
  },
];
