import { Trip } from "./Trip";
const dayjs = require('dayjs')

export class Traveler {
    constructor(id, name, travelerType) {
        this.id = id;
        this.name = name;
        this.travelerType = travelerType;
        this.travelersTrips = [];
        this.pastTrips = [];
        this.currentTrips = [];
        this.upcomingTrips = [];
        this.pendingTrips = [];
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

    findAllPastTrips() {
        const today = dayjs().format('YYYY-MM-DD');
        const travelersPastTrips = this.travelersTrips.filter(trip => trip.userID === this.id)
            travelersPastTrips.forEach(travelerDate => {
                const convertedDates = dayjs(travelerDate.date).format('YYYY-MM-DD');
                    if(convertedDates < today) {
                     this.pastTrips.push(travelerDate);
            }
        })
    }

    findAllPendingTrips() {
        const travelersPendingTrips = this.travelersTrips.filter(trip => trip.userID === this.id);
            travelersPendingTrips.forEach((travelerStatus) => {
            if(travelerStatus.status === 'pending') {
                this.pendingTrips.push(travelerStatus);
            }
        })
    }

    findAllUpcomingTrips() {
        const todaysDate = dayjs().format('YYYY-MM-DD');
        const travelersUpcomingTrips = this.travelersTrips.filter(trip => trip.userID === this.id);
            travelersUpcomingTrips.forEach(travelerDate => {
                const upcomingDate = dayjs(travelerDate.date).format('YYYY-MM-DD');
                    if(upcomingDate > todaysDate) {
                        this.upcomingTrips.push(travelerDate);
                    }
            })
    }

    findAllCurrentTrips() {
        const todaysDate = dayjs().format('YYYY-MM-DD');
        const travelersPresentTrips = this.travelersTrips.filter(trip => trip.userID === this.id);
            travelersPresentTrips.forEach(travelDate => {
                const presentDate = dayjs(travelDate.date).format('YYYY-MM-DD');
                    if(presentDate === todaysDate) {
                        this.currentTrips.push(travelDate);
                    }
            })
    }

    findTotalAmountSpentInAYear() {
        const thisYear = dayjs().format('YYYY')
        const thisYearsTrips = this.travelersTrips.filter(trip => trip.date.includes(thisYear))
        let totalCost = 0;
        thisYearsTrips.forEach(trip => {
            totalCost += trip.calculateTripCost();
        })
       return totalCost;
    }
}