// Undefined for variable

let name
    
name = 'Bea'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for function arguments
// Undefined as funciton return default value

let square = function (num) {
    console.log(num)
}

let result = square()

console.log(result)

// Null as assigned value 

let age = 27 

age = null 

console.log(age)