<<<<<<< HEAD
// //-------------- Functions ---------------
// function myFunction(num1,num2) {
//   return num1 + num2;
// }

// console.log(myFunction(34,66));


// arrow function (ES6 version of JS) --> shortcut form of defining a function

// const equ = (a,b,c)=>{
//   return (a+b)/c;
// }
// console.log(equ(10,20,5));

//-------------- file system -------------

// import filse system module of node js
const fs = require("fs");

// Methods ---> 1.create 2.read 3.update 4.delete 5.rename

//------- create ----------

//Methods --> 1. fs.appendFileSync() 2. fs.openSync()  3. fs.writeFileSync()

//1. append file synchronously

fs.appendFileSync('demo1.txt','Namaste Duniya',(err)=>{
    if(err) throw err;
    console.log('File created');
})

//2. open file synchronously

fs.openSync('demo2.txt', 'w',0o666);   // fs.openSync( path, flags, mode )

//3. write file synchronously

for (let i = 2023; i <=2030; i++) {
    fs.writeFileSync("demo3.txt",
    "Happy New Year " + i + "\n",
    {
        encoding: "utf8",
        flag: "a+",
        mode: 0o666
    });
  }


//----------- Read ---------------

const data = fs.readFileSync('demo3.txt',{ encoding: 'utf8', flag: 'r' });
console.log(data);

//------------- Update -------------
// method ---> 1. fs.appendFileSync 2. fs.writeFileSync

//---------- delete -----------
//  method ---> fs.unlinkSync

fs.unlinkSync("demo2.txt");


















=======
// //-------------- Functions ---------------
// function myFunction(num1,num2) {
//   return num1 + num2;
// }

// console.log(myFunction(34,66));


// arrow function (ES6 version of JS) --> shortcut form of defining a function

// const equ = (a,b,c)=>{
//   return (a+b)/c;
// }
// console.log(equ(10,20,5));

//-------------- file system -------------

// import filse system module of node js
const fs = require("fs");

// Methods ---> 1.create 2.read 3.update 4.delete 5.rename

//------- create ----------

//Methods --> 1. fs.appendFileSync() 2. fs.openSync()  3. fs.writeFileSync()

//1. append file synchronously

fs.appendFileSync('demo1.txt','Namaste Duniya',(err)=>{
    if(err) throw err;
    console.log('File created');
})

//2. open file synchronously

fs.openSync('demo2.txt', 'w',0o666);   // fs.openSync( path, flags, mode )

//3. write file synchronously

for (let i = 2023; i <=2030; i++) {
    fs.writeFileSync("demo3.txt",
    "Happy New Year " + i + "\n",
    {
        encoding: "utf8",
        flag: "a+",
        mode: 0o666
    });
  }


//----------- Read ---------------

const data = fs.readFileSync('demo3.txt',{ encoding: 'utf8', flag: 'r' });
console.log(data);

//------------- Update -------------
// method ---> 1. fs.appendFileSync 2. fs.writeFileSync

//---------- delete -----------
//  method ---> fs.unlinkSync

fs.unlinkSync("demo2.txt");


















>>>>>>> cce3029b9c8a7f8db44cbcd6970ddee0e19ec0a6
