// import { traveler } from "./scripts";
const welcomeTraveler = document.getElementById('welcomeTraveler');
const displayAllTrips = document.querySelector('.trips-container');
const spentThisYear = document.querySelector('.total-expense');


const domUpdates = {
    welcomeUser: (name) => {
        welcomeTraveler.innerText = `Welcome ${name}`
    },

    displayAllTrips: (traveler) => {
        const getTrips = traveler.travelersTrips.map(trip => {
            return (
                `<div class='trip-container'>
                <img class='vacation-pictures' src=${trip.destination.image}/>
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
        spentThisYear.innerText = `${spent}`
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