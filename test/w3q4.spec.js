let expect = require('chai').expect;
let index = require('../output/w3q4');

var cityJson = [
	{
		"city": "Indore",
		"pincode": 452001
	},
	{
		"city": "Bangalore",
		"pincode": 560001
	},
	{
		"city": "Agra",
		"pincode": 282001
	},
	{
		"city": "Delhi",
		"pincode": 110001
	},
	{
		"city": "Mumbai",
		"pincode": 400001
	},
]

const arraySortedByName = [ 
	{ city: 'Agra', pincode: 282001 },
  { city: 'Bangalore', pincode: 560001 },
  { city: 'Delhi', pincode: 110001 },
  { city: 'Indore', pincode: 452001 },
  { city: 'Mumbai', pincode: 400001 } 
]
const arraySortedByPincode = [ 
	{ city: 'Delhi', pincode: 110001 },
  { city: 'Agra', pincode: 282001 },
  { city: 'Mumbai', pincode: 400001 },
  { city: 'Indore', pincode: 452001 },
  { city: 'Bangalore', pincode: 560001 } 
]

describe('Question 4 - Test code for correct output', function(){
	
	it('Return array should be sorted by city name in ascending order', function(done){		
		expect(index.sortByName(cityJson)).to.deep.equal(arraySortedByName);
		done();
	})

	it('Return array should be sorted by pincode in ascending order', function(done){
		expect(index.sortByCode(cityJson)).to.deep.equal(arraySortedByPincode);
		done();
	})

	it('Return pincode for indore i.e. 452001', function(done){
		expect(index.getPincodeForSpecificCity('Indore')).to.deep.equal(452001);
		done();
	})

	it('Return pincode as Not Found if city is not in JSON', function(done){
		expect(index.getPincodeForSpecificCity('Udaipur')).to.deep.equal("Not Found.");
		done();
	})
})
