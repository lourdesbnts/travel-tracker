import { Trip } from './trips.js'
// import { Destination } from './destinations.js'
//might need to import destination sample data, not sure if to make a class for it or just import straight from dummy data

export class Traveler {
    constructor(travelerData) {
        this.id = travelerData.id;
        this.name = travelerData.name;
        this.travelerType = travelerData.travelerType;
        this.travelersTrips = [];
        this.pastTrips = [];
        this.currentTrips = [];
        this.upcomingTrips = [];
        this.pendingTrips = [];
    }

    findAllTravelerTrips() {

    }
}