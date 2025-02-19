let sum = function (a) {
    return function (b) {
        return b !== undefined ? sum(a + b) : a;
    };
};

let sum1 = (a) => (b) => b !== undefined ? sum1(a + b) : a;

console.log(sum(1)(2)(3)(4)()); // 10
console.log(sum1(5)(10)(15)());  // 30
console.log(sum(2)(3)(0)());    // 5 (0 should be allowed)
