function getTraingleArea(s1, s2, s3){
    let s = parseInt((5+6+7)/2);
    return Math.sqrt((s*(s-s1)*(s-s2)*(s-s3)));
}
console.log(getTraingleArea(5, 6, 7));