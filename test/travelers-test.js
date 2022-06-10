import { expect } from 'chai';
import { Traveler } from '../src/classes/travelers.js';
import { travelerSampleData } from '../src/data/traveler-sample-data';
import { Trip } from '../src/classes/trips.js';
import { tripsSampleData } from '../src/data/trips-sample-data';
import { destinationSampleData } from '../src/data/destination-sample-data.js'
// const expect = chai.expect;

// test/trips-sample-data.js
// src/data/destination-sample-data.js

describe('Traveler', () => {
    let traveler;
    let tripData;
    let trip1, trip2, trip3;
    let destinationData;

    beforeEach(() => {
        traveler = new Traveler(travelerSampleData[0]);
        tripData = tripsSampleData;
        // trip1 = new Trip(tripsSampleData[0])
        // trip2 = new Trip(tripsSampleData[1])
        // trip3 = new Trip(tripsSampleData[2])
        // destinationData = destinationSampleData;
        // console.log(destinationData)
    })
    
    it('should create a new instance of Traveler', () => {
        expect(traveler).to.be.an.instanceof(Traveler);
    })

    it('should have an id', () => {
        expect(traveler.id).to.equal(7);
    })

    it('should have a name', () => {
        expect(traveler.name).to.equal('Emmet Sandham');
    })

    it('should have a traveler type', () => {
        expect(traveler.travelerType).to.equal('relaxer');
    })

    // it('should find every trip that belongs to travler id')
});


  