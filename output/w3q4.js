/*Q4:  Create a database with `City name and Pin code` as a pair, 
	Keep the restriction for city name with characters and pin code with numbers.
 	a. Write to code to display all the `cities and their pin code in Ascending order`.
	b. Write the code to accept the `city name`, and display the corresponding `pin code`
*/

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

let q4 = {
	sortByName: function(array){
		array.sort(this.sortByCityName)
		// console.log(array);
		return array;
	},

	sortByCityName: function(i,j){
	 	if(i.city < j.city)  
	  	return -1;  
	 	if(i.city > j.city)  
	  	return 1;  
	 return 0;  
	},

	sortByCode: function(array){
		array.sort(this.sortByPincode)
		// console.log(array);
		return array;
	},

	sortByPincode: function (i,j){  
	 	if(i.pincode < j.pincode)  
	  	return -1;  
	 	if(i.pincode > j.pincode)  
	  	return 1;  
	 return 0;  
	},

	getPincodeForSpecificCity: function(cityName){
		var pincode;
		for(var key in cityJson){
			if(cityName.toLowerCase() === cityJson[key]["city"].toLowerCase()){
				pincode = cityJson[key]["pincode"];
				break;
			}else{
				pincode = "Not Found."
			}
		}
		// console.log(cityName+" pincode-", pincode);
		return pincode; 
	}

}

// console.log("Sort by City Name: \n" ,q4.sortByName(cityJson));
// console.log("Sort by Pincode: \n" ,q4.sortByCode(cityJson));


// To get city name input from user
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
// rl.setPrompt('City Name> ');
rl.prompt();
rl.on('line', function(line) {
	q4.getPincodeForSpecificCity(line) 
  rl.close();
}).on('close',function(){
    process.exit(0);
});

module.exports = q4;