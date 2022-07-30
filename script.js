const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


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


/*
Function that plays one round playRound()

    play the game 
    case playerchoice
    if player choose rock
        computer choose rock >> Draw
        computer choose paper >> Loose
        computer choose scissors >> Win

    if player choose paper
        computer choose paper >> Draw
        computer choose scissors >> Loose
        computer choose rock >> Win

    if player choose scissors
        computer choose scissors >> Draw
        computer choose rock >> Loose
        computer choose paper >> Win

    return a string with "you win" or "you lose" text
*/


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
                    return "You lose :c Paper beats Rock";
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
                    return "You lose :c Scissors beats Paper";
                    break;
            }
            break;

        case "SCISSORS":
            switch (computerSelection) {
                case "ROCK":
                    return "You lose :c Rock beats Scissors";
                    break;

                case "PAPER":
                    return "You Win! Scissors beats Paper";
                    break;

                case "SCISSORS":
                    return "Its a draw! Scissors vs Scissors";
                    break;
            }
            break;

    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}