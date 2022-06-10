export class Trip {
    constructor(tripData, destinationData) {
        this.id = tripData.id;
        this.userID = tripData.userID;
        this.destination = destinationData;
        this.destinationID = tripData.destinationID;
        this.travelers = tripData.travelers;
        this.date = tripData.date;
        this.duration = tripData.duration;
        this.status = tripData.status;
        this.suggestedActivities = [];
        // console.log('>>>>>>>>>', this.destination)
    }

    calculateTripCost(id, destinationID) {
        const totalCostOfTrip = this.destination.estimatedLodgingCostPerDay * (this.duration)
        console.log(totalCostOfTrip)
        console.log('>>>>>>>>>', this.destination.estimatedLodgingCostPerDay)
    }
}

//this.destination.estimatedLodgingCostPerDay