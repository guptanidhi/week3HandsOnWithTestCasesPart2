/*Q6:  Write a program to read the array of data and perform the following tasks 
	a. Write a find method with callback function `hiredafter2014` to create
	 	`firstPersonHiredAfter2014`
	b. Search for the person-object with a specific ID, calling the function 
		`hasId` in find method. 
	Input Array: 
    [
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
  	]
*/ 
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

let q6 = {
	firstPersonHiredAfter2014: function(array){
		var obj = array.find(this.hiredafter2014);
		return obj.fname+" "+obj.lname;
	},

	hiredafter2014: function(person) {
		var jan14 = new Date(2014,1,1);
		return person.hireDate >= jan14;
	},

	personIterate: function(people, idToFind) {
		var self = this;
		var person = people.find(function(p) {	
			return self.hasId(p, idToFind);
		});
		if (typeof person != 'undefined') {
			return person.fname + " " + person.lname;
		} else {
			return "person not found";
		}
	},

	hasId: function(person, id) {
		return person.id === id;
	}
} 

// var ff = q6.firstPersonHiredAfter2014(people);
// console.log('The first person hired after 1/1/2014 is ' + ff);

module.exports = q6;