// adding 50 to different numbers 
// were doing a big No-No by repeating ourselves!!! BAD
let problem1 = 14 + 50
let problem2 = 24 + 50
let problem3 = 34 + 50
let problem4 = 44 + 50

// create a functions that takes in the number to be added to as a parameter 
//  Define the behavior
function addTo50(number){
    return number + 50
}
// calling the fuction and placing the the result inside a variable. 
let problem5 = addTo50(23)
let problem6 = addTo50(100)
let problem7 = addTo50(17)
let problem8 = addTo50(55)

//  Math Practice 
//  1a Create a function that adds 23 to the parameter you give the function

function adding(number) {
    return number + 23;
}
let one = adding(23)
console.log(one);

//  1b Create a function that subtracts 77 from parameter you give the function

function subtracting(number) {
    return number - 77
}
let two = subtracting(77)
console.log(two);

// 1c Create a function that multiplies the parameter by 2

function multiple(number) {
    return number * 2
}
let three = multiple(2)
console.log(three);

// 1d Create a function that divides parameters by 3.

function divides(number) {
    return number / 3
}
let four = divides(3)
console.log(four);

//  1e Create a function that  that takes in your name and returns a String below
// “<your name> i love doing math problems”

function name(myName, subject) {
    return `"my name is ${myName} and I love doing ${subject}."`
}
let Z = name ("Zin", "math")
console.log(Z);

// let userInput = prompt ("enter number");
// console.log(multiple(userInput))
// 2a Create a function that multiplies 2 parameters together and returns the result

function multiTwo(five, ten) {
    return 5 * 10
}
let twoA = 5 * 10
console.log(twoA);

// 2b Create a function that divides 2 parameters  and returns the result

function divideTwo(ten, five) {
    return 10 / 5
}
let twoB = 10 / 5
console.log(twoB);

// 2c Create a function that subtracts 2 parameters  from each other and returns the result

function subTracts(ten, one){
    return 10 - 1
}
let twoC = 10 - 1
console.log(twoC);

// 2d Create a function that adds 2 parameters together and returns the result

function addTwo(one, five){
    return 1 + 5
}
let twoD = 1 + 5
console.log(twoD);

// 2e Create a function that  that takes in your name and your favorite math topic and returns a String below
// “<math topic> is <your name> favorite topic in math!”

function topic(subject, myName){
    return `"${subject} is ${myName} favortie topic in math!" `
}

let twoE = topic ("Algebra", "Z")
console.log(twoE);













