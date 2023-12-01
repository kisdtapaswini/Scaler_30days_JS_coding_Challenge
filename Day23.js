function outer(counter){
    return function inner(){
        return counter+1;
    }
}

let a = outer(0);
console.log(a());