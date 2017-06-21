/*Q5:  Write a function to sort the following array of objects 
	by its key value (example key as title (or) author)?
	Sample object : 
	var films = [
	{ film: 'lagaan', rating: '5stars', year: 2003},
	{ film: 'Bahubali', rating: '4stars', year: 2015},
	{ film: 'godfather', rating: '3stars', year: 1990}
	];
*/
 
var films = [
	{ film: 'lagaan', rating: '5stars', year: 2003},
	{ film: 'Bahubali', rating: '4stars', year: 2015},
	{ film: 'godfather', rating: '3stars', year: 1990}
];

let q5 = {
	sortByFilmName: function(films){
		films.sort(this.sortByName);
		// console.log(films);
		return films;
	},

	sortByName: function(i,j)  
	{  
	 if (i.film < j.film)  
	   return -1;  
	 if (i.film > j.film)  
	   return 1;  
	 return 0;  
	},

	sortFilmByYear: function(films){
		films.sort(this.sortByYear);
		// console.log(films);
		return films;
	},

	sortByYear: function (u,v)
	{
	  if(u.year < v.year)
	    return -1;
	  if(u.year > v.year)
	    return 1;
	  return 0;
	}

}
 
// console.log("Sort by Film Name: \n" ,q5.sortByFilmName(films));
// console.log("Sort by Year: \n" , q5.sortFilmByYear(films));

module.exports = q5;
