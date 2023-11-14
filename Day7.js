function isValid(num1, num2){
    return (num1 === 50 || num2 === 50) || ((num1 + num2) === 50);
}

console.log(isValid(60,10));