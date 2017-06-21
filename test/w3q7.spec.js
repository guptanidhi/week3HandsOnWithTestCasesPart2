let expect = require('chai').expect;
let index = require('../output/w3q7');

const array = [11.21, 25.6, 31.3, 47.976, -1.90, .99];
const roundedElementArray = [ 11, 26, 31, 48, -2, 1 ];
		
const people = [
	{fname:'Marla', lname:'Jayson'},
	{fname:'Jack', lname:'Pill'},
	{fname:'Eric', lname:'owen'},
	{fname:'James', lname:''}
];

describe('Question 7 - Test code for correct output', function(){

	it('Matches the desired output', function(done){
		expect(index.roundValues(array)).to.deep.equal(roundedElementArray);
		done();
	})

	it('Matches the desired output', function(done){
		expect(index.getFullName(people[0])).to.deep.equal('Marla Jayson');
		done();
	})

	it('Matches the desired output', function(done){
		expect(index.getFullName(people[1])).to.deep.equal('Jack Pill');
		done();
	})

	it('Matches the desired output', function(done){
		expect(index.getFullName(people[2])).to.deep.equal('Eric owen');
		done();
	})

	it('Matches the desired output', function(done){
		expect(index.getFullName(people[3])).to.deep.equal('James ');
		done();
	})
})
