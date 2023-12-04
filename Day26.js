/**
 * **Challenge 26**
Description:
Write a function calculateTotal that takes an array of numbers, filters out the even numbers, squares the remaining numbers, and then calculates their sum.
Solution Approach:
Combine map, filter, and reduce array methods.
 */

function methodChaining(arr){
    return arr.filter((_) => _ % 2 != 0)
    .map((_)=> _*_)
    .reduce((a, b)=>a+b, 0)
}

console.log(methodChaining([2, 1, 3, 6, 7, 9]));