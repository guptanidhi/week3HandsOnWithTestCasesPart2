/*Q1:  Convert the following JSON string to an object and 
	access the value of the json property.
	var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
*/

const jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
// console.log("Input String:",jsonStr);
// var obj = JSON.parse(jsonStr);
// console.log("Output Object:",obj);
// console.log("Accessing Value like obj.mike: ", obj.mike);
// console.log("Accessing Value like obj.jason: ", obj.jason);
// console.log("Accessing Value like obj.chels: ", obj.chels);
module.exports = JSON.parse(jsonStr);
