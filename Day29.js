/**
 * 
**Challenge 29**  
Description:  
Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise resolves or reject if none resolve within the given timeout.  
Solution Approach:  
Use Promise.race and a timeout promise.
 */
function raceWithTimeout(promises, timeout){
    const timeoutPromise = new Promise((_, reject )=> {
        setTimeout(() => {
            reject(new Error("Timeout exceeded"));
        }, timeout )
    })
    return Promise.race([...promises, timeoutPromise])
}

const PromiseOne =  new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, 'one');
});

const PromiseTwo = new Promise((resolve, reject)=>{
    setTimeout(resolve, 200, 'two');
});

const PromiseThree = new Promise((resolve, reject)=>{
    setTimeout(resolve, 300, 'three');
});

const allPromises = [PromiseOne, PromiseTwo, PromiseThree];

raceWithTimeout(allPromises, 1000)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));