/*
    1. this keyword
    2. DOM Introduction
*/

/*
class Person {
    constructor(name , age){
        this.name = name ;
        this.age = age ;
    }
    callme(){
        // this = #300
        console.log(this.name) // "aravind"
        this.name = "samudrala aravind"; // updating the name at #300
    }
    static abc(){
        console.log("static method")
    }
}

let p1 = new Person("Kumar", 20); // p1 = #200
let p2 = new Person("aravind", 22); // p2 = #300

p2.callme();
console.log(p2.name) // #300.name = fullname
*/


// in java we can use this keyword only inside a function

// in javascript this keyword is valid everywhere(global and local).

// this => object

/*
Using this keyword inside global
*/
// console.log(window.origin)
// console.log(this.origin)
// console.log(this) ; // window is global object in the browser environment.

// console.log(this.aa)
// function aa(){
//     console.log("Fgdgd`")
// }
// console.log(this.aa)

// var, function 
// window = #400
// function callme(){
//     // this = #400
//     console.log(this) // window
// }
// console.log(this.callme)
// window.callme(); // window = {callme: f}

/**
 * 
 * Variables declared with function or var keywords will become the part of window(global) object Only when they are declared in the global scope and not inside a function scope.
 * 
 * Arrow functions are made in such a way that this keyword has no meaning inside them.
 */

// console.log(this) // this === window 
// let callme = () => {
//     // inside arrow functions `this` is treated as variables.
//     console.log(this)//  window
// }

// // console.log(window.callme) // undefined, f
// callme(); 

// window = #400
// console.log(this === window) // true
// console.log(this) // window
// let obj = { // #300
//     x: 'Abhishek',
//     printName: () => {
//         // this
//        console.log(this) // this variable is accessed from parent context (Global) => window
//     }
// }

/*
    #300 = {
        name: "abhishek",
        printName: #100
    }
*/

// obj.printName();

// function aaa(){
//     var aaaa = 20;
//     function aa(){
//         console.log("kjkd")
//     }
//     aa();
// }

// aaa();

// console.log(window.aaa)
// console.log(window.aa)
// console.log(window.aaaa)

// when you call a non-arrow function(regular function) without any object in front of it then the `this` keyword inside such a function will always be global object(window)
// window = #400
// let obj = { // #300
//     a: 1,
//     b: 2,
//     c: function(){
//         // this keyword will capture the object whoever called the function 
//         // this = obj
//         // this keyword is has meaning
//         console.log(this); // obj
//         let f = () => {
//             // inside arrow function this keywords are treated just like variable
//             console.log(this)// obj
//         };

//         let f2 = function(){
//             // this = window
//             console.log(this); 
//         }

//         f2();

//         f(); 
//     },
//     d: { // #500
//         a: 10,
//         b: 20,
//         c: () => {
//             // this = window 
//             console.log(this.a + this.b)
//         }
//     }
// }

// obj.d.c();


// let root =  { // #300
//     className: "container",
//     id: "root",
//     tagName: "div",
//     children: [
//         { // #200
//             tagName: "p",
//             className: "para",
//             children: [
//                 { // #250
//                     tagName: "span",
//                     innerText: "Span 1",
//                     children: [],
//                     id: 'sukesh'
//                 },
//                 { // #280
//                     tagName: "span",
//                     innerText: "Span 2",
//                     children: [],
//                     id: "abc"
//                 }
//             ]
//         },
//         { // #500
//             tagName: "b",
//             id:"bold",
//             style: {
//                 color: "red",
//                 fontSize: "20px"
//             },
//             innerText: "Something else"
//         }
//     ],
// };


// // with #300 

// root.children[1].innerText = "Some new Text" 

// // #500 = bold

// let bold // #500

// bold.innerText = "Some new Text"


// console.log(window.document)
// document object knows the entire dom tree (DOM Object)

// let result = document.getElementById("sukesh");
// console.log(result);
// result.style.color = "red" ;
// result.innerText = "Sukesh Reddy";
// result.style.border = "2px solid green"


/**
 * 1. Representation of HTML document in the form of javascript objectes is called DOM 
 * 2. All the HTMl and CSS together is represented as a big javascript object(i.e actually TREE data structure). That Object we call as DOM / DOM tree.
 * 
 * 3. HTML is parsed into javascript object.
 * 
 * 4 .Every HTML element(Node) is an Object located in the HEAP memory.
 * 5. To Edit/manipulate an HTML element dynamically (using javascript), you need the HEAP memory reference of that element.
 * 
 * 6. document object is the one which knows all the references or the parsed HTML object.
 * 7. some functionalies inside this document object can serve the references of HTML to us .
 * 8. one such functionality is `getElementById()` method which takes the id of desired html element and searches for that element in the DOM tree(parsed HTML Object) and returns that reference(Heap Memory address).
 * 
 */