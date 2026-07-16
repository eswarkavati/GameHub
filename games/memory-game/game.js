let matchedPairs = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;

let cards = [];
let currentLevel = "";

const emojiPool = [
    "😀","🎮","🚀","🔥","⭐",
    "🎵","🏆","🍕","⚽","🎯",
    "🎨","🚗","🌈","🐱","🍔"
];

function setLevel(level){
    console.log("Button Clicked:", level);

    currentLevel = level;

    document.getElementById("status")
    .innerText =
    `Level: ${level.toUpperCase()} | Find Matching Pairs`;

    resetGame();
}

function generateCards(){
    console.log("Cards Length:", cards.length);

    let pairCount;

    if(currentLevel === "easy"){

        pairCount = Math.random() < 0.5 ? 4 : 6;

    }else{

        pairCount = Math.random() < 0.5 ? 8 : 10;
    }

    let shuffledEmojis = [...emojiPool];

    shuffleArray(shuffledEmojis);

    let selected = shuffledEmojis.slice(0, pairCount);

    cards = [];

    for(let emoji of selected){

        cards.push(emoji);
        cards.push(emoji);
    }

    shuffleArray(cards);
    console.log("Cards Length:", cards.length);

    createBoard();
}

function createBoard(){

    let board =
    document.getElementById("memoryBoard");

    board.innerHTML = "";

    let columns;

    if(cards.length === 8){

    columns = 4;
}
else if(cards.length === 12){

    columns = 4;
}
else if(cards.length === 16){

    columns = 4;
}
else{

    columns = 5;
}

    board.style.gridTemplateColumns =
    `repeat(${columns},100px)`;

    for(let i = 0; i < cards.length; i++){

        let btn =
        document.createElement("button");

        btn.className = "memory-card";

        btn.innerText = "?";

        btn.onclick = function(){

            flipCard(i);
        };

        board.appendChild(btn);
    }
}
function shuffleArray(array){

    for(
        let i = array.length - 1;
        i > 0;
        i--
    ){

        let j =
        Math.floor(
            Math.random() * (i + 1)
        );

        [array[i], array[j]] =
        [array[j], array[i]];
    }

    return array;
}
function flipCard(index){

    if(lockBoard){
        return;
    }

    let buttons =
    document.getElementsByClassName("memory-card");

    if(buttons[index].innerText !== "?"){
        return;
    }

    buttons[index].innerText =
    cards[index];

    if(firstCard === null){

        firstCard = index;
        return;
    }

    if(index === firstCard){
        return;
    }

    secondCard = index;

    checkMatch();
}

function checkMatch(){

    let buttons =
    document.getElementsByClassName("memory-card");

    if(cards[firstCard] === cards[secondCard]){

        matchedPairs++;

        firstCard = null;
        secondCard = null;

        if(
            matchedPairs === cards.length / 2
        ){

            document.getElementById("status")
            .innerText =
            "🎉 Congratulations! You Won!";
        }

        return;
    }

    lockBoard = true;

    setTimeout(() => {

        buttons[firstCard].innerText = "?";
        buttons[secondCard].innerText = "?";

        firstCard = null;
        secondCard = null;

        lockBoard = false;

    },1000);
}

function resetGame(){

    console.log("Level:", currentLevel);

    matchedPairs = 0;
    firstCard = null;
    secondCard = null;
    lockBoard = false;

    document.getElementById("status")
    .innerText =
    `Level: ${currentLevel.toUpperCase()} | Find Matching Pairs`;

    generateCards();
}

function goHome(){

    window.location.href =
    "../../index.html";
}

resetGame();