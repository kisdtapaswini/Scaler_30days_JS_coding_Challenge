function getSum(arr){
    return arr.reduce((s, e)=>{
        return s += e;
    }, 0);
}

console.log(getSum([2,5,7,8,9]));
