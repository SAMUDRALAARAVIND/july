// every geo location point is defined with 
// a latitude and logitude.

// function cb(position){
//     console.log(position)
//     // latitude , longitude
// }

// window.navigator.geolocation.getCurrentPosition(cb)

// let prom = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve({a: 10, b: 20})
//     }, 3000)
// })
// console.log(1)

// prom.then((data) => {
//     console.log(data)
// })
// .then(() => {
//     console.log(2)
//     // huge amount of code 
// })
// .then(() => {
//     console.log(3)
// })
// .then(() =>{ 

// })
// asynchronous function
// Always an async function will return a promsie object
// await keyword can be used only inside an async function

// async function call() { // async function #200
//     let prom = new Promise((resolve) => {
//         setTimeout(() => { // #300
//             console.log(1)
//             queueMicrotask(() => { // #500
//                 console.log(99)
//             })
//             resolve(true) 
//             console.log(9)
//         }, 3000);
//     });
//     let result = await prom ;
//     console.log(19)
//     console.log(result)
//     console.log(2)
// }

// call();
// console.log(10)
// GEC = #200 async, 51, 52
// #200 = (prom = #30<fullfilled> true), result = true

// callstack = [ ]

// callback queue = [ ]

// microtask queue = [ ]

// scheduler = [ ] 
// eventloop = ECS => #300 => ECS => #500 => ECS

// output: 10 , 1, 9, 99, true, 2

// async function is used to execute the code in a synchronous manner.
// it is called async function beacuse it synchronises the async operations inside it.
// using the await keyword inside an async function we are not letting the controller goes to next line before it finishes off.



// fetch API (realtime usage of promise)

// async function callme() {
//     let x = new Promise((resolve) => resolve(20));
//     console.log(x) // <rejected> 20
//    let r1 = await x // r1 = 20
//    console.log(r1)
//    return r1 + 19;
// }

// let prom = callme(); // callme is an async function so it returns a promise always.
// console.log(prom) // <pending>
// prom.then(data => {
//     console.log(data)
// })
// prom object will be fullfilled when the entire code inside the async function (callme) is done executing with the data returned by the async function.



// fetch 

// browser[hyderabad] => server[delhi]

// every device which is connected to internet will have a unique address => IP address

// i want to load some data from a server 
// 1. i need to know the ip address of that server.
// 2. That server should i allow my request

// https://bus-booking-accio.onrender.com/all/cities

// let x = fetch("https://bus-booking-accio.onrender.com/all/cities") // 3s
// // data
// x.then((response) => {
//     // console.log(response)
//     let y = response.json();
//     y.then(data => {
//         console.log(data)
//         // DOM manipulation
//         for(let i = 0 ; i < data.cities_list.length; i++){
//             const div = document.createElement("div");
//             div.innerText = data.cities_list[i].city_name;
//             document.body.appendChild(div)
//         }
//     })
// })

// async function loadCities(){ 
//     let url = "https://bus-booking-accio.onrender.com/all/cities" ;
//     let response = await fetch(url);
//     let data = await response.json();
//     for(let i = 0 ; i < data.cities_list.length; i++){
//         const div = document.createElement("div");
//         div.innerText = data.cities_list[i].city_name;
//         document.body.appendChild(div)
//     }
// }

// loadCities();

// api1 12:00:00 PM (delay 3s)
// api2 12:00:01 PM (delay 1s)