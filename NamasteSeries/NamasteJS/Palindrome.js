let x = 121
//we have to prove whether its palindrome or not
let y = 10

//Base Case
function isPalindrome(inp) {
    return inp < 0 ? false : inp === +inp.toString().split("").reverse().join("")
}
console.log(isPalindrome(x))
console.log(isPalindrome(y))
console.log(isPalindrome(-323))
