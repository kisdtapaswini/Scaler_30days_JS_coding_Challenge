function allPositive(arr){
    return arr.every((val)=>{
        return val>0;
    })

}
//console.log(allPositive([1,2,3,4,5,6,7]));

console.log(allPositive([-1,-2]));