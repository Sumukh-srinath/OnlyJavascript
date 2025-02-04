//we keep a base function to do something and curry over it keeping same reference

//can be achieved in 2 ways, Bind and Closures


//bind way of achieving curry
let multiply = function (x, y) {
    console.log(x * y)
}
//multiplyByTwo
let multiplyByTwo = multiply.bind(this, 2)

//multiplyByThree
let multiplyByThree = multiply.bind(this, 3)

multiply(5, 6)
multiplyByTwo(4)
multiplyByThree(7)


//Closure way of doing things

let multiplyByClosures = function (x) {
    return function (y) {
        console.log(x * y)
    }
}

let multiplyNum = multiplyByClosures(7)
multiplyNum(4)
