let restaurant = {
    name: 'Nomnom',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        return true
    }
}

let status = restaurant.checkAvailability(6)

console.log(status)
