// This is a constructor. 
// A constructor initalizes a new object
function Booking(name, flightClass, luggage) {
    this.name = name;
    this.flightClass = flightClass;
    this.luggage = luggage;

    let customerCareNumber = 256777550894;

    let customerCare = function(){
        // from the inside, we can change this, without the user knowing
        let callCenter = customerCareNumber
        console.log('Call us at: '+callCenter)
    }

    this.tourist = function () {
        console.log('Name : ' +this.name+ ' | flightClass : ' +this.flightClass+' | luggage: ' +this.luggage);
        // we make this function private by calling it inside the tourist function
        // it's a private function
        customerCare();
    }
}

// instatiate a new object
let booking1 = new Booking('Saint Laurent', 'Business', 30);
// users only can this function, but they don't know what's happening on the inside.
booking1.tourist()
// here anyone can access this function, which is not supposed to the users
// calling it from here, anyone can change it cc is not recommended
// booking1.customerCareNumber = 25677709876