// This is a constructor. 
// A constructor initalizes a new object
function Booking(name, flightClass, luggage) {
    this.name = name;
    this.flightClass = flightClass;
    this.luggage = luggage;
    this.customerCareNumber = 256777550894;

    this.callCenter = function(){
        let callNumber = this.customerCareNumber;
        console.log('You can call us at : ' +callNumber);
    }

    this.customerCare = function(){
        console.log('Call us at: '+customerCareNumber)
    }
}

// instatiate a new object
let booking1 = new Booking('Saint Laurent', 'Business', 30);
// users only can also access this function, but they don't know what's happening on the inside.
booking1.callCenter();
