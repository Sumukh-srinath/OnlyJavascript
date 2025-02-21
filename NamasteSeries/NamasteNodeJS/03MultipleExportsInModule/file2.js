function sum(a, b) {
    console.log(a + b);
}
let x = "I am comming from File 2";

//this is old way of doing it now we have a short hand
module.exports = {
    location: x,
    sumOf2Nums: sum,
};

//this is short way of doing it
/*
module.exports={
x,sum
}
*/
