function isInRange(arr){
    return (50 <= arr[0] && arr[0] <=90) || (50 <= arr[1] && arr[1] <= 90);
}
console.log(isInRange([51, 90]))