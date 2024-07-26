
/**
 * 
 * Topic: Variable
 * 
 */
// var

let name;
console.log(name);

// Variable
//cannot be a reserved keyword
//should be meaningful and descriptive
//cannot start with a number (1name)
//Cannot contain a space or hyphen(-)
//Are case-Sensitive

let firstName; //camel case Notation
let FirstName; // Pascal case Notation

//initially variable are undefined

/**
 * 
 * Topic: Constants
 * 
 */

// let interestRate=0.3;
//  interestRate=1;

//  console.log(interestRate);
 //In real world situation a we don't want to change variable value

const interestRate=0.3;
//  interestRate=1;

 console.log(interestRate);

 // if we do not want to reassign value of a variable we use const.

 /**
 * 
 * Topic: Data types -Primitive Types/Value Types
 * String
 * Number
 * Boolean
 * Undefined
 * Null
 */

 let name_='Ebrahim'; //String
 let age =30;
 let isApproved=false;
 let firstName_=undefined;
 let selectedColor= null; // clear the value of a variable

 /**
 * 
 * Topic: Dynamic Typing
 * Javascript is a dynamic language 
 * language- two types
 * 1. Statically typed  ---- string name ='Jhon'; we will not change it future
 * 2. Dynamically typed ---- let name = 'Jhon';  console.log(typeof name_) name_=1  console.log(typeof name_) 
 * In javascript run time variable typed can be changed 
 * 
 */

  console.log(typeof isApproved)
  console.log(typeof selectedColor)
  console.log(typeof name_)

  /**
 *  Data types --Reference Types ==Objects, Array, Function
 * Topic: Objects -Person , has name, age, address(these are the properties of a person)
 */


let person ={
    name:'Jhon',
    age:30,

};
//Dot Notation
person.name='Jhon er baba';

//Bracket Notation
person['name']='Idrak';
  console.log(person)

/**
 * 
 * Topic: Arrays
 */
let selectedColor_ = ['red','blue'];
selectedColor_[2] = 'green'

console.log(typeof selectedColor_)
console.log(selectedColor_.length)

/**
 * 
 * Topic: Functions
 */
//Performing a task
function greet(name,age){// name parameter
    console.log('Hello ' + name + ' Your age is ' + age);
}
greet('Jhon');//argument
greet('Idrak',2);

//Calculating a value
function square(number){
    return number * number;
}
let number= square(21);
console.log(number);

  /**
 * 
 * Topic: Operators 
 * Operator Used variable/ constant -> create expression -> implement Algorithms and logic
 * 1.Arithmetic
 * 2.Assignment
 * 3.Comparison
 * 4.Logical
 * 5.Bitwise
 */

  //Arithmetic
  let x = 10;
  let y = 3;

  console.log(x + y) // + is operator,x and y operand, x+y is an expression they implement the addition algorithms
  console.log(x - y)
  console.log(x * y)
  console.log(x / y)
  console.log(x % y)
  console.log(x ** y) //exponential operator 


  //Increment 
    console.log(x++);
    console.log(x);
  //Decrement
  console.log(--x);
    
  //Assignment
  x =x + 5;
  x+=5;

 //Comparison or Relational

 console.log(x > 10);//return boolean
 console.log(x >= 10);
 console.log(x < 10);
 console.log(x <= 10);

 //Strict Equality operator(Type + value)
 console.log(x === 10);
 console.log(x !== 10);

 console.log(1 === 1);
 console.log('1' === 1);
//Loose Equality(value)
 console.log(1 == 1);
 console.log('1' == 1);// it converts console.log('1' == '1');


 //Ternary or Conditional operator

 //If a customer has more than 100 points
 // they are a 'gold' customer, otherwise
 //they are a 'silver' customer.

 let points = 90;
 let type = points > 100 ? 'Gold' : 'Silver';

 console.log(type)

 //4. Logical operator ----1.logical and(&&) 2. logical or(||) 3. logical not(!)

 //1.logical and(&&)  returns True if both operands are true

//  let highIncome = true;
//  let goodCreditScore = true;
//  let eligibleForLoan = highIncome && goodCreditScore;

//  console.log(eligibleForLoan);

  //2.logical or(||)  returns True if one of the operands is true

  let highIncome = false;
  let goodCreditScore = false;
  let eligibleForLoan = highIncome || goodCreditScore;
  console.log('Eligible for loan ',eligibleForLoan)
  //NOT (!)
  let applicationRefused = !eligibleForLoan;
  console.log('Application refused ',applicationRefused)


 //4. Logical operator with Non Boolean

 console.log(true || false)
 console.log(true || 'Idrak')
 console.log(false || 'Ebrahim') //truthy value
 console.log(false || 1 ||'Ebrahim') //Short-Circuit
 //Falsy treated as (false) undefined,null,0,false,'',NaN

 let userColor = undefined;
 let defaultColor = 'blue';
 let currentColor = userColor || defaultColor;

 console.log(currentColor);


 //5. Bit wise Operator

 // 1 = 00000001
 // 2 = 00000010
//-----------------
// R =  00000011 (or)
// R =  00000000 (and)

console.log(1 | 2)
console.log(1 & 2)
//  Read, Write, Execute
//  00000100
//  00000010
//  00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0; 

myPermission = myPermission | readPermission | writePermission; //bitwise or operator used for add permission
console.log(myPermission);
let message = (myPermission & readPermission) ? 'Yes' : 'No';//bitwise and operator used for check permission
console.log(message);

//Operator Precedence

let x_ = 2 + 3 * 4;
let x__ = (2 + 3) * 4;

console.log(x_)

// Exercise: Swapping Variables

let a = 'red';
let b = 'blue';
let c;

c=a;
a=b;
b=c;

console.log(a)
console.log(b)

/**
 * 
 * 1- What is the result of “true && false”?
 * a- true
 * b- false
 * c- null
 * d- undefined
 * 
 * 2- What is the result of “(true && false) || true”?
 * a- true
 * b- false
 * c- null
 * d- undefined
 * 
 * 3- What is the value of y?
 *  let x = 10;
 *  let y = (x > 10) ? 1 : 0;
 *  a- 10
 *  b- 1
 *  c- 0 
 *  d- 11
 * 
 * 4- What is the value of x? let x = (2 + 3) * (4 + 5); 
 * a- 45b- 25c- 20d- 40
 * 
 * 5- Which expression returns true?
 * a- ‘1’ === 1; b- 1 == 1c- 1 === 1d- b and c 
 * 
 * 6- What is the value of x?let x = (1 == true);
 *  a- 1b- truec- false d- undefined 
 * 
 * 7- What is the value of y? let x = 10;let y = (x > 5) && (x < 15); 
 * a- 10b- 5c- 15 d- true
 * 
 * 8- What is the value of x? let x = 5; x += 3; a- 3b- 8c- 15d- 5 
 * 
 * 9- What is the value of y? let x = 10; let y = x++; a- 10b- 11c- 12d- 13
 * 
 * 10- What is the value of y? let x = 1; let y = x !== 2;a- 1b- 2 c- falsed- true

 */