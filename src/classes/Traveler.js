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
        const thisYear = dayjs().format('YYYY')
        const thisYearsTrips = this.travelersTrips.filter(trip => trip.date.includes(thisYear))
        let totalCost = 0;
        thisYearsTrips.forEach(trip => {
            totalCost += trip.calculateTripCost();
        })
       return totalCost;
        // console.log(thisYearsTrips)
               
        // console.log(travelersTrips)
        //wait should i just invoke calculateTripCost somehow to do all the math after i filter the users
        //get travelersTrips.date and check if it includes thisYear
        //then somehow use my calculateTripCost to calculate all of the trips that are === 2022
        //but wait I def need to match destinationid to id in destinations so i can access the keys I need from there to do the math in the first place
        
    }
}












    // findTotalAmountSpentInAYear(tripData) {
    //     const newYear = this.findFirst();
    //     const lastOfYear = this.findLast()
    //     const filterUsers = tripData
    //     .filter(trip => trip.userID === this.id)
    //     .filter(trip => trip.date > newYear)
    //     // .filter(trip => trip.date < lastOfYear)
    //     console.log(filterUsers)
    // }

    // findFirst() {
    //     let first = [];
    //     const todaysDate = dayjs().format('YYYY-MM-DD').split('-')[0]
    //     first.push(todaysDate)
    //     first.push('01')
    //     first.push('01')
    //     return first.join('-');
    // }

    // findLast() {
    //     let last = [];
    //     const todaysDate = dayjs().format('YYYY-MM-DD').split('-')[0]
    //     last.push(todaysDate)
    //     last.push('12')
    //     last.push('31')
    //     return last.join('-');
    // }
   