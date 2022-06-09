import { expect } from 'chai';
import { Traveler } from '../src/classes/travelers.js';
import { travelerSampleData } from '../src/data/traveler-sample-data';
// const expect = chai.expect;



describe('Traveler', () => {
    let traveler;
    let travelerData;
    
    beforeEach(() => {
        traveler = new Traveler(travelerSampleData[0]);
    })
    
    it('should create a new instance of Ingredient', () => {
        expect(traveler).to.be.an.instanceof(Traveler);
    })

    it('should have an id', () => {
        expect(traveler.id).to.equal(7);
    })
});


  