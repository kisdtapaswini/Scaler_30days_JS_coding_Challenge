function getFileExt(fileName){
    let n = fileName.length-1;
    let ext = '';
    let i = n;
    while(fileName[i] != '.'){
        ext += fileName[i];
        i--;
    }
    return ext.split("").reverse().join("");

}
console.log(getFileExt("abc.txt"));
console.log(getFileExt("abc.pdf"));

