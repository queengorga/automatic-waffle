// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Bea', score = 100) {
    return 'Name: ' + name + ' Score: ' + score
}

let scoreText = getScoreText()
console.log(scoreText)