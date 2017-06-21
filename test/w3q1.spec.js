let expect = require('chai').expect;
let index = require('../output/w3q1');

describe('Question 1 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		var object = { mike: 'Book', jason: 'sweater', chels: 'iPad' };
		expect(index).to.deep.equal(object);
		done();
	})

	it('Matches the desired output type of object', function(done){
		expect(index).to.be.a('object');
		done();
	})
})
