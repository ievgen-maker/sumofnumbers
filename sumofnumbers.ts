// 1. For-loop
function sumFor(arr: number[]): number {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// 2. While-loop
function sumWhile(arr: number[]): number {
  let total = 0;
  let i = 0;
  while (i < arr.length) {
    total += arr[i];
    i++;
  }
  return total;
}

// 3. Recursion
function sumRecursion(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr[0] + sumRecursion(arr.slice(1));
}

// 4. Functional (reduce)
function sumTheFunctionalWay(arr: number[]): number {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

// Test examples
console.log('sumFor:', sumFor([1, 2, 3, 4])); // 10
console.log('sumWhile:', sumWhile([1, 2, 3, 4])); // 10
console.log('sumRecursion:', sumRecursion([1, 2, 3, 4])); // 10
console.log('sumFunctional:', sumTheFunctionalWay([1, 2, 3, 4])); // 10
