// const button = document.getElementsByTagName("button")[0] ;

// let students = [
//     "sukesh", 
//     "saikumar",
//     "rajesh"
// ]

// button.addEventListener("click", () => {
//     // create a bold element and append it inside the container
//     const bold = document.createElement('b') ;
//     // <b></b>
//     bold.innerText = "Aravind" ;
//     // <b>Aravind</b>
//     const container = document.getElementById("container");
//     container.appendChild(bold);
// })

// const container = document.getElementById("container");

// button.addEventListener("click", () => {
//     students.forEach(student => {
//         const bold = document.createElement("b");
//         bold.innerText = student ;
//         bold.style.margin = "10px"; 
//         container.appendChild(bold);
//     })
// })

/*
const form = document.querySelector("form") ;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formRef = event.target ;
    let elements = formRef.elements ;

    let userInfo = {} ;

    userInfo["dummy"] = "abc" ;

    for(let i = 0 ; i < elements.length; i++) {
        elements[i].name && (userInfo[elements[i].name] = elements[i].value)
    }
    console.log(userInfo)

    // SEND DATA TO SERVER
})
*/

// const input = document.querySelector("input");

// input.addEventListener("focus" , () => {
//     console.log("focused the input")
// })

// input.addEventListener("click", () => {
//     console.log("clicked on input")
// })

// input.addEventListener("change", (e) => {
//     console.log(e.target.value)
// })

// input.addEventListener("keyup", (e) => {
//         console.log(e.target.value)
// })

/**
 <div class="modal">
        <div class="modal-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum?</p>
            <button>Close</button>
        </div>
    </div>
 */
// const button = document.getElementById("btn");
// button.addEventListener("click", () => {
//     const modal = document.createElement("div");
//     modal.className = "modal" ;
//     const modalContainer = document.createElement("div");
//     modalContainer.className = "modal-container" ;
//     modal.appendChild(modalContainer);

//     let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum?` ;

//     const p = document.createElement("p");
//     p.innerText = str ;

//     const closeButton = document.createElement("button");
//     closeButton.innerText = "Close Modal" ;

//     const closeModal = () => {
//         // write the logic to close the modal
//         modal.remove();
//     }

//     closeButton.addEventListener("click", closeModal)

//     modal.addEventListener("click", closeModal);

//     modalContainer.appendChild(p);
//     modalContainer.appendChild(closeButton);

//     document.body.appendChild(modal);
// })

/*
card => task 

task = {
    title: '',
    assignee: 'Aravind',
    status: "In progress" | "Done" | "Todo"
}


*/



// const span = document.querySelector("#container > span") // #300
// // span => object (HTML Object in the HEAP memory) 
// const container1 = document.getElementById("container1") ;

// function copyElement() {
//     let newSpan = span.cloneNode(true);
//     console.log(newSpan) // #400
//     console.log(span) // #300
//     console.log(span === newSpan) // #300 === #400
//     container1.appendChild(newSpan); 
// }


const container = document.getElementById("container");
const container1 = document.getElementById("container1");

const draggableElement = document.querySelector("#container > span") ; // span



draggableElement.addEventListener("dragstart" , (e) => {
    e.dataTransfer.setData("element", e.target.id) // e.target === draggableElement.id = "source"
    console.log("started dragging")
});

// container1.addEventListener("dragover", () => {
//     console.log("dragging some element onto me")
// })

// container1.addEventListener("dragenter" , (e) => {
//     console.log("entered some element onto me")
// })

// container1.addEventListener("dragleave", () => {
//     console.log("some element left from me")
// })

container1.addEventListener("dragover", (e) => {
    container1.style.border = "3px dotted green";
    e.preventDefault();
})

container1.addEventListener("drop", (e) => {
    // e.target => container1
    const draggedElementId = e.dataTransfer.getData("element");  // draggedElementId = "source"
    const sourceElement = document.getElementById(draggedElementId) ;// document.getElementById("source")
    console.log(sourceElement.draggable)
    sourceElement.draggable = false ; // Boolean("false") => true 
    e.target.style.border = "2px solid blue"
    e.target.appendChild(sourceElement);
})

/**
 * 
 * dragstart(span) => dragenter(container1) => dragover(container1) => drop(container1)
 *  {key: value} =>  {key: value} => {key: value} => {key: value}
 *  {id: "span"} => {id: "span"} => {id: "span"} => {id: "span"}
 */

const test = document.getElementById("test");
console.log(test.childNodes)// all child nodes including text nodes 5

console.log(test.children) // only HTML element children excluding text nodes 2