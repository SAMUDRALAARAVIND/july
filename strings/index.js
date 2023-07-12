/*
    strings  
*/
// "" , '', ``
let arr = [4, 1, true]
// let str = "cl$as$s$" ;
// ["cl", "as", "s"]
// 'c' + 'a' + 's' => "cas" ;

// arr[1] = 22 ;
// console.log(arr)
// let evenChars = '' ;
// for(let i = 0 ; i <= str.length; i+=1){
//     evenChars += str[i]; 
// }
// console.log(evenChars)
// console.log(str.charAt(1).length) // 'l'.length
// console.log(str.length)


// let fragments = str.split("$")
// console.log(fragments)

// query parameters


// https://google.com/api?q=javascript&browser=chrome

// {
//     q: "javascript",
//     browser: "chrome"
// }

// let url = "https://google.com/api?q=javascript&browser=chrome&user=aravind" ;

// let queries = url.split("?")[1] ;
// let queryParameters = {} ;
// // ["q=javascript", "browser=chrome"]
// queries.split("&").forEach(item => {
//     let keyValue = item.split("=")  // ["q" , "javascript"]
//     queryParameters[ keyValue[0] ] = keyValue[1];
// })

// console.log(queryParameters)

// let obj = {
// } ;
// let key = "user" ;
// let value = "aravind" ; // {user: "aravind"}
// // obj[key] = value ;
// obj[key] = value ; // 
// console.log(obj)


// let str = "f2 module" ;

// splice
// [1, 4)
// console.log(str.slice())
// console.log(str.substring())


// template strings 

// String.format("sjkkksl {} mddk {}" , 10, 20)

// Hi emailOftheuser
// Hi Aravind, you've solve 12 medium, 10 easy, 5 hard question

// let info = {
//     name: "Aravind",
//     medium: 10,
//     hard: 12,
//     easy: 5
// }

// let formattedStr = "Hi "+info.name+" , you've solved "+info.medium+" medium, "+info.easy+" easy, "+info.hard+ " hard question";


// let formattedStr = `Hi ${info.name} you've solved ${info.medium} medium, ${info.easy} Easy, ${info.hard} hard questions`;


// let str = "This is f2 module.\nlearning js in this module";
// console.log(str)
// escape charecter

// Hi "Aravind"

// let str = "Hi \"Aravind\" "
// console.log(str)


// longest valid peranthesis

// () => 2 
// (() => 2
// ())(( ) )) => 4
// let str = "()()((())"
// i => )
// i+1 => (  | (

// )(
// ((

// i => ( 
// i+1 => )

// ((
// ()

/*
( (  )( )
  1  4
( ( )
  5 6
    3 - 1 = 2
    3 - 2 + 1 = 2 ()
    4 - 1 + 1 = 4 (())
    4 - 0 = 4 (())
    6 - 0 = 6 (())()
*/



// -1 =>  i - (-1) => 1 - (-1) => 2

/*
let str = "())(()())()) " ; 
let stack  = [
    [str[0], 0]
] ;
let max = 0 ;
for(let i = 1; i < str.length; i++){ 
    if(str[i] === ')'){
        let lastIndex = stack.length - 1 ;
        if(lastIndex >= 0 && stack[lastIndex][0] === "(" ){
            stack.pop();
            const possibleLength = stack.length === 0 ? i + 1 : i - stack[lastIndex - 1][1] ;
            console.log(possibleLength)
            max = max > possibleLength ? max : possibleLength; 
        }
        else{
            stack.push([str[i], i]) ;
        }
    }
    else{
        stack.push([str[i], i]);
    }
}
console.log(max)

*/

//  i = 8
// max = 0 => 2 => 4 => 8
//  2 - 0 = 2
//  5 - 3 = 2

//  7 - 3 = 4
//  8 - 0 = 8

// let str = "  a abc " ;
// console.log({ans: str.trim()})


// spread operator
// ... can be used with sequence type data structures and {} 

// array, string,

// let arr1 = [4, 5, false]
// // ...[1, 2, 3] => 1, 2, 3
// let arr2 = [...arr1]
// // 4, 5, false
// // [3, 4, 5, false]
// console.log()

// let x = [4, 5, false]

// function callme(a, b , ...x){
//     console.log(x)
// }

// callme(10, 20, 30, 40, 50)
//  30, 40, 50 => ...[30, 40, 50] = ...x
// x = [30, 40, 50]

// ...[20, 30] = x

// let obj1 = {a : 1,b : 2}
// // ...{a: 1, b: 2} = a:1, b: 1
// let obj2 = {
//     x: 10, 
//     ...obj1,
//     y: 20
// }
// console.log(obj2)

// let str = "abc" ; 
// // ..."abc" = "a", "b", "c" 
// let arr1 = [1, 2, ...str, 3]
// console.log(arr1)

// function callme(a, b , c){
//     console.log(a, b, c)
// }
// callme(..."abc") // callme("a", "b", "c")

// ..."abc" => "a", "b", "c"

// callme("a", "b", "c") 
// "a", "b", "c" = ...["a", "b", "c"] = ...x
// x = ["a", "b", "c"]


// "abc", "mno" = ...["abc", "mno"] = ...x
// "abc" => ...["abc"] = ...x

// x = ["abc"]
// ["a", "b" , "c"]
// abc


// Destructuring => objects and arrays 


// let a = [3, 4]
// // let b = a[0];
// // let c = a[1] ;

// // from the array [3, 4] destructing elements to variables a and b
// let [b, c] = a
// console.log(b, c) 



// function callme([a, b]){
//     console.log(a, b)
// }
// callme("10")
// ...[10, 20] = 10, 20 => 
// [a, b] = 10
// [a, b] = [10, 20]

// let [x, y] = "10"; 
// console.log(x, y)

// let obj = {
//     name: "aravind",
//     gender: "male",
//     age: 22
// }

// let {name, age1, gender} = {
//     name: "aravind",
//     gender: "male",
//     age: 22
// } ;
// // let name = obj.name 
// // let gender = obj.gender ;
// // let age = obj.age ;

// console.log(name, age1, gender)


// function callme({name}){
//     // name = "aravind", age = undefined
//     console.log(name)
// }

// callme({name: 'aravind', agee: 22})
// let teacher = {a: "aravind"};
// let {a} = "aravind" // "aravind"
// console.log(a) // "aravind"


// global object and this keyword


// Your Script here.

// "AFG" => "NST"
// const lookup = {
//     A: "N",
//     B: "O",
//     C: "P",
//     D: "Q",
//     E: "R",
//     F: "S",
//     G: "T",
//     H: "U",
//     I: "V",
//     J: "W",
//     K: "X",
//     L: "Y",
//     M: "Z",
//     N: "A",
//     O: "B",
//     P: "C",
//     Q: "D",
//     R: "E",
//     S: "F",
//     T: "G",
//     U: "H",
//     V: "I",
//     W: "J",
//     X: "K",
//     Y: "L",
//     Z: "M",
//     "?": "?",
//     ",": ",",
//   };
  
// let A = "A".charCodeAt(0); /// 65
// let Z = "Z".charCodeAt(0); // 90
// function rot13(str) {
//     let ans = "" ; // "" => "$N#A"
//     // str = "$A#N" => "$N#A"
//     for(let i = 0; i < str.length; i++){
//         // i = 0
//         let currentChar = str[i].charCodeAt(0);
//         if(currentChar <= Z && currentChar >= A){
//             ans += lookup[str[i]]
//         }
//         else {
//             ans += str[i] ;
//         }
//     }
//     return ans ;
// }
  
//   window.rot13 = rot13;
  

// map, filter, forEach, reduce => higher order function 
// push(element), pop(), 

// let arr2 = [4, 5, 6, 4, 9, 10, 20]
// arr2.sort((a, b) => b-a) // 
// console.log(arr2)

// we sorting the array in increasing order 


// [2, 3, 4, 5]



// left = [2, 4] , right = [3, 5]
//              i               j

