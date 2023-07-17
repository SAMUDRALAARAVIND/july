const inputElement = document.querySelector("#uname") ;

const imageElement = document.getElementsByTagName("img")[0]; 

// function changeType(){
//     imageElement.src = "https://picsum.photos/100/100"
// }

/*
   DOM manipulation
    1. editing an existing element
    2. adding a node / html element into the dom tree.
        i. create the element / html element in the memory first.
        ii. attach the element created onto the DOM tree.
    3. remove an existing node from the DOM tree
*/


// <div class="loader"></div>
// let added = false ;
// const loader = document.getElementsByClassName("loader")[0] ;
// const button = document.getElementById("btn");

// const addLoader = () => {
//     if(added) return ;
//     let newDivElementRef = document.createElement("div");
//     newDivElementRef.className = "loader" ;
//     button.appendChild(newDivElementRef);
//     added = true ;
// }

// [4, 10, 22] => [4, 10, 22, 100]
// append(100)


// [1, 2, 3, 8, 10]
// [1, 2].push(4) => [1, 2, 4]
// 4

/*
const button = document.getElementById("btn"); // #400
// button.remove() // removes #400 node from the DOM tree 

// setTimeout(() => {
//     document.body.appendChild(button);
// }, 3000);

function addElementBetween(){ 
    // should add <h1>Aravind</h1> inside the button
    const h1 = document.createElement("h1");
    // <h1></h1>
    h1.innerText = "Aravind" ;
    // <h1>Aravind</h1>
    const lastElement = button.children[2] ;
    lastElement.remove(); // ditaches the lastElement node from the DOM tree
    button.appendChild(h1);
    // children = [span, b, h1]
    button.appendChild(lastElement)

    button.appendChild(document.createElement("a"))
}

// [3, 2, 10, 22, 10]
// [3, 2] , poppedElements = [10, 22, 10],
// [3, 2, 99]
// [3, 2, 99, 10, 22, 10]
*/

/**
 <div id="container">
    <p>
        <b>I am Aravind</b>
        <b>Age: 100</b>
    </p>
 </div> 
 */

// function addElement() {
//     const container = document.createElement("div");
//     container.id = "container" ;
//     let p = document.createElement("p");

//     let b1 = document.createElement("b");
//     b1.innerText = "Aravind" ;

//     let b2 = document.createElement("b");
//     b2.innerText = 22 ;

//     // p.appendChild(b1);
//     // p.appendChild(b2);
//     p.append(b1, b2);

//     container.appendChild(p);

//     document.body.appendChild(container); 
// }