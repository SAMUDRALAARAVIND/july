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

const input = document.querySelector("input");

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

