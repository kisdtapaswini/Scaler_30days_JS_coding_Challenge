function capitalize(str){
    let wordArr = str.split(" ");
    wordArr.forEach((_, idx)=>wordArr[idx] = _.charAt(0).toUpperCase() + wordArr[idx].slice(1));
    return wordArr.join(" ");
}

console.log(capitalize("the quick brown fox"));