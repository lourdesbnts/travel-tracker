import './css/styles.css';
import { fetchCalls } from './apiCalls.js'
import './domUpdates.js'

//----------Global Variables----------//
let allTravelersData = [];
let allTripsData = [];
let allDestinationsData = [];


const allFetchCalls = () => {
    const fetchTravelers = fetchCalls('http://localhost:3001/api/v1/travelers');
    const fetchTrips = fetchCalls('http://localhost:3001/api/v1/trips');
    const fetchDestinations = fetchCalls('http://localhost:3001/api/v1/destinations');

    Promise.all([fetchTravelers, fetchTrips, fetchDestinations]).then((data) => {
        allTravelersData = data[0];
    })
}

window.addEventListener('load', allFetchCalls)

