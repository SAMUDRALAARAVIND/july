// console.log(a + b); // NaN
// var a = 20, b;
// console.log(a + b); // 20 + undefined = NaN
// b = "aravind";

/*
1. scope chain
2. primitive and non primitive variables 
3. closures
4. higher order functions
5. Array methods
*/

// let a = 90, b = 10; 

// callme(a + b); // callme = ( )

// function callme(a){
//     let b = 20 ;
//     console.log(a + b)
// }

// function change(){
//     console.log(a)
// }
// change()
// let a = 20 ;

// function x(x){
//     console.log(x + c)
// }
// x(c + "aravind")
// var c = 20 ;
// let a = 20 ;
// function parent(a){
//     let b = 90 ;
//     child(b - a);
//     function child(a) {
//         console.log(x , a , b)
//         // undefined, 50, 90
//     }
// }
// parent(2 * a);
// var x = 200 ;


// let a = 90 ;
// function parent(){
//     let a = 20; 
//     function child(){ // child = #200
//         console.log(a) // 
//     }
//     return child; // child = function 
// }

// let result = parent(); // result = #200
// console.log(result) // #200



// primitive and non primitve

// data types => primitve and non-primitive(reference datatypes)

// let arr = [4 , 5, 10]; 
// let b  = arr ; // [4, 5, 10]
// arr[0] = 23 ;
// console.log(arr[0], b[0])

// number , object = {}
// boolean , array 

/**
 * Primitive : number, boolean, undefined , string (Stack Memory)
 * Non Primitive: arrays, objects (Heap Memory), Function
 */


// let a = 20 ;
// let b = true ;
// let x = [3, 4, 5]; // #204
// let y = x ;
// x[0] = 200 ; // #204[0] = 200
// console.log(x[0], y[0])
// #204[0] , #204[0]  = 200


// function callme(a , b){
//     a = 20 ;
//     b[0] = 90 ; //  #320[0]
// }
// let x = 24, y = [3, 4, 5] 
// callme(x, y);
// console.log(x, y)
// 24 , [90, 4, 5]


// let b = 20 ;

// function a(a){
//     // a = 40
//     function b(){
//         console.log(a + x); // 40 + 100 = 140
//         function c(){
//             console.log(typeof b); // function
//         }
//         c();
//     }
//     return b ;
// }

// let x = 100 ;
// let result = a(2 * b); // a ( 40 )

// result();

// let x = 100;
// function a(){ // a = #200
//     let y = 20 ;
//     function b(){ // b = #100
//         let x = 90;
//         console.log(x + y) // 110
//     }
//     return b ;
// }
// let result = a();
// result();

