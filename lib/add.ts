export function add(...args: number[]) {
  return args.reduce((a, b) => a + b);
}

if (import.meta.main) {
  console.log(add(1, 2, 3));
}
