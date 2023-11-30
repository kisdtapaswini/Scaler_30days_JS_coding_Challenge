function filterOutOdd(arr){
    return arr.map((val)=>{
        return val*2;
    })

}
console.log(filterOutOdd([1,2,3,4,5,6,7]));