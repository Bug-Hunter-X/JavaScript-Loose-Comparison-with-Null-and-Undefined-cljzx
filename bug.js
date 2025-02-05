function foo(a, b) {
  if (a == null || b == null) {
    return 0; // Handle null or undefined values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(undefined, 2)); // Output: 0