import { expect } from 'chai';
import { Traveler } from '../src/classes/travelers.js';
import { travelerSampleData } from '../src/data/traveler-sample-data';
import { tripsSampleData } from '../src/data/test/trips-sample-data';

// const expect = chai.expect;



describe('Traveler', () => {
    let traveler;
    
    beforeEach(() => {
        traveler = new Traveler(travelerSampleData[0]);
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

    it('should ')
});


  