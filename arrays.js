/*
    1. arrays 
    2. Objects
    3. intro functions 
    4. Hoisting (
        differences between (let, const, var, function) )
*/

/*
    java
    int[] arr = new int[10] ;
    0 based indexing
    takes the contiguos memory locations
*/
/**
 * javascript
 * by default arrays are dynamic in nature
 * follows zero based indexing
 * takes the contiguos memory locations
 * takes heterogenious data as well
 */
/**
 *
 * Variable naming conventions
 * 1. always start with alpha, _, $
 * 2. can include alpha, _, $, numeric
 */
// let arr = [10, "aravind", true, false, 34.7] ;
// console.log(arr)
// arr[2] = 20 ;
// console.log(arr)
// console.log(arr[0] , arr[3] , arr[4])

// Objects

// message (in zoom)
/**
 message: 'datatype language time',
 timestamp: "8:24 PM",
 name: "Sanket Pawar",
 send_to: "Everyone"

 Object

 profile page of a person in instagram 

 username: "",
 follower_count: 80,
 following_count: 90,
 is_private: false,
 posts: 10

 Object
 
 */

// Object is a datatype
// let arr = [1, 0, {
//     username: "aravind",
//     followerCount: 80,
//     followingCount: 102,
//     isPrivate: true,
//     postsCount: 10
// }, true];

// let obj = {
//     username: "aravind",
//     followerCount: 80,
//     followingCount: 102,
//     isPrivate: true,
//     postsCount: 10
// }

// console.log(obj.postsCount)
// console.log(obj["username"])

// functions
// function is a datatype

// let sum = 0 ;
// for(let i = 0 ; i < 3; i++) {
//     sum += arr[i] ;
// }
// console.log(sum);

// let arr2 = [9, 10, 4];

// let sum2 = 0 ;
// for(let i = 0 ; i < 3; i++) {
//     sum2 += arr2[i] ;
// }
// console.log(sum2);

// let arr = [4, 5, 6]; // numeric array
// function sumOfElements(array) {
//     // array = 10
//     // array => its a variable (parameter)
//   let sum = 0;
//   for (let i = 0; i < 3; i++) {
//     sum += array[i];
//   }
//   console.log(sum) // 15
//   return sum; // return 15 ;
// }

// let result = sumOfElements(arr); // result = 15
// // arr => argument,. 
// console.log(result); // 15

// input => function(evaluation) => result

// write a function with name to be `add` that will take two numbers as input and gives the sum of those two numbers as output(result)

// let a ;
// console.log(a) // 

// a, b => variables(parameters)
// function add(a, b) {
//     // let a = 2, b = undefined;
//     let result = a + b ; // 2 + undefined = NaN
//     // return result ;// return NaN;
//     // return undefined ;
// }
// // 2, 4 are argument
// let r1 = add(2);// r1 = undefined
// console.log(r1) // undefined

/*
    10 + undefined => 10 + Number(undefined) => 10 + NaN = NaN 
    "aravind" + undefined => "aravind" + String(undefined) => "aravind" + "undefined" => "aravindundefined"
*/

// Hoisting (9:43PM)

// a is not defined
// undefined(data) | not defined
// console.log(a) ; 

// let a; 
// console.log(a) // undefined

// console.log(a); // 
// let a ;

// let , const , var, function 

// let a = 90 ;
// console.log(a , b); // 90, undefined
// var b = 100 ;
// console.log(a , b);// 90, 100

// variables declared with 
// let and const keyword will be hoisted and they will be inside the TDZ
// Temporal Dead Zone 

// Cannot access variable a before it's intialisation
// console.log(a) ;
// let a = 20 ;

// console.log(a) // cannot access a before intialisation
// let a = 20 ;
// console.log(a) // 20

// const a = 30;

// int a = 20 ;
// a = 90;
// a = 200 ;
// final int b = 100 ;

// add is a variable of function data type 
// function add() {
//     let a  = 20 ;
//     console.log(a + b); // 20 + undefined = NaN
//     var b =  300 ; 
//     console.log(a + b); // 20 + 300 = 320 
// }

// let x = 100;
// console.log(x - y); // 100 - undefined = NaN
// var y = 200 ;
// console.log(x + y) // 100 + 200 = 300 
// add();

// global lines => 6
// inside add (local) => 4 lines 

// Two contexts 
// var, const, let declared variable will be hoisted partially.
// function => will be hoisted fully.

// Global context => entered first 
// add context => entered second
// add context => removed first 
// Global context => removed second 

// a();
// function a(){
//     console.log("inside a ") // inside a 
// }
// a();

// function a() {
//     console.log("inside a") ;
// }
// let b = "aravind" ;
// // b + a = > "aravind" + String(a) => 

// // "aravind" + `function a() {
// //     console.log("inside a") ;
// // }` = `aravindfunction a() {
// //     console.log("inside a") ;
// // }`
// console.log(b + a)



// let arr = [4, 5, 10] ;

// console.log(arr.length) // 3

// let x = arr.push(true, "aravind", 19); 
// [4, 5, 10, true, "aravind", 19]
// console.log(arr)
// console.log(arr)
// console.log(x, arr.length) // 4, 4
// [4, 5, 10]
// let result = arr.pop(); // result = true
// console.log(result, arr)
// [true, 4, 5, 10]

// [4, 5, 6]
// arr.unshift(true);
// // [true, 4, 5, 6]
// console.log(arr)
// [4, 5, 6]
// let x = arr.shift();
// console.log(x, arr)

// slice => used to extract the sub array of an arrau


// let arr = [4, 5, 10, 90, 100, -20] ;
// let subArray = arr.slice(1, 3) // [1, 3)
// console.log(subArray)

// splice => insert elemnts anywhere and can delete the elements from anywhere
// [4, 5, true, 90, 100, -20]
// arr.splice(2, 1, true) ;
// console.log(arr)