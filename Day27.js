/**
 * **Challenge 27**  
Description:  
Write a generator function range that takes two arguments, start and end, and yields all the numbers in that range.  
Solution Approach:  
Use the function\* syntax for generator functions and the yield keyword.
 */

function* range(start, end){
    let i = start;
    while(i <= end){
        yield i;
        i++;
    }   
}

for(let num of range(1, 10)){
    console.log(num);
}