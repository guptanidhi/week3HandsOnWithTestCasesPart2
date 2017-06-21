/*Q2:  CWrite a program to read a JSON file containing `customer and store` 
	details to perform the following operations;
	[Note: every data is associated with ID and name] 
	a. print all the store data and customer data seperately.
	b. print second store Id and all the customer name.
	c. Remove all details excluding store details
 
	Input: [JSON]:
  	{
      "store": [{
          "s_id": "0093WRS21",
          "s_name": "Hi5"
      },   {
          "s_id": "54241QSUT",
          "s_name": "Jupiter"
      }],
      "Customer": [{
          "c_id": "C78305212",
          "c_name": "Alice"
      },   {
          "c_id": "C32160832",
          "c_name": "Scooby"
      },  {
          "c_id": "C06512389",
          "c_name": "Tom"
      }]
    }
*/
 
const data = {
  "store": [
  	{
      "s_id": "0093WRS21",
      "s_name": "Hi5"
  	},
  	{
      "s_id": "54241QSUT",
      "s_name": "Jupiter"
  	}
  ],
  "Customer": [
  	{
      "c_id": "C78305212",
      "c_name": "Alice"
  	},
  	{
      "c_id": "C32160832",
      "c_name": "Scooby"
  	},
  	{
      "c_id": "C06512389",
      "c_name": "Tom"
  	}
  ]
} 

let q2 = {
	getStoreDetail: function(){
		// console.log("\t\tStore Details");
		var storeDetails = [];
		for (i in data.store) {
			storeDetails.push(data.store[i]);
		}
		// console.log(storeDetails);
		return storeDetails;
	},

	getCustomerDetail: function(){
		// console.log("\t\tCustomer Details");
		var customerDetails = [];
		for(i in data.Customer){
			customerDetails.push(data.Customer[i]);
		}
		// console.log(customerDetails);
		return customerDetails;
	},

	getSecondStoreId: function(){
		// console.log("Second Store ID:",data.store[1].s_id);
		return data.store[1].s_id;
	},

	getCustomerNames: function(){
		// console.log("Customer Name:");
		var customerNames = [];
		for(i in data.Customer){
			customerNames.push(data.Customer[i].c_name);
		}
		// console.log(customerNames);
		return customerNames;
	},

	removeAllDetailsExcludingStore: function(){
		delete data.Customer;
		// console.log("Remove all details excluding Store detail", data);
		return data;
	}
}
// q2();
module.exports = q2;