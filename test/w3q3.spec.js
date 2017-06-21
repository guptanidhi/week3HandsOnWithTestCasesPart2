let expect = require('chai').expect;
let index = require('../output/w3q3');

describe('Question 3 - Test code for correct output', function(){
	it('Return value type should be object', function(done){
		expect(index).to.be.a('object');
		done();
	})

	it('Object cost property should be type of function', function(done){
		expect(index.cost).to.be.a('function');
		done();
	})

	it('Object title property should be type of string', function(done){
		expect(index.title).to.be.a('string');
		done();
	})

	it('Object author property should be type of string', function(done){
		expect(index.author).to.be.a('string');
		done();
	})
})
