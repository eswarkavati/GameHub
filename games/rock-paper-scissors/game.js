let humanScore = 0;
let computerScore = 0;


function goHome() {
    window.location.href = "../../index.html";
}


function playGame(userChoice) {

    let choices = ["rock", "paper", "scissors"];

    let computerChoice =
        choices[Math.floor(Math.random() * 3)];

    let icons = {

        rock: "✊",
        paper: "✋",
        scissors: "✌️"

    };

    document.getElementById("human-choice")
        .innerHTML = icons[userChoice];

    document.getElementById("computer-choice")
        .innerHTML = icons[computerChoice];

    let result = "";

    if (userChoice === computerChoice) {

        result = "🤝 Draw";

    }

    else if (

        (userChoice === "rock" &&
            computerChoice === "scissors")

        ||

        (userChoice === "paper" &&
            computerChoice === "rock")

        ||

        (userChoice === "scissors" &&
            computerChoice === "paper")

    ) {

        result = "🎉 Human Wins";

        humanScore++;
    }

    else {

        result = "🤖 Computer Wins";

        computerScore++;
    }

    document.getElementById("result")
        .innerHTML = result;

    document.getElementById("human-score")
        .innerHTML = humanScore;

    document.getElementById("computer-score")
        .innerHTML = computerScore;

}