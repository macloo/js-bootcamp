// methods: functions as property values of objects -
// an object property whose value is a function
// the this keyword: allows us to access the object's properties inside a method
// don't forget the comma after a method!

let restaurant = {
    name: 'The Foobar',
    guestCapacity: 200,
    guestCount: 175,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(partySize) {
        this.guestCount += partySize;
    },
    removeParty: function(partySize) {
        this.guestCount -= partySize;
    }
}
// how to call object methods
restaurant.seatParty(22);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(6);
console.log(restaurant.checkAvailability(4));
