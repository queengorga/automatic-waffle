let temp = 65

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out.')
}

else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Do what you want')
}

//Challenge Area

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan.')
}

else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer vegan and non-vegan menu')
} else {
    console.log('Offer anything on the menu')
}
