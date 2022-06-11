export class Trip {
    constructor(tripData, destinationData) {
        this.tripID = tripData.id;
        this.userID = tripData.userID;
        this.destinationID = tripData.destinationID;
        this.travelers = tripData.travelers;
        this.date = tripData.date;
        this.duration = tripData.duration;
        this.status = tripData.status;
        this.suggestedActivities = [];
        this.destination = destinationData;
        // console.log('>>>>>>>>>', this.destination)
        // console.log('THIS>USERID', tripData)
    }

    calculateTripCost() {
        const costPerDay =  this.duration * this.destination.estimatedLodgingCostPerDay
        const costPerTraveler = this.travelers * this.destination.estimatedFlightCostPerPerson
        return Math.round((costPerDay + costPerTraveler) * 1.1)
    }
}

 


//this.destination.estimatedLodgingCostPerDay

//trying to calculate each trip cost 
//x costPerDaY with the duration
//