/*

*/

// const paraRef = document.getElementById("p") ;

// let spanElements = paraRef.getElementsByTagName("span") ;
// const elements = paraRef.children ; // list of children nodes
// console.log(elements)
// paraRef= 

// for(let i = 0 ; i < elements.length; i++) {
//     if(elements[i].tagName === "SPAN"){
//         elements[i].style.color = "red" ;
//     }
// }

// paraRef.parentNode.style.border = "2px solid red" ;

// console.log(paraRef.getAttribute("style"))
// aravind
/*
    <p id="p" name="a" style="color: red" ></p>
*/
// paraRef.setAttribute("data-name" , "Ranjith");

// paraRef.setAttribute("id" , "Ranjith") ;// updatable 
// console.log(paraRef.getAttribute("data-name"))
// Ranjith



/*
Asynchronous Javascript: 
    1. Event Loop and Callback queue and Microtask queue.
    2. JSON Methods( straight forward to understand)
    3. Promises and Promise chaining
    4. async/await
    5. fetch API (used to interact with realtime servers)
    6. Project 
*/
// setTimeout's task is to register a function with the scheduler for the desired time.
// function callme() {
//     console.log("2")
// }
// console.log("1")
// window.setTimeout(callme , 3000)
// console.log("3") // 3


// output: 1 , 3 , 2
/*
1. Event loop monitors callstack and callback queue continuously.
2. when ever a function waiting in callback queue and the callstack is also empty 
    then the function will be pushed into the callstack.
*/
// output: abcd 2 1 3
/*
console.log("a") // t = 0s
setTimeout(() => { // t = 0.1ms #100 , t = 2000.1ms
    console.log(1)
}, 2000);
console.log("b") // t = 0.3ms
setTimeout(() => { // t = 0.5ms #200, t = 1000.5ms
    console.log(2)
}, 1000)
console.log("c") // t = 0.7ms 
setTimeout(() => { // t = 0.9ms #300, t = 2000.9ms
    console.log(3)
}, 2000);
console.log("d") // t = 0.9ms 
*/
/*
let x = 1; // t = 0s
setTimeout(() => { // t = 0.1ms #200 , t = 100.1ms
    console.log("1")
}, 100)
setTimeout(() => { // t = 0.3ms #300 , t = 50.3ms
    console.log("2")
}, 50)
console.time("a");// t = 0.3ms
for(let i  = 0; i < 5*10e8; i++){}
console.timeEnd("a"); // t = 4000.3ms
*/

// microtask queue
// output : 1, 3 , 2
// console.log(1)
// queueMicrotask(() => {
//     console.log(2)
// });
// console.log(3)

// event loop gives higher priority to mq over cq 


// setTimeout(() => { // #100 => callback queue , t = 0ms , t = 0ms
//     console.log("callback queue")
// }, 0)

// for(let i  = 0; i < 5*10e8; i++){} // t  = 4000ms

// queueMicrotask(() => { // #300 => microtask queue , t = 4000.1ms
//     console.log("microtask queue")
// })

/*
queueMicrotask(() => console.log(1)) // #100 

setTimeout(() => console.log(2)) // #200 

queueMicrotask(() => console.log(3)) // #300

// microtask queue = []
// callback queue = []

// event loop = #100 => empty callstack =>  #300  => empty callstack =>  #200 => empty callstack

// output = 1, 3, 2
*/

console.log(1)
setTimeout(() => {  // #100
    console.log(2)
    queueMicrotask(() => console.log(4)) // #200
    console.log(3)
})

queueMicrotask(() => { // #300
    console.log(6)
    setTimeout(() => { // #400
        console.log(5)
    }, 0)
    console.log(7)
})
console.log(8)

// output: 1, 8, 6, 7, 2, 3, 4, 5
/*
    microtask queue = [ ]
    callback queue  = [ ]
    ECS -> empty call stack
    eventLoop = 136 line => ECS => #300 => ECS => #100 => ECS => #200 => ECS => #400 => ECS
*/