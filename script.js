
/*
a function called getComputerChoice that will randomly return
either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function
in the game to make the computer’s play.

create a variable for the result

randomly return rock, paper or scissors
    randomly choose betweeen 1 and 3 inclusive

store the value in result
return the result
*/


//This function returns either Rock, Paper or Scissors randomly
function getComputerChoice() {

    let result;

    //randomly choose betweeen 1 and 3 inclusive
    result = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    //asigns random choosen number to either rock, paper or scissors
    //1 = Rock
    //2 = Paper
    //3 = Scissors
    switch (result) {
        case 1:
            result = "ROCK";
            break;

        case 2:
            result = "PAPER";
            break;

        case 3:
            result = "SCISSORS";
            break;

        default:
            console.log("ERROR");
    }

    return result;
}



//this function plays one round
function playRound(playerSelection, computerSelection) {

    //Converts the string to upper case to make it case insensitive so the
    //input can be writen like "rOCk" for example, and it will work anyways.
    playerSelection = playerSelection.toUpperCase();


    //compares the player's selection to the computer and decides the winner
    //Rock      beats Scissors
    //Paper     beats Rock
    //Scissors  beats Paper
    switch (playerSelection) {
        case "ROCK":
            switch (computerSelection) {
                case "ROCK":
                    return "Its a draw! Rock vs Rock";
                    break;

                case "PAPER":
                    return "You Lose :c Paper beats Rock";
                    break;

                case "SCISSORS":
                    return "You Win! Rock beats Scissors";
                    break;
            }
            break;

        case "PAPER":
            switch (computerSelection) {
                case "ROCK":
                    return "You Win! Paper beats Rock";
                break;

                case "PAPER":
                    return "Its a draw! Paper vs Paper";
                    break;

                case "SCISSORS":
                    return "You Lose :c Scissors beats Paper";
                    break;
            }
            break;

        case "SCISSORS":
            switch (computerSelection) {
                case "ROCK":
                    return "You Lose :c Rock beats Scissors";
                    break;

                case "PAPER":
                    return "You Win! Scissors beats Paper";
                    break;

                case "SCISSORS":
                    return "Its a draw! Scissors vs Scissors";
                    break;
            }
            break;

        default:
            return "ERROR: you can only enter the words Rock, Paper or Scissors";
    }
}

function playAndLog(){
    const ComputerChoice = getComputerChoice();
    roundResult = playRound("rock", ComputerChoice)
    console.log(roundResult);
}

const rockButton = document.querySelector(".rock-btn");
rockButton.addEventListener("click", playAndLog);

const paperButton = document.querySelector(".paper-btn");
paperButton.addEventListener("click", playAndLog);

const scissorsButton = document.querySelector(".scissors-btn");
scissorsButton.addEventListener("click", playAndLog);
    let playerPoints = 0;
    let computerPoints = 0;
    let winner;

    //5 round loop
    for (let i = 0; i < 5; i++) {

        //uses a prompt to input players selection
        let playerSelection = prompt("Chose: Rock - Paper - Scissors:");
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        

        //determines if you have won or lost depending on the result message
        winner = result.charAt(4)

        switch (winner) {
            case "W":
                playerPoints++;
                break;
            case "L":
                computerPoints++;
                break;
        }
    } 

    //final message after the 5 round match
    if(playerPoints > computerPoints){
        console.log("Congratulations! YOU WIN!!");
    }
    else if (playerPoints < computerPoints){
        console.log("you lose, better luck next time");
    }
    else{
        console.log("ITS A DRAW")
    }

    //displays scores
    console.log("scores:");
    console.log("you: "+playerPoints+"  computer: "+computerPoints);
}

game();*/