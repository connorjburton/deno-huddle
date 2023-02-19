function add(a: number, b: number): number {
  debugger;
  return a + b;
}

// change 1 arg to a string and run `deno compile`
const result = add(10.99, 20.42);
const fixed = result.toFixed(2);

console.log(fixed);
