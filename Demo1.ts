let message1:string="hello";
//message1=2;   this will give an error because message1 is of type string and cannot be assigned a number
console.log(message1);
//number
let age1:number=20;
console.log(age1);
//boolean
let isDisabled:boolean=true;
console.log(isDisabled);

//arrays
let numberArray:number[]=[1,2,3,4,5]; //number array
console.log(numberArray);

let data:any="hello";    //any data type can be assigned to a variable of type any
console.log(data);
data=42;
console.log(data);

//funtion
function add(a:number, b:number)
{   //function that takes two numbers as parameters and returns a number
    return a+b;
}
console.log(add(3,4));
//console.log(add(3,"4")); //this will give an error because the second parameter is a string and not a number


//objects
let user:{name:string,age:number}={name:"Bob",age:30}; //object with name and age properties
console.log(user);

