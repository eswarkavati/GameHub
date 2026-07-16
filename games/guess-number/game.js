let secretNumber;
let maxRange;

function startGame(range){

    maxRange = range;
    secretNumber = Math.floor(Math.random() * range) + 1;

    document.getElementById("levelScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");

    document.getElementById("rangeText").innerText =
        `Guess between 1 and ${range}`;
}

function checkGuess(){

    let guess = Number(document.getElementById("guessInput").value);
    let result = document.getElementById("result");

    if(guess === secretNumber){
        result.innerText = "🎉 Correct!";
    }
    else if(guess > secretNumber){
        result.innerText = "⬆️ Too High";
    }
    else{
        result.innerText = "⬇️ Too Low";
    }
}

function backToLevel(){

    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("levelScreen").classList.remove("hidden");

    document.getElementById("guessInput").value = "";
    document.getElementById("result").innerText = "";
}