/*
    DOM manipulations
*/

// function callme(){
//     console.log(x) // undefined
//     var x = 20; 
//     console.log(x) // 20
// }
// callme(); // pause
// console.log(x) // error: x is not defined

/*
    u , 20, u
    u, 20, 20
    u, 20, error
*/
// boolean => true, false 
// undefined => undefined

// undefined and null 
// null is a value of object data type
// true is a value of boolean data type

// let x = {} ; // #200
// let y = null ; // #0 pointing empty heap memory address
// console.log(typeof y) // object

// Block {} 


// if() { // code }
// do { // code } while(cdn);
// while(condition) { // code } 
// for(;;) { // code }
// else if(cdn){ // code } 
// else { // code }
// switch(variable) { // code }
// case val : { // code }

// if(true) {
//     const a = 20 ;
//     console.log(a) ; // 20
//     a = 21 ;
// }
// console.log(a) // not defined
// let and const declared variables are block scoped
// can we have multiple variables with same name  in a block`

// if(true){ // yellow
//     let a = 20; 
//     if(true){ // pink
//         let x = 300; 
//         console.log(a)
//     }
//     console.log(x)
//     console.log(a) // 20
// }

// var declared variables are not block scoped but context scoped

// x = undefined
// console.log(x)
// if(true){
//     console.log(x)
//     if(true){
//         console.log(x)
//         if(true){
//             var x = 30; 
//             console.log(x)
//         }
//     }
// }

// function f(){
//     console.log(y) // undefined
//     if(true){
//         if(true){
//             var y = 15; 
//         }
//         console.log(y) // 15
//     }
// }
// f();
// console.log(y) // not defined
