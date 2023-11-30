
function getSubSetWithFixedLength(arr, n, ans, currentIdx){
    if(currentIdx >= arr.length){
        if(ans.length === n){
            finalAns.push([...ans]);
        }
        return;
    }
    ans.push(arr[currentIdx]);
    getSubSetWithFixedLength(arr, n, ans, currentIdx+1);
    ans.pop();
    getSubSetWithFixedLength(arr, n, ans, currentIdx+1);

}

let finalAns = new Array();
let inputArray = [1, 2, 3, 4, 5]
getSubSetWithFixedLength(inputArray, 3, [], 0);
console.log(finalAns);



