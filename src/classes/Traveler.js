// import { Trip } from './Trip'

import { Trip } from "./Trip";

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
        // console.log(this.id)
    }

    findAllTravelerTrips(tripData, destinationData) {
        let allTrips = tripData.filter(trip => trip.userID === this.id)
        destinationData.forEach(destination => {
            allTrips.forEach(trip => {
                if (trip.destinationID === destination.id) {
                    this.travelersTrips.push(new Trip(trip, destination));
                }
            })
        })
    }

    findAllPendingTrips(tripData) {
        // let allPending = tripData.filter(trip => trip.status === 'pending')
        console.log(person)
    }

    // findAllTravelerPastTrips(tripData) {
        // console.log(tripData)
        // let pastTrips = tripData.map(trip => trip.date)
        //     pastTrips.forEach(date => {
        //         new Date(date).getTime()
        //         console.log(pastTrips)
        //     })
    }
    
    //need to find pending trips for user 
    //also find all of the past trips 