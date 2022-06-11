// import { Trip } from './Trip'

import { Trip } from "./Trip";
const dayjs = require('dayjs')
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

    findAllPastTrips(tripData) {
        const today = dayjs().format('YYYY-MM-DD');
        const travelersPastTrips = tripData.filter(trip => trip.userID === this.id)
            travelersPastTrips.forEach(travelerDate => {
                const convertedDates = dayjs(travelerDate.date).format('YYYY-MM-DD');
                    if(convertedDates < today) {
                     this.pastTrips.push(travelerDate);
          }
        })
    }

    findAllPendingTrips(tripData) {
        const travelersPendingTrips = tripData.filter(trip => trip.userID === this.id);
            travelersPendingTrips.forEach((travelerStatus) => {
            if(travelerStatus.status === 'pending') {
                this.pendingTrips.push(travelerStatus);
            }
        })
    }

    findAllUpcomingTrips(tripData) {
        const todaysDate = dayjs().format('YYYY-MM-DD');
        const travelersUpcomingTrips = tripData.filter(trip => trip.userID === this.id);
            travelersUpcomingTrips.forEach(travelerDate => {
                const tripDate = dayjs(travelerDate.date).format('YYYY-MM-DD');
                    if(tripDate > todaysDate) {
                        this.upcomingTrips.push(travelerDate);
                    }
            })
    }

    
}
    
    //need to find pending trips for user 
    //also find all of the past trips 

        // findAllPendingTrips(tripData) {
    //     // let allPending = tripData.filter(trip => trip.status === 'pending')
    //     console.log(person)
    // }

    // let converted = date.date.split('/').join('-');
    // console.log(converted)