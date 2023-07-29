/*
let obj =  {
    tagName: "html",
    lang: "en",
    children: [
        {
            tagName: "head",
            children: [
                {
                    tagName: "meta",
                    charset: "UTF-8",
                    children: []
                }
            ]
        },
        {
            tagName: "body",
            children: [
                {
                    tagName: "input",
                    name: "username", 
                    placeholder: "User Name",
                    children: []
                },
                {
                    tagName: "script",
                    src: "./index.js",
                    children: []
                }
            ]
        }
    ]
}

console.log(obj.children[1].children[0].name)
*/

// document.children[0] = <html></html>
// console.log(document.children[0].children[1].children[0])


/*

let container = document.getElementById("container");
// container is the node extracted from the DOM tree
// container = <div id="container" data-name="balveer">Some text</div>

console.log(container.getAttribute("data-name")) // vinay

setTimeout(() => {
    container.setAttribute("data-name", "balveer");
    console.log(container.getAttribute("data-name"));
}, 3000)
*/

// const spans = document.getElementsByClassName("test")
// console.log(spans)

// const span = document.querySelectorAll("#container > .test")
// console.log(span)

/*
Extraction of elements from DOM tree: 

1. getElementsByTagName("h1") => [] 
2. getElementsByClassName("className"); => []
3. getElementById("id") => singleElement
4. querySelector("css-selector") => singleElement
5. querySelectorAll("css-selector") =>  [ ]
*/

// let element = document.querySelector("#container > b.test")
// console.log(element)

/*
 Event Listeners: 
    Event Listeners are the functions in javascript that will be executed upon user makes that event.

    To attach an Event
        1. we need the HTML element's reference (Object).
        2. we can use addEventListener method to add an event on that element.
        3. event Type (click, change, submit, drag , ....) , listener function
*/

//Problem 1: add a change event listener for the input and print the updated value.


// const inputElement = document.querySelector("input");

// inputElement.addEventListener("change", () => {
//     console.log("changed the input")
// });
// inputElement.addEventListener("blur", () => {
//     console.log("blurred the input")
// });
// the event listener function will be registeres outside the callstack when ever user makes that event the registered function will be pushed into callback queue.


// const scrollElement = document.getElementsByClassName("scroll-container")[0];

// scrollElement.addEventListener("scroll", () => {
//     console.log("clicked on the scroll element")
// })


/*
const dynamicElement = document.getElementById("dynamic") ;
const buttons = document.getElementsByTagName("button") ;
const addButton = buttons[0];
const removeButton = buttons[1];
const input = document.getElementsByTagName("input")[0] ;


addButton.addEventListener("click", () => {
    // write code that dynamically adds a class name enetered inside the input.
    let valueEntered = input.value ;
    if(valueEntered === "") return ;

    dynamicElement.classList.add(valueEntered);
})

removeButton.addEventListener('click', () => {
    let valueEntered = input.value ;
    if(valueEntered === "") return ;
    dynamicElement.classList.remove(valueEntered);
})
*/