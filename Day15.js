function stringChop(str, size = 0){
    if(!size){
        return str;
    }
    return str.match(new RegExp('.{1,' + size + '}', 'g'));
}

console.log(stringChop("scaler", 4));