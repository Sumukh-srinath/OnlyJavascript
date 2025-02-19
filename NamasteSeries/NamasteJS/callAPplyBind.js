//example for call apply and Bind

console.log("")

//call
let name1 = {
    firstName: 'Rahul',
    lastName: 'Dravid'
}

let name2 = {
    firstName: 'sachin',
    lastName: 'tendulkar'
}

let printFullName = function () {
    console.log(this.firstName + " " + this.lastName)
}
console.log("Using Call")
printFullName.call(name1)
printFullName.call(name2)
console.log("")


//apply
//assume we want to add some params
let printFullNameWithParam = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " from " + city + ", " + state)
}

console.log("Using Apply")
printFullNameWithParam.call(name1, "Bangalore", "Karnataka")
printFullNameWithParam.apply(name2, ["mumbai", "maharastra"])
console.log("")

//bind example
console.log("Using Bind")
let copyofFunction = printFullNameWithParam.bind(name1, "bangalore", "KA")
console.log(copyofFunction)
copyofFunction()
console.log("")
