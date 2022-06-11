import { expect } from 'chai';
import { Trip } from '../src/classes/Trip.js';
import { tripsSampleData } from '../src/data/trips-sample-data';
import { destinationSampleData } from '../src/data/destination-sample-data';

describe('Trip', () => {
    let trip;

    beforeEach(() => {
        trip = new Trip(tripsSampleData[0], destinationSampleData[10]);
    })

    it('should create a new instance of Trip', () => {
        expect(trip).to.be.an.instanceOf(Trip);
    })

    it('should have a trip ID', () => {
        expect(trip.tripID).to.equal(117);
    })

    it('should have a destination name', () => {
        expect(trip.destination.destination).to.equal('Anchorage, Alaska');
    })

    it('should hold the estimated lodging cost per day', () => {
        expect(trip.destination.estimatedLodgingCostPerDay).to.equal(200);
    })

    it('should hold the estimated lodging cost per person', () => {
        expect(trip.destination.estimatedFlightCostPerPerson).to.equal(100);
    })

    it('should have an image', () => {
        expect(trip.destination.image).to.equal('https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    })

    it('should have an alt tag', () => {
        expect(trip.destination.alt).to.equal('man riding on kayak surrounded by mountains');
    })

    it('should have a destination ID', () => {
        expect(trip.destinationID).to.equal(28);
    })

    it('should have a number of travelers', () => {
        expect(trip.travelers).to.equal(3);
    })

    it('should have a date', () => {
        expect(trip.date).to.equal('2021/01/09');
    })

    it('should have a duration', () => {
        expect(trip.duration).to.equal(15);
    })

    it('should have a status', () => {
        expect(trip.status).to.equal('approved');
    })

    it('should hold a list of suggested activities', () => {
        expect(trip.suggestedActivities).to.deep.equal([]);
    })

    it('should calculate the trip cost', () => {
        expect(trip.calculateTripCost()).to.equal(3630);
    })

});
  

// id: 17,
// destination: "Jaipur, India",
// estimatedLodgingCostPerDay: 30,
// estimatedFlightCostPerPerson: 1200,
// image: "https://images.unsplash.com/photo-1534758607507-754e582adfa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
// alt: "a courtyard with trees and mountain in the distance"
// }