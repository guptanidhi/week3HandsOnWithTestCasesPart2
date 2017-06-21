/*Q7:   Write a program to perform the following tasks 
	a. Create an array containing floating-point values. 
	Then create another array which stores the `roundedNums` by supplying `Math.round` 
	as the callback function for map, thus rounding each element of numbers 
	to the nearest integer. 
	`Input Array: [11.21, 25.6, 31.3, 47.976, -1.90, .99]`
 
	b. Create an array people containing four objects, each with fields 
	`first name and last name`. 
	Write a callback function `getFullName` which returns the 
	`first and last name concatenated with a space`.
 	Input Array:
  people = [
    {fname:'Marla', lname:'Jayson'},
    {fname:'Jack', lname:'Pill'},
    {fname:'Eric', lname:'owen'},
    {fname:'James', lname:''}
	]
*/

const nums = [11.21, 25.6, 31.3, 47.976, -1.90, .99];
const people = [
	{fname:'Marla', lname:'Jayson'},
	{fname:'Jack', lname:'Pill'},
	{fname:'Eric', lname:'owen'},
	{fname:'James', lname:''}
];

let q7 = {
	roundValues: function(array){
		return array.map(Math.round);
	},

	getFullName: function(person){
		return person.fname + ' ' + person.lname;
	}
}

// console.log(q7.roundValues(nums));
/*for(var obj in people){
	console.log("Full Names:"+q7.getFullName(people[obj]));
}*/

module.exports = q7;