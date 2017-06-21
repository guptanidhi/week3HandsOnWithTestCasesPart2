let expect = require('chai').expect;
let index = require('../output/w3q5');

var films = [
	{ film: 'lagaan', rating: '5stars', year: 2003},
	{ film: 'Bahubali', rating: '4stars', year: 2015},
	{ film: 'godfather', rating: '3stars', year: 1990}
];

const sortByFilmName = [ 
	{ film: 'Bahubali', rating: '4stars', year: 2015 },
  { film: 'godfather', rating: '3stars', year: 1990 },
  { film: 'lagaan', rating: '5stars', year: 2003 } 
]

const sortByYear = [ 
	{ film: 'godfather', rating: '3stars', year: 1990 },
  { film: 'lagaan', rating: '5stars', year: 2003 },
  { film: 'Bahubali', rating: '4stars', year: 2015 } 
]

describe('Question 5 - Test code for correct output', function(){
	
	it('Return array should be sorted by film name in ascending order', function(done){
		expect(index.sortByFilmName(films)).to.deep.equal(sortByFilmName);
		done();
	})

	it('Return array should be sorted by year in ascending order', function(done){
		expect(index.sortFilmByYear(films)).to.deep.equal(sortByYear);
		done();
	})

})
