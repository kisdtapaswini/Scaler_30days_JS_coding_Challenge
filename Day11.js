function getAllJSObjectKeys(obj){
    let keyArr = (Object.keys(obj));
    keyArr.forEach(element => {
        console.log(element)
    });

}
let student = {
    id: 1,
    name:"Mili",
    age:35,
    company:"TCS"
}
getAllJSObjectKeys(student);