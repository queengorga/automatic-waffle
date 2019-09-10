let restaurant = {
    name: 'Nomnom',
    guestCapacity: 75,
    guestCount: 73,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }
}

let status = restaurant.checkAvailability(6)

console.log(status)
    