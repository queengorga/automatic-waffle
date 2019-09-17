let num = 143.44143

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.round(num))
console.log(Math.round(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// Challenge
// 1-5 - true if correct - false if not correct

let makeGuess = function (guess) {
    let min = 1
    let max = 5 
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min 
    return guess === randomNum
}

console.log(makeGuess(1))