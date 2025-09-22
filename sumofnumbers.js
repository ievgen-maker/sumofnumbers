"use strict";
// 1. For-loop
function sumFor(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
// 2. While-loop
function sumWhile(arr) {
    let total = 0;
    let i = 0;
    while (i < arr.length) {
        total += arr[i];
        i++;
    }
    return total;
}
// 3. Recursion
function sumRecursion(arr) {
    if (arr.length === 0)
        return 0;
    return arr[0] + sumRecursion(arr.slice(1));
}
// 4. Functional (reduce)
function sumTheFunctionalWay(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
}
// Test examples
console.log('sumFor:', sumFor([1, 2, 3, 4])); // 10
console.log('sumWhile:', sumWhile([1, 2, 3, 4])); // 10
console.log('sumRecursion:', sumRecursion([1, 2, 3, 4])); // 10
console.log('sumFunctional:', sumTheFunctionalWay([1, 2, 3, 4])); // 10
