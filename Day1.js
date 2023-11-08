function reverseNum(num){
    let reversedNum = 0;
    while(num){
       let digit = num % 10;
       reversedNum = (reversedNum * 10) + digit;
       num = parseInt(num/10);
    }
    return reversedNum;
}
console.log(reverseNum(32243));

