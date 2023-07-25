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
    console.log("2")
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


// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("aravind") // {successListener: #100 }
//     }, 1000);
// })

// prom.catch((data) => { // #100
//     console.log(data)
// })

/**
 * 
 * Every Promise will have a status PENDING | FULLFILLED | REJECTED
 * Every Promise will also have a data property when it gets settled down.
 */


/*
PROMISE CHAINING
1. Promise Chaining 
2. Promise Concurrancy methods.
3. async/await

Tomorrow: 
fetch API
Auction status App (Complete Frontend app)
Youtube clone (Complete Frontend app)
*/
// Whenever there's a failure in the executor with that error the promise object will get rejected.
// let p = new Promise((resolve, reject) => {
//     console.log(a)
//     resolve({name: "aravind"});
// })

// p.then((data) => {
//     console.log(data)
// })

// p.catch((data) => {
//     console.log(data)
//     console.log("Something in catch")
// })

/*
    *****
    1. then method returns a promise that will indicate the execution or non execution of the callback passed to then method 
       let x = prom.then(cb);

        if `cb` is executed 
            case i: without any error inside `cb`
                => x state will change fullfilled with the data of x being the value returned by `cb`
            case ii: error inside `cb`
                => x state will change to rejected with the data of x being the Error object which occured inside `cb`.

        if `cb` is not executed => x state will change to rejected with the data of x being the value with which `prom` is rejected.


    2. catch method will also returns a promise that will be fullfilled always but will be rejected when there's an error encountered inside the catch.
        let x = prom.catch(cb);

        if `cb` is called
            case i: no error occured inside the `cb` => x (fullfilled) with data returned by the `cb`
            
            case ii: error occured inside the `cb` => 
                x => {rejected, Error}
        if `cb` is not called:
            x will be fullfilled with the data with which the prom is fullfilled
*/

// A promise defines the completion or failure of a task
// PENDING =>
// rejected => 
// fullfilled => 


// function then(cb) {
//     return new Promise((resolve) => {
//         resolve()
//     })
// }
// console.log(then()) // fullfilled






// when all the listeners of a prom are executed completely then the children promises will be mutated
// all the dependent promises will be in pending state intially and they will settled down only when it's parent promise's listeners are completely executed.

// let prom = new Promise((resolve, reject) => {
//     reject(10)
// })
// console.log(prom) // <rejected>
// let x = prom.then((data) => { // #100
//     console.log(1)
// })

// // console.log(x) // pending 

// x.catch(() => { // #300
//     console.log(3)
// })

// prom.catch(() => { // #200
//     console.log(2)
// })
// console.log(x) 
// output : 3 , 2
// microtask queue = [ #300 ]

/*
    The promise object returned by either then method or catch method will be settled down only when all the dependencies (listeners) of parent promise is executed

*/

// let p = new Promise(resolve => {
//     resolve();
// })
// console.log(p)// p => fullfilled
// let x = p.then(() => { // #20
//     console.log(1)
//     console.log(x) // pending
// })
// console.log(x) // pending 
// setTimeout(() => { // #30
//     console.log(x) // x = fullfilled
// })

// microtask queue = [ ]
// callback queue = [ #30 ]


// console.log(x) //  x => pending
// x.catch(() => {
//     console.log(2)
// })

// setTimeout(() => {
//     console.log(x) // fullfilled
// }, 2000)



// let p = new Promise((resolve, reject) => {
//     resolve(20);
// })

// let x = p.then((data) => { console.log(data) }) // 20

// x.catch((data) =>  console.log(data) )
// x.then((data) => console.log(data))

/**
 * then method's promise 
 * 
 * let x = promise.then(cb);
 * 
 * case i. when the `cb` is executed 
 *         1) cb Executed properly 
*                  => x => fullfilled with the data returned by cb
 *          
 *         2) Error occured inside cb 
*                  => x => rejected with the data being the error object
 * case ii. when the `cb` is not executed ( promise gets rejected )
 *          `x` will be rejected with the data with which `promise` is rejected
 */

// let p = new Promise((resolve, reject) => {
//     resolve(100) // 
// })

// let y = p.catch((data) => {
//     return 236; 
// })

// setTimeout(() => {
//     console.log(y) // fullfilled <100>
// }, 2000)

/**
 * 
 * let  y = prom.catch(cb);
 * 
 * case i: when `cb` gets executed ( when prom is rejected ) 
 *          1) `cb` executes completely without any error.
 *               y will be fullfilled with data returned by cb
 *          2) Error occurs inside the `cb`
 *              y will be rejected with data being the error object.
 * case ii.
 *      When the `cb` doesn't execute at all ( when prom is fullfilled )
 *      the promise y will be fullfilled with the data being the data with which the parent promise (prom) is fullfilled with.
 *  */


// let p = new Promise((resolve, reject) => resolve(200))
// // p = <fullfilled> 200
// let x = p.then((data) => {
//     console.log(data) // 200
//     return 198 ;
//     // x => <fullfilled> 198
// })
// let y = x.catch((data) => {
//     console.log(data) // 198
//     return 342 ;
//     // since this function is not gonna be executed so y is going to be fullfilled with data with which it's parent promise (x) is fullfilled with.
// })

// y.then((data) => {
//     console.log(data) // 198
// })
// y is also promise

/*
Practice Question: 

let p = new Promise((resolve, reject) => {
    reject(10);
});

let x = p.then((data) => {
    console.log(data) // 10
})
// x <rejected> 10

let y = x.then((data) => {
    console.log(data) // undefined
    console.log(data.name) // undefined.name => Error
    // y <rejected> property name doesn't exist on undefined
})
// since x is rejected , y will also get rejected with same data
// y <rejected> 10

y.catch((err) => {
    console.log(err) // 10
})
*/

// let p = new Promise((resolve, reject) => {
//     reject(10);
// })
// // p will be settled with FULLFILLED
// p.then(data => {
//     console.log(data)
//     return 78;
// })

// p.finally(() => {
//     console.log("finally")
// })


// let prom = new Promise((resolve, reject) => {
//     resolve({name: "aravind"})
// })

// let y = prom.catch((data) => {
//     console.log("something") // 
//     return data.name // 
// })
// // since the prom is fullfilled y will also be fullfilled with the same data
// // y <fullfilled> {name: "aravind"}
// y.then(data => {
//     console.log(data) // {name: "aravind"}
// })



/* Concurrancy Methods 
    these are static methods in a promise class
*/

// class Test {
//     static method1(){
//         console.log("static method")
//     }
// }
// Test.method1();
let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000)
})

let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(20);
    }, 2000)
})

let prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(30);
    }, 3000)
})

// let x = Promise.all([prom1, prom2, prom3])
// x will be fullfilled when all the list of promises are fullfilled
// x will rejected when atleast one promise in the list is rejected


// let x = Promise.any([prom1, prom2, prom3])
// any method figures the first resolved promise in a list


// let x = Promise.race([prom1, prom2, prom3])
// race method figures out the earliest settled promise accordingly it will settle the returned promise(x);
// race method returns a promise that will settle with the earliest settled promise.

// let x = Promise.allSettled([prom1, prom2, prom3])

// console.log(Promise.resolve("something"))
// console.log(Promise.reject(10))

// x.then((data) => {
//     console.log(data) // [10, 20, 30]
// })
// x.catch((data) => {
//     console.log(data)
// })