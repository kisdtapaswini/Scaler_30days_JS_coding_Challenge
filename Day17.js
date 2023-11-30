function filterOutOdd(arr){
    return arr.filter((val)=>{
        return val%2  === 0;
    })

}
console.log(filterOutOdd([1,2,3,4,5,6,7]));