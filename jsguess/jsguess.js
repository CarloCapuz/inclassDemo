var count = 1;

function runSubmit() {
	guess = prompt("Player 1, enter a positive number: ");
	number = prompt("What's your guess?");

while (count <= 10) {
		if (number > guess) {
    	alert("Too high!");
			number = prompt("What's your guess?");
		} else if (number < guess) {
    	alert("Too low!");
			number = prompt("what's your guess?");
		} else {
    	document.write("Congratulations! It took you " + count + " tries.");
			break;
		}
		count++;
	}
}
