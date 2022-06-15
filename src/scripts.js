import './css/styles.css';
import { fetchCalls, postTrip } from './apiCalls.js'
import './classes/Traveler.js';
import './classes/Trip.js';
import { Traveler } from './classes/Traveler.js';
import { Trip } from './classes/Trip.js';
import { numberOfTravelers, numberOfDays, dateSelected } from './domUpdates';
import domUpdates from './domUpdates'

const dayjs = require('dayjs');

//----------Global Variables----------//
let traveler;
let allTripsData;
let allDestinationsData;
let travelerID;



const allFetchCalls = () => {
    const fetchTraveler = fetchCalls(`http://localhost:3001/api/v1/travelers/${travelerID}`);
    const fetchTrips = fetchCalls('http://localhost:3001/api/v1/trips');
    const fetchDestinations = fetchCalls('http://localhost:3001/api/v1/destinations');

    Promise.all([fetchTraveler, fetchTrips, fetchDestinations])
    .then((data) => {
        traveler = new Traveler(data[0].id, data[0].name, data[0].travelerType);
        allTripsData = data[1].trips;
        allDestinationsData = data[2].destinations;
        traveler.findAllTravelerTrips(allTripsData, allDestinationsData)
        traveler.findTotalAmountSpentInAYear()
        traveler.findAllPastTrips(allTripsData)
        traveler.findAllUpcomingTrips(allTripsData)
        traveler.findAllCurrentTrips(allTripsData)
        traveler.findAllPendingTrips(allTripsData)
        domUpdates.welcomeUser(traveler.name);
        domUpdates.displayAllTrips(traveler.travelersTrips);
        domUpdates.displaySpentThisYear(traveler.findTotalAmountSpentInAYear());
        domUpdates.displayDestinationsInForm(allDestinationsData);

    })
}

const requestNewTrip = () => {
    const usersNewTrip = {
        id: Date.now(),
        userID: traveler.id,
        destinationID: parseInt(domUpdates.findInputDestination(allDestinationsData).id),
        travelers: parseInt(numberOfTravelers.value), 
        date: dayjs(dateSelected.value).format('YYYY/MM/DD'),
        duration: parseInt(numberOfDays.value),
        status: 'pending',
        suggestedActivities: []
    }
    postTrip(usersNewTrip).then(data => {
        allTripsData.push(data.newTrip)
        traveler.travelersTrips = [];
        traveler.findAllTravelerTrips(allTripsData, allDestinationsData);
        traveler.findTotalAmountSpentInAYear();
        traveler.upcomingTrips = [];
        traveler.findAllUpcomingTrips(allTripsData);
        traveler.currentTrips = [];
        traveler.findAllCurrentTrips(allTripsData);
        traveler.pendingTrips = [];
        traveler.findAllPendingTrips(allTripsData);
        domUpdates.displayAllTrips(traveler.travelersTrips);
    })
}

const letsGoButton = document.getElementById('logInBtn');
const logInForm = document.getElementById('logInForm');
const logInInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const userDashboard = document.getElementById('userDashboard');
const errorLogin = document.querySelector('.error');

const checkLogin = () => {
    event.preventDefault()
    let username = logInInput.value;
    let password = passwordInput.value;
    let splitUsername = username.split(/(\d+)/);

    if(password === 'travel' && splitUsername[0] === 'traveler' && splitUsername[1] > 0 && splitUsername[1] < 51) {
        logInForm.classList.add('hidden');
        userDashboard.classList.remove('hidden');
        travelerID = splitUsername[1];
        allFetchCalls();
    } else {
       errorLogin.innerHTML = `Username or password is incorrect.`
    }
}

letsGoButton.addEventListener('click', checkLogin);

window.addEventListener('load', allFetchCalls)
export { traveler, requestNewTrip, allTripsData, allDestinationsData}