// #parent , .child

// body = {
//     properties,
//     children: [
//         {
//             div,
//             properties,
//             children: [
//                 {
//                     div,
//                     properties,
//                     children: []
//                 },
//                 {
//                     span,
//                     properties,
//                     children: []
//                 }
//             ]
//         },
//         {
//             p,
//             properties,
//             children: []
//         }
//     ]
// }

// window.document

/*
To retrive an element's reference (object) from
- the DOM tree there are many methods available in the document object


1. getElementById("para");
2. getElementsByClassName("child") // 2 => Array
3. getElementsByTagName("div") // 2 => Array
4. querySelectorAll("body div"); // Array = [ {} ]
5. querySelector("body div"); 
*/

// class HTMLCollection extends Array {

// }
// let paraElement = document.getElementById("para") ;

// console.log( paraElement.innerText)


 // .child 


//  let elements = document.getElementsByClassName("child") ;


// let para = elements[1] ;

// // console.log(para.style)

// let computedStyle = getComputedStyle(para); 

// console.log({x: para.tagName})
const inputs = document.getElementsByTagName("input");
// console.log(inputs.item(0) === inputs[0])
// console.log((inputs.namedItem("aravind") === inputs[0]) && (inputs[0] === inputs.item(0)))
// const button = document.getElementsByTagName("button")[0]; 

// function execute() {
//     if(button.innerText === "disable"){
//         input.disabled = true ;
//         button.innerText = "enable";
//     }
//     else {
//         input.disabled = false ; // enabling the input 
//         button.innerText = "disable"; 
//     }
// }



document.getElementById("test").style.color = "orange" ;