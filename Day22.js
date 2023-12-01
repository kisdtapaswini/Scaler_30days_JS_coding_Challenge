/**
 * **Challenge 22**  
Problem Statement: Write a function to deeply compare two objects for equality.  
Description: Given two objects, the function should return true if they are deeply equal and false otherwise.  
Solution Approach: Recursively compare properties of both objects.
 */

function doObjDeepCompare(obj1, obj2){
    if(obj1 == null || obj2 == null || typeof obj1 != "object" || typeof obj2 != "object"){
        return false;
    }   

    let Obj1Keys = Object.keys(obj1);
    let Obj2Keys = Object.keys(obj2);

    if(Obj1Keys.length != Obj2Keys.length){
        return false;
    }

    for(let key of Obj1Keys){
        if(!Obj2Keys.includes(key) && !doObjDeepCompare(obj1[key], obj2[key])){
            return false;
        }
    }

    return true;
}

let inPutObj1 = {
    name1 : "Mili",
    age : 30
}

let inPutObj2 = {
    name1 : "Mili",
    age : 34
}

console.log(doObjDeepCompare(inPutObj1, inPutObj2));

