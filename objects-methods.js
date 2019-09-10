let restaurant = {
    name: 'Nomnom',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        console.log(this)
        return true
    }
}

let status = restaurant.checkAvailability(6)

console.log(status)
    