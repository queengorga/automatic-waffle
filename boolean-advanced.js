let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Is account locked')
} else {
    console.log('Welcome!')
}

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

