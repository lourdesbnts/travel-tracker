import './css/styles.css';
import { fetchCalls } from './apiCalls.js'
import domUpdates from './domUpdates'
import './classes/Traveler.js';
import './classes/Trip.js';
import { Traveler } from './classes/Traveler.js';
import { Trip } from './classes/Trip.js';

//----------Global Variables----------//
let traveler;
let allTripsData;
let allDestinationsData;
let travelerID = 28;



const allFetchCalls = () => {
    const fetchTraveler = fetchCalls(`http://localhost:3001/api/v1/travelers/${travelerID}`);
    console.log('this is my traveler',fetchTraveler)
    const fetchTrips = fetchCalls('http://localhost:3001/api/v1/trips');
    console.log('this is my fetch trips',fetchTrips)
    const fetchDestinations = fetchCalls('http://localhost:3001/api/v1/destinations');

    Promise.all([fetchTraveler, fetchTrips, fetchDestinations])
    .then((data) => {
        traveler = new Traveler(data[0].id, data[0].name, data[0].travelerType);
        allTripsData = data[1].trips;
        allDestinationsData = data[2].destinations;
        console.log(allDestinationsData)
        console.log(allTripsData)
        traveler.findAllTravelerTrips(allTripsData, allDestinationsData)
        traveler.findTotalAmountSpentInAYear()
        traveler.findAllPastTrips(allTripsData)
        traveler.findAllUpcomingTrips(allTripsData)
        traveler.findAllCurrentTrips(allTripsData)
        traveler.findAllPendingTrips(allTripsData)
        console.log(traveler.travelersTrips) //all past, present, future stuff will be from here 
        domUpdates.welcomeUser(traveler.name);
        domUpdates.displayAllTrips(traveler.travelersTrips);
        domUpdates.displaySpentThisYear(traveler.findTotalAmountSpentInAYear());
        

    })
    // .catch(error => console.log(error))

}
// filterTrips(allTripsData, 5);


window.addEventListener('load', allFetchCalls)

export { traveler }