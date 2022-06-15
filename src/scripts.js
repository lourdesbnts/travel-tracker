import './css/styles.css';
import { fetchCalls, postTrip } from './apiCalls.js'
import './classes/Traveler.js';
import './classes/Trip.js';
import { Traveler } from './classes/Traveler.js';
import { Trip } from './classes/Trip.js';
import { numberOfTravelers, numberOfDays, dateSelected } from './domUpdates';

const dayjs = require('dayjs');

//----------Global Variables----------//
let traveler;
let allTripsData;
let allDestinationsData;
let travelerID;


import domUpdates from './domUpdates'

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
        domUpdates.welcomeUser(traveler.name);
        domUpdates.displayAllTrips(traveler.travelersTrips);
        domUpdates.displaySpentThisYear(traveler.findTotalAmountSpentInAYear());
        domUpdates.displayDestinationsInForm(allDestinationsData);

    })
}

const formError = document.querySelector('.error2');

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
        traveler.findAllTravelerTrips(allTripsData, allDestinationsData)
        traveler.findTotalAmountSpentInAYear()
        // traveler.findAllPastTrips(allTripsData)
        traveler.upcomingTrips = [];
        traveler.findAllUpcomingTrips(allTripsData)
        // traveler.findAllCurrentTrips(allTripsData)
        traveler.pendingTrips = [];
        traveler.findAllPendingTrips(allTripsData)
        domUpdates.displayAllTrips(traveler.travelersTrips);
    }).catch(error => formError.innerText = `Please fill out all forms.`)
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

// window.addEventListener('load', allFetchCalls)
export { traveler, requestNewTrip}

// {id: <number>, userID: <number>, destinationID: <number>, travelers: <number>, date: <string 'YYYY/MM/DD'>, duration: <number>, status: <string 'approved' or 'pending'>, suggestedActivities: <array of strings>}