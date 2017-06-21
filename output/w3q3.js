/*Q3:  Write a program to create an object with a User-Defined 
	function named `book` with arguments `title and author`, 
	use `this` keyword to refer to the object that has been passed to a function. 
	Also Define a function named `cost` which will work as a method 
	and assign that method as a property in function named `book`.
*/

 
function cost(amount){
	this.price = amount;
}
 
function book(title, author){
	this.title = title;
	this.author = author;
	this.cost = cost;
}
 
var myBook = new book("Harry Potter", "J. K. Rowling");
myBook.cost(250);
// console.log(myBook);

module.exports = myBook;