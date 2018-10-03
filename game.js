//create a number
var number = 4;

//guess a number
var guess = prompt("Guess a number");

//guessed right
if (Number(guess) === 4){
	console.log("You guessed right!!");
}

//too high
else if (Number(guess) > 4){
	console.log("You guessed too high");
}

//too low
else {
	console.log("You guessed too low");
}