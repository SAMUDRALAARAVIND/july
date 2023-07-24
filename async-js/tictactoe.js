const gridItems = document.querySelectorAll(".game > div")
const gameContainer = document.getElementsByClassName("game")[0];
const form = document.forms[0] ;
const activePlayer = document.getElementById("active-player");

let player1, player2 ; // 1, 2
let turn  ;
let arr = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

function fillArray(id){
    let value = turn === 1 ? "x" : "o" ;
    let row = id / 3 === Math.floor(id / 3) ? (id / 3) - 1 : parseInt(id / 3) ;
    let column = (id-1) % 3 ; 
    arr[row][column] = value ;

    for(let i = 0 ; i < 3; i++) {
        if(arr[i][0] && arr[i][0]=== arr[i][1] && arr[i][1] === arr[i][2]) {
            // i th row matched 
        }
        if(arr[0][i] && arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]){
            // i th column is matched
        }
    }
    if(arr[0][0] && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
        // main diagonal matched
    }
    if(arr[0][2] && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]){
        // cross diagonal is a match now .
    }
}

form.addEventListener("submit", addPlayers);

function addPlayers(e){
    e.preventDefault();
    player1 = form["name1"].value;
    player2 = form["name2"].value;
    turn = 1;
    updateName()
    gameContainer.setAttribute("data-game-enabled", "true");
}

function updateName(){
    let currentPlayer = turn === 1 ? player1 : player2 ;
    activePlayer.innerText = `${currentPlayer} turn` ;
}

function onClickItem(event) {
    const gridItem = event.target;
    if(gridItem.innerText !== ""){
        return ;
    }
    const isGameEnabled = gameContainer.getAttribute("data-game-enabled")
    if(isGameEnabled === "false"){
        return ;
    }
    if(turn === 1) {
        gridItem.innerText = "X";
    }
    else {
        gridItem.innerText = "O" ;
    }
    fillArray(Number(gridItem.id));
    turn = turn === 1 ? 2 : 1 ;
    updateName();
}

for(let i = 0 ; i < gridItems.length; i++) {
    gridItems[i].addEventListener("click", onClickItem)
}

/*
    [
        ["x", "o", "x"],
        ["",  "o",  ""],
        ["x", "",  "o"]
    ]

*/