var message1 = "hello";
//message1=2;   this will give an error because message1 is of type string and cannot be assigned a number
console.log(message1);
//number
var age1 = 20;
console.log(age1);
//boolean
var isDisabled = true;
console.log(isDisabled);
//arrays
var numberArray = [1, 2, 3, 4, 5]; //number array
console.log(numberArray);
var data = "hello"; //any data type can be assigned to a variable of type any
console.log(data);
data = 42;
console.log(data);
//funtion
function add(a, b) {
    return a + b;
}
console.log(add(3, 4));
//console.log(add(3,"4")); //this will give an error because the second parameter is a string and not a number
//objects
var user = { name: "Bob", age: 30 }; //object with name and age properties
console.log(user);
