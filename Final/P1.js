// ball settings, ball1 = left/right, ball2 = up/down
var ball1 = 0;
var ball2 = 0;
var ballSize = 8;

// paddle settings
var paddle1 = 0; // left paddle
var paddle2 = 0; // right paddle, hidden off screen
var paddleWidth = 15;
var paddleHeight = 75;

// set speeds
var x_speed = 10;
var y_speed = x_speed;
var comp_speed = 8;
var collision = 0; // once ball touches paddle1

// player points
var player1_points = 0;
var player2_points = 0; // not counting

// 5 points will end the game
var gameEnds = 5;
var resetGame = false;

// window.onload will load everything once the the page laods
window.onload = function ()  {
		// pop-up box with instructions
		alert("Welcome to 'PLAYER ONE'.")
		alert("Use your mouse to move the board up/down to prevent the ball from getting by.")

		// gets canvas from html, sets it to '2d', 60 fps
		var canvas = document.getElementById('createcanvas');
		var context = canvas.getContext('2d');
		var runGame = setInterval(run,  1000/60);

		// clientY returns the vertical coordinate
		// this allows the mouse to control paddle1
		canvas.addEventListener('mousemove', function (x) {
				paddle1 = x.clientY - canvas.height / 2;
		});

		function ballReset() {
				// ball start location
				// half of width/height will set it towards the center
				ball1 = canvas.width / 2;
				ball2 = canvas.height / 2;
				x_speed = -x_speed; // it starts going down
				y_speed = 10; // set speed of ball
		}

		// this sets the speed of the ball when traveling up/down/left/right
		function ballMovement() {
				ball1 += x_speed;
				ball2 += y_speed;
		}

		function canvasSettings() {
				// turns canvas to the color 'black'
				context.fillStyle = 'black';
				context.fillRect(0, 0, canvas.width, canvas.height);

				// paddle color
				context.fillStyle = 'white';

				// create ball
				context.fillRect(ball1 - ballSize / 2, ball2 - ballSize / 2, ballSize, ballSize);

				// paddle 1
				context.fillRect(0, paddle1, paddleWidth, paddleHeight);

				// paddle 2
				context.fillRect(175, 580, 50, 10);
		}


		function Game(){
			if(player1_points === gameEnds || player2_points === gameEnds){
				// reset game
				resetGame = true;
				// stop the game from running
				//clearTimeout(Game);
				context.fillStyle = 'white';
				context.font = "36px Raleway";
				context.fillText("Game Over", canvas.width / 2 - canvas.width / 6, canvas.height / 2);
				if (player1_points === gameEnds){
					context.font = "24px Raleway";
					context.fillText("Nice!", canvas.width / 2 - canvas.width / 14, canvas.height / 2 + 25);
				}
				if (player2_points === gameEnds){
					context.font = "24px Raleway";
					context.fillText("Press F5 to restart!", canvas.width / 2 - canvas.width/14, canvas.height / 2 + 25);
				}
			}
		}

		function run(){
				ballMovement();
				canvasSettings();
				Game();
		}
}
