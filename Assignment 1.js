// //---------- var/let/const --------------

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

// //const z =2; // this is not possible --> error occur
// //z=9; // this is not possible --> error occur


// //------------- Naming convention of datatype -------------

// /*
// Rules :-

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _
// Names are case sensitive 
// Reserved words (like JavaScript keywords) cannot be used as names.

// */

// const Name = 'Debjit';
// console.log(Name);

// // const 1Name = 'ram'; // this is invalid
// const Name1 = 'Ram'; // this is valid
// console.log(Name1);

// const $name = 'Iron Man';
// console.log($name);

// const _hero= 'Tony Stark';
// console.log(_hero);


// const student = "Debjit";
// const Student = 'Nandan';
// console.log(Student);
// console.log(student);

// //--------------- operator ----------------
// // 1. Arrithmatic operator
var a = 5;
var b = 10;

console.log(a+b); // addition
console.log(b-a); // substraction
console.log(b*a); // multiplication
console.log(b/a); // division
console.log(11%a); // modulo
console.log(10**2); // Exponentiation
a++; // increment
var inc =a ;
b--; // decrement   
var dec =b;
console.log(inc);
console.log(dec);

// // 2. Assignment operator

let m= 30;
let n =20;
m+=10; // Addition Assignment Operator
console.log(m)
n-=10; // Substraction Assignment Operator
console.log(n);
m*=10; // Multiplication Assignment Operator
console.log(m)
n/=10; // Division Assignment Operator
console.log(n);
m%=10; // Modulo Assignment Operator
console.log(m);

// let f = 100;
// f <<= 5; // Left Shift Assignment Operator 
// console.log(f);
// f >>= 8; // Right Shift Assignment Operator 
// console.log(f);


// // 3. Logical operator 

// let t = 100;
// t &= 5; //Bitwise AND Assignment Operator
// console.log(t);
// t|=5; //Bitwise OR Assignment Operator
// console.log(t);
// t^=5; //Bitwise XOR Assignment Operator
// console.log(t);



// //----------------- Datatypes --------------------

// // types - 1. String 2. Number 3. Bigint 4. Boolean 5. Undefined 
// //         6. Null 7. Symbol 8. Object 9. object 10. array 11. date

const length = 16; //Number
const color = "Yellow"; // String
const person = {fName:"Debjit", lName:"Nandan"}; // Object
const cars = ["Royal Enfield", "KTM", "Honda"]; //Array
const date = new Date(); //Date
// let x; // undefined


console.log(color);
console.log(person);
console.log(length);
console.log(cars);
console.log(date);

// const pupil = {         // object
//     fName: "Debjit",
//     lName: "nandan",
//     age: 22,
//     roll : 20101105042
//   };

//   // console.log(pupil.fName);


// // --------------- String concatination -------------

// // using + sign
// console.log(student+" "+Student);



// //-------------- Functions ---------------
// function myFunction(num1,num2) {
//   return num1 + num2;
// }

// console.log(myFunction(34,66));


// // arrow function (ES6 version of JS)
// const equ = ()=>{
//   return (10+20)/5;
// }
// console.log(equ)





// //------------- conditional Statements -----------------

// /* 
//     1.---- if else -----

//         if (condition) {
//            code
//         } else {
//             code
//         }

//     2.--- if else ladder ----

//         if (condition1) {
//            code
//         } else if (condition2) {
//           code
//         } else {
//           code
//         }

//     3.---- switch case -----

//         switch(expression) {
//           case x:
//               code block
//              break;
//            case y:
//               code block
//              break;
//             default:
//              code block
//         }

// */

// //--------------------- Loops ------------------
// /*
//    types -> 1. for loop
//             2. while loop
//             3. Do while loop
//             4. for in loop
//             5. for of loop
//             6. for each loop


//   1. for loop 

//         for (initialisation; condition; increment/decrement) {
//             // code to be executed
//         }

//   2. while loop 

//         initialisation
//         while (condition) {
//           // code to be executed

//           increment/decrement
//         }

//   3. do while loop 

//         initialisation
//         do {
//             // code to be executed

//             increment/decrement
//         } while (condition);

//   4. for in loop

//         for (key in object) {
//             // code block to be executed
//         }

//   5. for of loop

//       for (variable of iterable) {
//           // code block to be executed
//       }

// */

// const per = {fname:"Debjit", lname:"Nandan", age:22};

// // for in loop
// let text = '';
// for (let i in per) { 
//   text += per[i]+' ';
// }
// console.log(text);


// const bikes = ["Royal Enfield", "KTM", "Honda", "Hero"];

// // for of loop
// let txt = "";
// for (let x of cars) { 
//   txt += x+" ";
// }
// console.log(bikes);


// // for each loop
// let txt2='';
// bikes.forEach(myFunc); 
// function myFunc(value) {
//   txt2 += value+' ';
// }
// console.log(txt2);


// function name(a,b,c=0) {
//   return a*b*c;
// }

// console.log(name)















