let expect = require('chai').expect;
let index = require('../output/w3q6');

var people = [
	{
		fname:'Harry',
		lname:'Potter',
		id:14637,
		hireDate:new Date(1999,2,4)
	},
	{
		fname:'Jane',
		lname:'Doe',
		id:29384,
		hireDate:new Date(2003,4,13)
	},
	{
		fname:'John',
		lname:'Asle',
		id:39922,
		hireDate:new Date(2004,11,20)
	},
	{
		fname:'Jackie',
		lname:'Chan',
		id:83736,
		hireDate:new Date(2014,7,4)
	}
];

describe('Question 6 - Test code for correct output', function(){

	it('Desired output should be Jackie Chan', function(done){
		expect(index.firstPersonHiredAfter2014(people)).to.deep.equal('Jackie Chan');
		done();
	})

	it('Desired output should be John Asle if we pass 39922 as id', function(done){
		expect(index.personIterate(people, 39922)).to.deep.equal('John Asle');
		done();
	})

	it('Desired output should be Person not found if we pass 12345 as id', function(done){
		expect(index.personIterate(people, 12345)).to.deep.equal('person not found');
		done();
	})

})
