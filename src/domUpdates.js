import { traveler } from "./scripts";
const welcomeTraveler = document.getElementById('welcomeTraveler');
const displayAllTrips = document.querySelector('.trips-container');
const spentThisYear = document.querySelector('.total-cost');
const displayPastTrips = document.querySelector('.past-button');
const displayUpcomingTrips = document.querySelector('.upcoming-button');
const displayPresentTrips = document.querySelector('.present-button');
const displayPendingTrips = document.querySelector('.pending-button');
const tripEstimateButton = document.querySelector('.estimate-cost-btn');
const submitTripButton = document.querySelector('.submit-trip-btn');
const destinationList = document.querySelector('.destination-list');




displayPastTrips.addEventListener('click', () => {
    domUpdates.displayAllTrips(traveler.pastTrips)
});

displayUpcomingTrips.addEventListener('click', () => {
    domUpdates.displayAllTrips(traveler.upcomingTrips)
});

displayPresentTrips.addEventListener('click', () => {
    domUpdates.displayAllTrips(traveler.currentTrips);
});

displayPendingTrips.addEventListener('click', () => {
    domUpdates.displayAllTrips(traveler.pendingTrips);
});

tripEstimateButton.addEventListener('click', () => {
    domUpdates.displayEstimatedCostForTrip()
});

const domUpdates = {
    welcomeUser: (name) => {
        welcomeTraveler.innerText = `Welcome ${name}`
    },

    displayAllTrips: (array) => {
        const getTrips = array.map(trip => {
            return (
                `<div class='trip-container'>
                <img class='vacation-pictures' src=${trip.destination.image}/>
                <p>Destination: ${trip.destination.destination} </p>
                <p>Date: ${trip.date} </p>
                <p>Number of Travelers: ${trip.travelers} </p>
                <p>Duration: ${trip.duration}</p>
                <p>Status: ${trip.status} </p>
                <p>Lodging for Day: $${trip.destination.estimatedLodgingCostPerDay}</p>
                <p>Flight Cost per Person: $${trip.destination.estimatedFlightCostPerPerson}</p>
                </div>`
                )
            })
            displayAllTrips.innerHTML = `${getTrips.join('')}`
        //    console.log(getTrips)
    },

    displaySpentThisYear: (spent) => {
        console.log('SPENT',spent)
        spentThisYear.innerText = `$${spent}`
    },

    displayDestinationsInForm: (allDestinationsData) => {
        const getDestinations = allDestinationsData.map(trip => {
            return trip.destination
        })
        getDestinations.forEach(destination => {
            destinationList.innerHTML += `<option value="${destination}">${destination}</option>`
        })
    },

    displayEstimatedCostForTrip: () => {
        console.log('hi')
    }
}

export default domUpdates;

// date, duration, number of travelers and choose from a list of destinations

// date: "2022/09/16"
// destinationID: 49
// duration: 8
// id: 1
// status: "approved"
// suggestedActivities: []
// travelers: 1
// userID: 44