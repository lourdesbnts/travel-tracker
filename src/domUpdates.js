// import { traveler } from "./scripts";
const welcomeTraveler = document.getElementById('welcomeTraveler');
const displayAllTrips = document.querySelector('.trips-container');



const domUpdates = {
    welcomeUser: (name) => {
        welcomeTraveler.innerText = `Welcome ${name}`
    },

    displayAllTrips: (traveler) => {
        // console.log(allTripsData)
        const getTrips = traveler.travelersTrips.map(trip => {
            return (
                `<div class='trip-container'>
                <p>Date: ${trip.date} </p>
                <p>Duration: ${trip.duration}</p>
                <p>Number of Travelers: ${trip.travelers} </p>
                <p>Status: ${trip.status} </p>
                </div>`
                
            )
        })
        // const tripDate = allTripsData.date;
        // const tripDestination = allTripsData[0].destinationID;
        // const tripDuration = allTripsData.duration;
        // const tripId = allTripsData.id;
        // const tripStatus = allTripsData.status;
        // const tripSuggestedActivities = allTripsData.suggestedActivities;
        // const tripTraveler = allTripsData.travelers;
        // const tripUserId = allTripsData.userID;
           console.log(getTrips)
        displayAllTrips.innerHTML = `${getTrips.join('')}`
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