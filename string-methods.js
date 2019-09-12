let name = '  Bea Arwen '

// Length property
console.log(name.length)

// Convert to uppercase 
console.log(name.toUpperCase())

// Convert to lowercase
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password14344'
console.log(password.includes('password'))

// Trim 
console.log(name.trim())

// Challenge area

// isValidPassword
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')      
}

console.log(isValidPassword('asdf'))
console.log(isValidPassword('asdg1323@@#$'))
console.log(isValidPassword('asdfasfdpasswordasdfs'))