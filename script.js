
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

// plays a round when the user clicks an option and puts the result into a div
function playAndLog(playerSelection){
	const ComputerChoice = getComputerChoice();
	roundResult = playRound(playerSelection, ComputerChoice);

	//puts the result into a div
	resultBox.textContent = roundResult;


	//Counts whether the user or the computer wins
	if (roundResult.charAt(4) === 'W'){
		++userWins;
	}
	else if (roundResult.charAt(4) === 'L'){
		++computerWins;
	}

	//diplsays each ones score
	usrScore.textContent = `You ${userWins}`;
	cptrScore.textContent = `Computer ${computerWins}`;

	//Displays a win message after you score five points and resets the counters
	if (userWins === 5){
		body.appendChild(winner);
		winner.textContent = "CONGRATULATIONS YOU WIN!!";
		computerWins = 0;
		userWins = 0;
	}

	//Displays a lose message after the computer scores five points and resets the counters
	else if (computerWins === 5){
		body.appendChild(winner);
		winner.textContent = "Better luck next time, computer wins";
		computerWins = 0;
		userWins = 0;
	}

	//removes the winner or loser message when you start a new match
	else if(body.contains(winner)){
		body.removeChild(winner);
	}
}


//counter of scores
let computerWins = 0;
let userWins = 0;

const body = document.querySelector("body");	//selects the body
const winner = document.createElement('div');	//creates a div to display winner or loser message

//event listener added to the three options
const rockButton = document.querySelector(".rock-btn");
rockButton.addEventListener("click", () => playAndLog("ROCK"));

const paperButton = document.querySelector(".paper-btn");
paperButton.addEventListener("click", () => playAndLog("PAPER"));

const scissorsButton = document.querySelector(".scissors-btn");
scissorsButton.addEventListener("click", () => playAndLog("SCISSORS"));

//This div is for the result message
const resultBox = document.querySelector("#result-box");

//Divs that display the scores
const usrScore = document.querySelector(".usr-score");
const cptrScore = document.querySelector(".cptr-score");