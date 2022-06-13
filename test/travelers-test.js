import { expect } from 'chai';
import { Traveler } from '../src/classes/Traveler.js';
import { travelerSampleData } from '../src/data/traveler-sample-data';
import { Trip } from '../src/classes/Trip.js';
import { tripsSampleData } from '../src/data/trips-sample-data';
import { destinationSampleData } from '../src/data/destination-sample-data.js'

describe('Traveler', () => {
    let traveler1;
    let traveler2;
    let tripData;
    let destinationData;
    beforeEach(() => {
        traveler1 = new Traveler(4, 'Tiffy Grout', 'thrill-seeker');
        traveler2 = new Traveler(1);
        tripData = tripsSampleData;
        destinationData = destinationSampleData;
    })
    
    it('should create a new instance of Traveler', () => {
        expect(traveler1).to.be.an.instanceof(Traveler);
    })

    it('should have an id', () => {
        expect(traveler1.id).to.equal(4);
        expect(traveler2.id).to.equal(1);
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

    it.skip('should start with no current trips', () => {
        expect(traveler1.currentTrips).to.deep.equal([]);
        expect(traveler2.currentTrips).to.deep.equal([]);
    })

    it('should contain all current trips', () => {
        traveler1.findAllTravelerTrips(tripsSampleData, destinationSampleData);
        // console.log(traveler1.currentTrips)
        // console.log(traveler1.findFirst())
        console.log(traveler1.findTotalAmountSpentInAYear(tripsSampleData))
    })

    // it.only('should contain all current trips', () => {
    //     traveler1.findAllCurrentTrips(tripsSampleData);
    //     // console.log(traveler1.currentTrips)
    //     console.log(traveler1.findFirst())
    // })



    // it('should return the total amount spent on trips this year for the user', () => {

    // })


});


  