function computerPlay() {
    gameOptions = ["Rock", "Paper", "Scissors"];
    return gameOptions[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let winner, winningObject, loosingObject;
    winner = "Computer"
    if (playerSelection === computerSelection) {
        winner = "draw";
    } else {
        playerSelection === "Rock" && computerSelection === "Scissors" ? winner = "Player" : winner;
        playerSelection === "Paper" && computerSelection === "Rock" ? winner = "Player" : winner;
        playerSelection === "Scissors" && computerSelection === "Paper" ? winner = "Player" : winner;
    }
    winningObject = winner === "Computer" ? computerSelection : playerSelection;
    loosingObject = winner === "Computer" ? playerSelection : computerSelection;
    
    return [winner, winningObject, loosingObject];
}

function game(round, playerScore, computerScore) {
    let results;
    while (round < 5) {
        computerSelection = computerPlay();
        playerSelection = caseTransform(prompt());
        if (!validatePlayerSelection(playerSelection)) {
            if (playerSelection === "End") {
                return;
            } else  {
                alert("You won't win anything with '" + playerSelection + "'. Available options: Rock, Paper, Scissors. To exit the game write 'End'");
                game(round, playerScore, computerScore);
                return;
            }
        } else {
            results = playRound(playerSelection, computerSelection);
            results[0] === "Player" ? playerScore++ : playerScore;
            results[0] === "Computer" ? computerScore++ : computerScore;
            printOut(round + 1, results[0], results[1], results[2], playerScore, computerScore);
            round++;
        }
    }
    if (playerScore === computerScore) {
        console.log("It was a draw! Score: " + playerScore + ":" + computerScore);
    } else {
        playerScore > computerScore ? console.log("You win with score: " + playerScore + ":" + computerScore) : console.log("You lose with score: " + playerScore + ":" + computerScore);
    }
}

function printOut(round, winner, winningObject, loosingObject, playerScore, computerScore) {
    console.log("--------------Round: " + round + "---------------");
    if (winner === "draw") {
        console.log(prettyfy("It was a draw!"));
    } else {
        console.log(prettyfy(winner + " wins! " + winningObject + " beats " + loosingObject));
    }
    console.log("-----Score: Player " + playerScore + ":" + computerScore + " Computer------");
    console.log("-------------------------------------");
}

function validatePlayerSelection(playerSelection) {
    if (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors") {
        return true;
    } else {
        return false;
    }
}

function caseTransform (string) {
    let firstChar;
    if (!string) {
        return "this sort of attitude";
    }
    string = string.toLowerCase();
    firstChar = string[0].toUpperCase();
    string = firstChar + string.substr(1);
    return string;
}

function prettyfy(string) {
    while (string.length < 37) {
        string = "-" + string + "-";
    }
    return string;
}

function init() {
    let round, playerScore, computerScore;
    round = playerScore = computerScore = 0;
    game(round, playerScore, computerScore);
}

init();