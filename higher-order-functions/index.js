/*
    A function which either takes another function as an argument or returns another function is called a higher order function

    When a function is passed as an argument to another function then that parameter(function) we call as a callback function.
*/

/*
function func(a) {
    // a => function
    // a => callback function
    // func => higher order function
    // a = #300, function 
    let x = 20;
    a(); // since a is a function i can call it
}
let x = 30 ;
function callme(){
    console.log(x)
}
// callme = #300
func(callme)
*/


/*
GEC
    x = 30
    higherOrderFunc = () = #200
    callme = () = #300

higherOrderFunc Context
    a(parameter) = #300
    x = 20
    (8) a() => #300()
*/


/*
    different ways of creating function

    1. function
*/

// function func(){ // will be hoisted fully during creation phase
//     // code
// }

// let x = 20 ;
// // anonymous function
// var callme = function(a, b){
//     // callme will be hoisted partially and kept inside the tdz.
//     console.log(a + b)
//     // code
// }

// // callme(10, 20);
// // arrow function
// let arrow = (a, b, c) => {
//     console.log(a + b + c)
// }

// arrow(10, 20, 10, 20, 30);



// function parent(callback){
//     let a = 20;
//     callback();
// }

// parent(() => {
//     console.log(a)
// })
// // global

// let a = 30;

/**
 * Higher order methods/function inside array
 * forEach
 * map
 * filter
 * reduce
 */

// forEach => higher order function 
// callback = callback function
// function forEach(callback){
    //     for(let i = 0 ; i < arr.length; i++){
        //         // i = 0
        //         callback(arr[i], i, arr);
        //         // element, index, entireArray
        //     }
        // }
        
        // forEach((element, index, list) => { // anonymous
        //     console.log(element, index, list)
        // })
        
        // let cb = (x, i, list) => {
            //     console.log(x, i, list)
            // }
            // let result = arr.forEach(cb);
            // console.log(result) // 
            
            
            
// let arr = [2, 3, 1, 0, 10, 20];
//                          i
// let result = arr.forEach((element, index, list) => {
//     console.log(element, index, list)
// }) 
// console.log(result) // undefined

// function map(callback) {
//     // callback(e, i, list)
//     let aggregatedArray = [] ;
//     for(let i = 0 ; i < arr.length; i++){
//         let result = callback(arr[i], i, arr);
//         aggregatedArray.push(result);
//     }
//     return aggregatedArray;
// }

// let newArr = arr.map((element, index) => {
//     return element + index ; //
// })
// // [2, 4, 3, 3, 14, 25] = aggregated ARray
// console.log(newArr)

// forEach  => doesn't return anything.
// map   => returns another array of same length
// filter => used to filter out elements and always returns an array of any length
// reduce => returns any data type depending on the logic


// let arr = [2, 3, -1, 0, 10, -20];
//                          i
//         T  F  F  T   T   T
// [2, 0, 10, 20]
// let result = arr.filter((element, index, list) => {
//     return element  > 0 ;
// })
// console.log(result)
// let arr = [3, 4, 2] ;
// //               i
// // intialvalue = 10 
// let intialValue = 10;
// // first iteration callback has returned 13
// // second iteration callback has returned 17
// let result = arr.reduce((previousValue, element, index) => {
//     // previousValue = 7, element = 2
//     return previousValue + element;  // 7 + 2 = 9
// }, intialValue)

// console.log(result) // 9


// let students = [
//     {
//         name: "Aravind",
//         age: 22
//     },
//     {
//         name: "Archana",
//         age: 20,
//     },
//     {
//         name: "Abhishek",
//         age: 23,
//     },
//     {
//         name: "Rajesh",
//         age: 22
//     }
// ]

// filter out all the names whose age is <= 22
// arr = ["arvaind", "archana"]


// let filteredStudents = students.filter((element) => {
//     return element.age <= 22 ;
// })

// using forEach
// filteredStudents.forEach((student, index) => {
//     filteredStudents[index] = student.name ;
// })
// console.log(filteredStudents)

// using map method
// let ans = filteredStudents.map((student) => {
//     return student.name ;
// })
// console.log(ans)



// let formData = [
//     {
//         label: "name",
//         value: "aravind",
//         required: true 
//     },
//     {
//         label: "gender",
//         value: "Male",
//         required: true // i
//     },
//     {
//         label: "DOB",
//         value: "17 Jun 2022",
//         required: false
//     },
//     {
//         label: "Phone",
//         value: "",
//         required: true
//     }
// ]

// // let result ; // true | false
// // true && true => true && false =>  false

// let result = formData.reduce((previousValue, element) => {
//     const isCurrentElementValid = element.required ? Boolean(element.value) : true; 
//     return previousValue && isCurrentElementValid;
// }, true)

// console.log(result)




// Math.floor(10.2) // ceil and floor valus for 10.2 => 11, 10


// let num  = 10;// 10 => 11
// const increaseNumber = () => num++;
// const increasePassedNumber = (number) => number++;

// let num1 = increaseNumber(); // 10
// let num2 = increasePassedNumber(num); // num = 11, num2 = 11

// console.log(num1, num2, num) // 10, 11, 11

// function func(a = -1){
//     // a = -1
//     console.log(a)
// }
// func(10); // 10
// func() // -1


// function callme(p1, p2 = p){
//     // p1 = #200 , p2 = #200
//     if(p1 === p2){ // #200 === #200
//         console.log("equal")
//     }
//     else{
//         console.log("not equal")
//     }
// }

// let p = {name: "aravind"} // #200

// callme(p)

// BODMAS
// bracket
// D => division
// M => multipl
// A => addition
// S => Subtraction

// 20 + 12 * 2 - 10 / 2


// 20 + 12 * 2 - 5

// 20 + 24 - 5

// 44 - 5

// 39

// function func(){

// }

// var a = "A" ;
// console.log(65 - a) ; 
// // 65 - Number("A") => 65 - NaN = NaN

// 1 - "1" => 1 - Number("1") => 1 - 1 => 0

// let a = 0 ;
// function f(){
//     return a++;
//     // returns a and a will get icrements
// }

// console.log(f()) // 0
// console.log(a) // 1


// let arr = [4, 5, 6, 2, 12]
//                     i
// a = 6, b = 12
// 6


// 6, 5, 12 => 5
// O(nlogn)
// O(n)
// 6


// let str = "aravind" // => "r"

// let obj = {} ;

// for(let i = 0 ; i < str.length; i++){
//     if(obj[str[i]]){
//         // already encountered
//         obj[str[i]] ++;
//     }
//     else{
//         // first time encountered
//         obj[str[i]] = 1;
//     }
// }

// console.log(obj)

// for(let i = 0 ; i < str.length; i++){
//     if(obj[ str[i] ] === 1){
//         console.log(str[i])
//         break;
//     }
// }


// ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
// // a, an, the
// ['Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// ["Tajmahal", "Victoria Memorial", "The Virupaksha Temple"]

// let a = 0, b = 1;
// function fib(n){
//     // n = 5 | 0, 1, 1, 2, 3
//     if(n <= 2){
//         return n-1;
//     }
//     for(let i = 1; i <= n-2; i++){
//         // temp = 1, b = 1 + 0, a = temp
//         let temp = b ;
//         b = a + b;
//         a = temp ;
//     }
//     return b;
// }
// console.log(fib(49))