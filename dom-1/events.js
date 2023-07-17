/*
function clickListener(){
    console.log("clicked the button")
}

function mouseEnterListener(){
    console.log("mouse entered")
}

function mouseLeaveListener(){
    console.log("mouse leave event")
}

function doubleClickListener(){
    console.log("double click")
}
*/

/*
const btn = document.getElementById("btn");
const btn2 = document.getElementById("remove");

const listener1 = (event) => {
    console.log("first click listener")
}

const listener2 = () => {
    console.log("second click listener")
}

btn.addEventListener("click" , listener1); 

btn.addEventListener("click", listener2);

btn2.addEventListener("click", () => {
    btn.removeEventListener("click", listener1);
})
// listener1() ;
*/

// const button = document.getElementById("test") ;

// const listener = (event) => {
//     console.log("inside the listener")
//     event.target.style.backgroundColor = "blue" ;
//     //  remove the listener
//     button.removeEventListener("click", listener)
// }

// button.addEventListener("click", listener)

const parent = document.getElementsByClassName("parent")[0] ;
const child = document.getElementsByClassName("child")[0] ;

parent.addEventListener("click", (event) => {
    console.log("parent listener")
})

child.addEventListener("click", (event) => {
    console.log("child listener")
    event.stopPropagation();// stops propagating the event to it's parent elements
})