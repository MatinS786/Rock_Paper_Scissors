let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 

const userScore1 = document.querySelector("#user-score");
const compScore1 = document.querySelector("#comp-score");

const drawGame = ()=> {
    console.log("Game Was a Draw!")
    msg.innerText = "Game Was a Draw!"
    msg.style.backgroundColor = "white";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScore1.innerText = userScore;
        console.log("You Win!")
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScore1.innerText = compScore;
        console.log("You Lose!")
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}

const playGame = (userChoice) => {
    console.log("user choice",userChoice)
    const compChoice = genCompChoice();
    console.log("comp choice",compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
         
}};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});