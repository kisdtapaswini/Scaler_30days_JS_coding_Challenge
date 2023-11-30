// Create a memoize function in js
const memoize = (fun) => {
    const cache = {};
    return (...args) =>{
        console.log(cache);
        let strKey = args.join(',');
        if(!cache[strKey]){
            console.log('adding to cache!');
            cache[strKey] = fun.apply(this, args);
        }
        console.log('fetching from cache!');
         return cache[strKey];
    }
}

const add = (...args) => {
    return args.reduce((s, e) => {
        return s += e;
    }, 0)
}

const memoizedAddFunction = memoize(add);
console.log(memoizedAddFunction(1, 2, 3));
console.log(memoizedAddFunction(1, 2, 3));

