import { Trip } from "./Trip";
const dayjs = require('dayjs')

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
                const upcomingDate = dayjs(travelerDate.date).format('YYYY-MM-DD');
                    if(upcomingDate > todaysDate) {
                        this.upcomingTrips.push(travelerDate);
                    }
            })
    }

    findAllCurrentTrips(tripData) {
        const todaysDate = dayjs().format('YYYY-MM-DD');
        const travelersPresentTrips = tripData.filter(trip => trip.userID === this.id);
            travelersPresentTrips.forEach(travelDate => {
                const presentDate = dayjs(travelDate.date).format('YYYY-MM-DD');
                    if(presentDate === todaysDate) {
                        this.currentTrips.push(travelDate);
                    }
            })
    }

    findTotalAmountSpentInAYear() {

    }
}
   