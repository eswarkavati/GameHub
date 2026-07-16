let gameMode = "";
let board = [
    "", "", "",
    "", "", "",
    "", "", ""
];

let currentPlayer = "X";
let gameOver = false;

function setMode(mode){

    gameMode = mode;

    if(mode === "pvp"){
        document.getElementById("mode")
        .innerText =
        "👥 Player vs Player";
    }

    else{
        document.getElementById("mode")
        .innerText =
        "🤖 Player vs Computer";
    }

    resetGame();
}

function play(index){

    if(gameMode === ""){
        alert("Select a Game Mode First");
        return;
    }

    if(gameOver){
        return;
    }

    if(gameMode === "ai" && currentPlayer !== "X"){
        return;
    }

    if(board[index] !== ""){
        return;
    }

    board[index] = currentPlayer;

    let cells =
        document.getElementsByClassName("cell");

    cells[index].innerText =
        currentPlayer;

    if(checkWinner()){
        return;
    }

    if(checkDraw()){
        return;
    }

    if(gameMode === "ai"){

        currentPlayer = "O";

        document.getElementById("status")
        .innerText =
        "Computer Thinking...";

        setTimeout(computerMove, 500);
    }

    else{

        if(currentPlayer === "X"){
            currentPlayer = "O";
        }
        else{
            currentPlayer = "X";
        }

        document.getElementById("status")
        .innerText =
        `Player ${currentPlayer} Turn`;
    }
}
function computerMove(){

    let move = findBestMove();

    if(move === -1){

        let emptyCells = [];

        for(let i = 0; i < board.length; i++){

            if(board[i] === ""){
                emptyCells.push(i);
            }
        }

        if(emptyCells.length === 0){
            return;
        }

        move =
        emptyCells[
            Math.floor(Math.random() * emptyCells.length)
        ];
    }

    board[move] = "O";

    let cells =
        document.getElementsByClassName("cell");

    cells[move].innerText = "O";

    if(checkWinner()){
        return;
    }

    if(checkDraw()){
        return;
    }

    currentPlayer = "X";

    document.getElementById("status")
    .innerText =
    "Player X Turn";
}
function findBestMove(){

    let winPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let pattern of winPatterns){

        let a = pattern[0];
        let b = pattern[1];
        let c = pattern[2];

        let values = [
            board[a],
            board[b],
            board[c]
        ];

        let xCount =
            values.filter(v => v === "X").length;

        let emptyCount =
            values.filter(v => v === "").length;

        if(xCount === 2 && emptyCount === 1){

            if(board[a] === "") return a;
            if(board[b] === "") return b;
            if(board[c] === "") return c;
        }
    }

    return -1;
}
function checkWinner(){

    let winPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let pattern of winPatterns){

        let a = pattern[0];
        let b = pattern[1];
        let c = pattern[2];

        if(
            board[a] !== "" &&
            board[a] === board[b] &&
            board[b] === board[c]
        ){

            gameOver = true;

            document.getElementById("status")
            .innerText =
            `🎉 Player ${board[a]} Wins!`;

            return true;
        }
    }

    return false;
}

function checkDraw(){

    for(let i = 0; i < board.length; i++){

        if(board[i] === ""){
            return false;
        }
    }

    gameOver = true;

    document.getElementById("status")
    .innerText =
    "🤝 It's a Draw!";

    return true;
}


function resetGame(){

    board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    currentPlayer = "X";
    gameOver = false;

    let cells =
        document.getElementsByClassName("cell");

    for(let i = 0; i < cells.length; i++){
        cells[i].innerText = "";
    }

    document.getElementById("status")
    .innerText =
    "Player X Turn";
}

function goHome(){
    window.location.href =
    "../../index.html";
}