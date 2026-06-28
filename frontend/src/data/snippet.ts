export const SNIPPETS = [
  `fn greet(name: S) {
  print("Hello", name)
}

names: [S] = ["NOVA", "Varun", "Alice"]

for n in names {
    greet(n)
}`,

  `fn factorial(n: N) -> N {
    if n <= 1 {
        return 1
    }
    return n * factorial(n - 1)
}

print(factorial(5))`,

  `Point: M = {
    x: N,
    y: N
}

p: Point = { 
     x = 10, 
     y = 20 
}

print(p.x, p.y)`,

  `import math
import stats

data: [N] = [2, 4, 9, 5, 7, 9]

print(stats.mean(data))
print(math.sqrt(100))`,
];
