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

function getComputerChoice() {

    let result;

    result = Math.floor(Math.random() * (3 - 1 + 1)) + 1; //randomly choose betweeen 1 and 3 inclusive

    switch (result) {
        case 1:
            result = "Rock";
            break;

        case 2:
            result = "Paper";
            break;

        case 3:
            result = "Scissors";
            break;

        default:
            console.log("error");
    }

    return result;
}

console.log(getComputerChoice());