
import { traveler } from "./scripts";
import { requestNewTrip, allTripsData, allDestinationsData } from "./scripts";
import { Trip } from "./classes/Trip";
=======
import { traveler, requestNewTrip } from "./scripts";


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
const numberOfTravelers = document.getElementById('requestedNumTravelers');
const numberOfDays = document.getElementById('requestedDuration');
const dateSelected = document.getElementById('requestedDate');
const estimatedCost = document.querySelector('.estimated-cost');



// const checkLogin = () => {
//     event.preventDefault()
//     let username = logInInput.value;
//     let password = passwordInput.value;
//     let splitUsername = username.split(/(\d+)/);

//     if(password === 'travel' && splitUsername[0] === 'traveler' && splitUsername[1] > 0 && splitUsername[1] < 51) {
//         console.log(logInForm)
//         logInForm.classList.add('hidden');
//         userDashboard.classList.remove('hidden');

//     } else {
//         alert(`Invalid username and/or password`);
//     }
// }

const domUpdates = {
    welcomeUser: (name) => {
        welcomeTraveler.innerText = `Welcome ${name}`
    },

    displayAllTrips: (array) => {
        displayAllTrips.innerHTML = '';
        console.log('array line 26',array)
        const getTrips = array.map(trip => {
            return (
                `<div class='trip-container'>
                <img class='vacation-pictures' src=${trip.destination.image} alt=${trip.destination.alt}/>
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
        let trip = new Trip(allTripsData, allDestinationsData);
        let numOfDays = numberOfDays.value;
        let numOfTravelers = numberOfTravelers.value;
        let destinationOptions = destinationList.value;
        let match = trip.destination.find((dest) => {
            return dest.destination === destinationOptions
        });
        trip.destination = match;
        trip.duration = numOfDays;
        trip.travelers = numOfTravelers;
        let estimatedCostRequest = trip.calculateTripCost();
        estimatedCost.innerHTML = `$${estimatedCostRequest}`
    },

    findInputDestination: (allDestinationsData) => {
        const inputDestinationDetails = allDestinationsData.find(destination => {
            // console.log(allDestinationsData)
          return destination.destination === destinationList.value;
        });
        return inputDestinationDetails;
      }
}
    

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

submitTripButton.addEventListener('click', (event) => {
    event.preventDefault()
    requestNewTrip();
});


export { numberOfTravelers, numberOfDays, dateSelected }
export default domUpdates;