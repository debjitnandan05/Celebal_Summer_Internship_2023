//---------- var/let/const --------------

var x=5; // declare and define many times
console.log(x);
var x= 7;
console.log(x);


let y=9; // declare once and define many times
console.log(y);
// let y = 3; // this is not possible --> error occur
y=3;
console.log(y);

const z= 10; // declare once and define once
console.log(z);

//const z =2; // this is not possible --> error occur
//z=9; // this is not possible --> error occur


//------------- Naming convention of datatype -------------

// Rules :-

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _
// Names are case sensitive 
// Reserved words (like JavaScript keywords) cannot be used as names.

const Name = 'Debjit';
console.log(Name);

// const 1Name = 'ram'; // this is invalid
const Name1 = 'Ram'; // this is valid
console.log(Name1);

const $name = 'Iron Man';
console.log($name);

const _hero= 'Tony Stark';
console.log(_hero);


const student = "Debjit";
const Student = 'Nandan';
console.log(Student);
console.log(student);

//--------------- operator ----------------
// 1. Arrithmatic operator
var a = 5;
var b = 10;

// console.log(a+b); // addition
// console.log(b-a); // substraction
// console.log(b*a); // multiplication
// console.log(b/a); // division
// console.log(11%a); // modulo
// console.log(10**2); // Exponentiation
// a++; // increment
// var inc =a ;
// b--; // decrement   
// var dec =b;
// console.log(inc);
// console.log(dec);

// 2. Assignment operator

// let m= 30;
// let n =20;
// m+=10; // Addition Assignment Operator
// console.log(m)
// n-=10; // Substraction Assignment Operator
// console.log(n);
// m*=10; // Multiplication Assignment Operator
// console.log(m)
// n/=10; // Division Assignment Operator
// console.log(n);
// m%=10; // Modulo Assignment Operator
// console.log(m);

// let f = 100;
// f <<= 5; // Left Shift Assignment Operator 
// console.log(f);
// f >>= 8; // Right Shift Assignment Operator 
// console.log(f);


// 3. Logical operator 

let t = 100;
t &= 5; //Bitwise AND Assignment Operator
console.log(t);
t|=5; //Bitwise OR Assignment Operator
console.log(t);
t^=5; //Bitwise XOR Assignment Operator
console.log(t);



//----------------- Datatypes --------------------

// types - 1. String 2. Number 3. Bigint 4. Boolean 5. Undefined 
//         6. Null 7. Symbol 8. Object 9. object 10. array 11. date

const length = 16; //Number
const color = "Yellow"; // String
const person = {fName:"Debjit", lName:"Nandan"}; // Object
const cars = ["Royal Enfield", "KTM", "Honda", "Hero"]; //Array
const date = new Date(); //Date
// let x; // undefined


// console.log(color);
// console.log(person);
// console.log(length);
// console.log(cars);
// console.log(date);

const pupil = {         // object
    fName: "Debjit",
    lName: "nandan",
    age: 25,
    roll : 20101105042
  };

  console.log(pupil.fName);










