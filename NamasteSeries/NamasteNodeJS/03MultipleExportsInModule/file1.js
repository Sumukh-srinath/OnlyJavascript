console.log("I am printing x and sum from file 1 now")

//we can call withous .js also
const { location, sumOf2Nums } = require('./file2')
console.log(location)
sumOf2Nums(45, 33)