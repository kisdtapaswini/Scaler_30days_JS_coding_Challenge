function findFirstNegetive(arr){
    return arr.find((ele)=>{
        return ele < 0;
    })
}

console.log(findFirstNegetive([-1,-2,3,4,5,6,7]));
