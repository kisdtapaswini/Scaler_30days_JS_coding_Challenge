// **Challenge 21**  
// Problem Statement: Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.  
// Description: The function should take an array and an async function, applying the async function to each element in the array in sequence.  
// Solution Approach: Use async/await within a for...of loop.

async function  callAsyncFunInsideLoop(arr){
    arr.forEach(async(each) => {
        const res = await someAsyncFunCall(each);
        console.log('--->', res);
    });
}

function someAsyncFunCall (param){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Resolved " + param);
        }, param);
    })
}

callAsyncFunInsideLoop(['3000','8000','1000','4000']);