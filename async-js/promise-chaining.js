/*
let prom = new Promise((resolve, reject) => {
    setTimeout(() => { // #100
        queueMicrotask(() => { // #30
            console.log("3")
        })
        resolve()// <pending> -> <fullfilled>
        reject(); // <fullfilled> -> <rejected>
    }, 3000)
})
function successCallback(){ // #200
    console.log("1")
}

function errorCallback(){ // #300
    console.log("2")
}

prom.then(successCallback); 
prom.catch(errorCallback);
*/

// output : 3 , 1

// prom => { success: , error: }
/*
    then and catch methods are just used to attach 
    the references of the callbacks to the prom object 
    in the memory (HEAP).

    The resolve and reject methods of a promise are 
    used to mutate the state of the promise from
    <pending> -> fullfilled , <pending> -> <rejected>
    respectively.

    The another task of resolve and reject is to 
    push the listeners (if any) into microtask queue.
*/




// class Test {
//     then(cb){
//         // cb = #20
//         // this = t
//         this.success = cb ;// t = {success: #20}
//     }
//     catch(cb){
//         // cb = #30
//         // this = t
//         this.error = cb ; // t = {success: #20, error: #30}
//     }
// }

// let t = new Test();
// console.log(t.success) // undefined
// t.then(() => { // #20
//     console.log("then callback")
// })
// console.log(t.success, t.error) // #20 , undefined
// t.catch(() => { // #30
//     console.log("catch callback")
// })
// console.log(t.success, t.error)


// let prom = new Promise((resolve, reject) => {
//     queueMicrotask(reject);// #20
//     queueMicrotask(resolve); // #10
//     setTimeout(() => { // #30
//         prom.then(() => { // #200 // prom = <fullfilled>
//             console.log(1)
//         })
//     }, 2000)
// })

// prom.catch(() => { // #40
//     console.log(2)
// })

// setTimeout(() => { // #50
//     prom.then(() => { // #300 // prom = <fullfilled>
//         console.log(3)
//     })
// }, 3000)
// output: 1 , 3
// prom = {successListener: null, errorListener: #40, state: fullfilled }

// scheduler = {#30 , t = 2s} , {#50, t = 3s}
// microtask queue = [  ]
// callback queue = [ ]
// Event Loop = ECS -> #10 -> ECS -> #20 -> ECS -> #30 -> ECS -> #200 -> ECS -> #50 -> ECS -> #300 -> ECS

// let p = new Promise((resolve, reject) => {
//     resolve(); // no success listener
// })

// console.log(p) // fullfilled

// setTimeout(() => {
//     console.log(1)
// })

// queueMicrotask(() => {
//     console.log("299") // 
// })

// p.then(() => { // p <fullfilled>
//     console.log("300") // it pushes the method into microtask queue
// })


let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("aravind") // {successListener: #100 }
    }, 1000);
})

prom.catch((data) => { // #100
    console.log(data)
})

/**
 * 
 * Every Promise will have a status PENDING | FULLFILLED | REJECTED
 * Every Promise will also have a data property when it gets settled down.
 */