function getFirstNonRepeating(str){
    let map =  new Map();
    for(let idx in str){
        let val = str[idx];
            if(map.has(val)){
                map.delete(val);
            }else{
                map.set(val, idx);
            }
    }

    let minIdx = Number.MAX_SAFE_INTEGER;
    let ans = '';
    for (let [key, value] of  map.entries()) {
        if(parseInt(value) < minIdx){
            minIdx = parseInt(value);
            ans = key;
        }
    }
    return ans;
}
console.log(getFirstNonRepeating("abacddbec"));