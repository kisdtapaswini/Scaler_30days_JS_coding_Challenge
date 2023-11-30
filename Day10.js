function doBubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 1; j < arr.length; j++){
            if(arr[j-1] < arr[j]){
                swap(arr, j-1, j);
                count++;
            }
        }
        if(count === 0){
            return arr;
        }
}
}
function swap(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;

}
console.log(doBubbleSort([634, 467, 38, 120, 522, 656]));