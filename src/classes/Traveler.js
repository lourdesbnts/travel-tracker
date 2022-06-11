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

    findAllTravelerPastTrips(tripData) {
        const today = dayjs().format('YYYY-MM-DD')
        // console.log('TODAYYYYYY', today)
        const convertDates = tripData.filter(trip => trip.userID === this.id)
            convertDates.forEach(date => {
            const convertedDates = dayjs(date.date).format('YYYY-MM-DD');
                if(convertedDates < today) {
                this.pastTrips.push(date);
          }
        //   console.log(convertedDates)
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