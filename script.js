let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    // rock , papper, scissors
};

const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "rgb(9, 9, 33)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;

        console.log("you win!");
        msg.innerText = `You Win Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "orange";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        // console.log("you lose");
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "green";
    }
};

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});