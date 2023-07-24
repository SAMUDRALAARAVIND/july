/**
pending

rejected
fullfilled

every promise will have 3 possible states 
1. every promise will be in pending state as soon as it's created
2.  the state of the promise may change either to rejected or fullfilled state.

3. Every promise has 3 possible states and goes through 2 state at max .

4. The status of a promise once turned into either fullfilled / rejected can not be mutated back to pending.

*/

/*

let promise = loadData()

*/

// a promise in js is a object instance of built in Promise class.

// function x(a){
//     console.log("inside x", a)
// }

// x(11);

// class Test {
//     constructor(executor) {
//         let resolve = () => {
//             console.log("inside resolve")
//         };
//         let reject = () => {
//             console.log("inside reject")
//         } // #200
//         executor(resolve, reject); 
//     }
// }

// let t = new Test((resolve, reject) => {
//     // resolve = 10, reject = #200
//     // console.log(typeof resolve)
//     // console.log(typeof reject)
//     resolve();
//     console.log("something")
// }); 

/**
 * We are passing a function to the constructor of Test class ( executor function )
 * The executor will be called inside the constructor by passing two arguments ( resolve [ function ], reject [ function ])
 */

// console.log(1)
// let promise = new Promise(() => {
//     console.log("something")
// }); 
// console.log(promise)
// console.log(2)


// function callme(executor){
//     let resolve = () => {
//         console.log("Inside resolve")
//     }
//     let reject = () => {
//         console.log("Inside reject")
//     }

//     executor(resolve , reject);
// }

// callme((resolve, reject) => {
//     // console.log(typeof resolve) // function
//     // console.log(typeof reject) // function
//     resolve();
//     reject();
//     console.log("Inside executor")
// })

// class Test {
//     constructor(executor) {
//         let resolve = () => {
//             console.log("inside resolve")
//         };
//         let reject = () => {
//             console.log("inside reject")
//         } // #200
//         executor(resolve, reject); 
//     }
// }

// let t = new Test((resolve, reject) => {
//     // resolve = 10, reject = #200
//     // console.log(typeof resolve)
//     // console.log(typeof reject)
//     resolve();
//     console.log("something")
// }); 



// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => { // #100
//         console.log(2)
//         reject()
//     })
//     queueMicrotask(() => { // #200
//         console.log(1)
//         resolve(); // prom state mutated to fullfilled
//         console.log(prom)
//     }); 
// })

// console.log(prom) 

// setTimeout(() => { // #300
//     console.log(3)
//     console.log(prom)   
// })

// callback queue = [  ] 
// microtask queue = [ ]
// ECS -> Empty call stack 
// Event loop => ECS => #200 => ECS =>  #100 => ECS => #300

// output 
// <pending> , 1 , <fullfilled> , 2 , 3 , <fullfilled>


// output: 
// 1
// 2
// prom <pending>
// 3

// let x , y  ; // x = reject , y = resolve 
// let prom = new Promise((resolve , reject) => {
//     setTimeout(() => { // #100
//         console.log(1)
//         y = resolve;
//     })
//     queueMicrotask(() => { // #200
//         console.log(2)
//         x = reject
//         console.log(prom) // <pending>
//     })
// })
// setTimeout(() => { // #300
//     console.log(prom) // 
//     x(); 
// })
// queueMicrotask(() => { // #400
//     console.log(prom) // 
//     y(); // undefined() => undefined y is not a function .
// })
// output : 2, <pending> , <pending>, error , 1, <pending>
// event loop = ECS => #200  => ECS => #400 => error => ECS => #100 => ECS =>  #300 

// callback queue =  []
// microtask queue = [  ]


// HOME WORK
// function callme(cb){ // #300
//     let prom = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(prom) // <rejected>
//         }, 3000)
//         cb(reject); // reject
//         queueMicrotask(resolve);
//     })
// }

// callme((callback) => {
//     // callback = #40 -> reject
//     // reject() , returns nothing and rejects the promise
//     setTimeout(callback, 2000);
//     // setTimeout( undefined , 2000)
// })
