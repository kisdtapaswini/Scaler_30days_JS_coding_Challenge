/**
 * **Challenge 24**  
Description:  
Implement a debounce function that takes a function and a delay as arguments. The returned function should ensure that the original function is not called more than once in the specified delay.  
Solution Approach:  
Use a timer and clear it on each invocation to delay the function execution.
 */

function debounce(mainFun, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);

        timer = setTimeout(() => {
            mainFun(...args);
        }, delay)
    }
}

function saveInput(){
    console.log('Saving data');
}

const processChange = debounce(() => saveInput(), 0);
