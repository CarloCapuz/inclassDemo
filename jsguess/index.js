function runSubmit() {
	guess = prompt("Player 1, enter a positive number: ")
	number = prompt("What's your guess?");

for (count=1; count<20; count++) {
		if (number > guess) {
    	alert("Too high!");
		} else if (number < guess) {
    	alert("Too low!");
		} else {
    	alert("Congratulations! It took you " + count + " tries.");
			break;
		}
		count++;
	}
}
