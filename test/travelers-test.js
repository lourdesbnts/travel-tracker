import { expect } from 'chai';
import { Traveler } from '../src/classes/Traveler.js';
import { travelerSampleData } from '../src/data/traveler-sample-data';
import { Trip } from '../src/classes/Trip.js';
import { tripsSampleData } from '../src/data/trips-sample-data';
import { destinationSampleData } from '../src/data/destination-sample-data.js'
// const expect = chai.expect;

// test/trips-sample-data.js
// src/data/destination-sample-data.js

describe('Traveler', () => {
    let traveler1;
    let traveler2;
    let tripData;
    let trip1, trip2, trip3;
    let destinationData;
    beforeEach(() => {
        traveler1 = new Traveler(travelerSampleData[4]);
        traveler2 = new Traveler(travelerSampleData[1]);
        tripData = tripsSampleData;
        // trip1 = new Trip(tripsSampleData[0])
        // trip2 = new Trip(tripsSampleData[1])
        // trip3 = new Trip(tripsSampleData[2])
        destinationData = destinationSampleData;
        // console.log(destinationData)
    })
    
    it('should create a new instance of Traveler', () => {
        expect(traveler1).to.be.an.instanceof(Traveler);
    })

    it('should have an id', () => {
        expect(traveler1.id).to.equal(5);
        expect(traveler2.id).to.equal(2);
    })

    it('should have a name', () => {
        expect(traveler1.name).to.equal('Tiffy Grout');
        expect(traveler2.name).to.equal('Rachael Vaughten')
    })

    it('should have a traveler type', () => {
        expect(traveler1.travelerType).to.equal('thrill-seeker');
        expect(traveler2.travelerType).to.equal('thrill-seeker')
    })

    it('should start with no trips', () => {
        expect(traveler1.travelersTrips).to.deep.equal([]);
        expect(traveler2.travelersTrips).to.deep.equal([]);
    })

    it('should find every trip that belongs to traveler by id', () => {
        traveler1.findAllTravelerTrips(tripsSampleData, destinationSampleData)
        console.log(traveler1.travelersTrips)
    })

    it('should start with no past trips', () => {
        expect(traveler1.pastTrips).to.deep.equal([]);
        expect(traveler2.pastTrips).to.deep.equal([]);
    })

    it('should contain all past trips', () => {
        traveler1.findAllPastTrips(tripsSampleData)
        console.log('did u work???',traveler1.pastTrips)
    })

    it('should start with no upcoming trips', () => {
        expect(traveler1.upcomingTrips).to.deep.equal([]);
        expect(traveler2.upcomingTrips).to.deep.equal([]);
    })

    it('should contain all upcoming trips', () => {
        traveler1.findAllUpcomingTrips(tripsSampleData);
        console.log(traveler1.upcomingTrips)
    })

    it('should start with no pending trips', () => {
        expect(traveler1.pendingTrips).to.deep.equal([]);
        expect(traveler2.pendingTrips).to.deep.equal([]);
    })

    it.skip('should contain all pending trips', () => {
        traveler1.findAllPendingTrips(tripsSampleData);
        console.log(traveler1.pendingTrips)
    })
});


  