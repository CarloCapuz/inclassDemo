// ball settings
var ball1 = 0;
var ball2 = 0;
var ballSize = 8;

// paddle settings
var paddle1 = 0;
var paddle2 = 0;
var paddleWidth = 15;
var paddleHeight = 75;

// set speeds
var x_speed = 10;
var y_speed = x_speed;
var comp_speed = 8;
var collision = 0;

// player points
var player1_points = 0;
var player2_points = 0;

// 5 points will end the game
var gameEnds = 5;
var resetGame = false;

// window.onload will load everything once the the page laods
window.onload = function ()  {

		alert("Welcome to 'PLAYER ONE'.")
		alert("Use your mouse to move the board up/down to prevent the ball from getting by.")

		var canvas = document.getElementById('createcanvas');
		var context = canvas.getContext('2d');
		var runGame = setInterval(run,  1000/60);

		// clientY returns the vertical coordinate
		canvas.addEventListener('mousemove', function (x) {
				paddle1 = x.clientY - canvas.height / 2;
		});

		// clientY returns the vertical coordinate
		canvas.addEventListener('mousemove', function (x) {
				paddle1 = x.clientY - canvas.height / 2;
		});

		function ballReset() {
				// ball start location
				ball1 = canvas.width / 2;
				ball2 = canvas.height / 2;
				x_speed = -x_speed;
				y_speed = 10;
		}

		function ballMovement() {
				ball1 += x_speed;
				ball2 += y_speed;
		}

		function AI_paddle() {
				// Move the AI paddle based on the position of the ball
				if (paddle2 + paddleHeight / 2 < ball2) {
						paddle2 += comp_speed;
				} else {
						paddle2 -= comp_speed;
				}
		}

		function bounce() {
			  // Bounce the ball off the top of the screen
				if (ball2 < 0 && y_speed < 0) {
						y_speed = -y_speed; // if the ball hits the top, then it will go down
				}

				// Bounce the ball off the bottom of the screen
				if (ball2 > canvas.height && y_speed > 0) {
						y_speed = -y_speed; // if the ball hits the bottom, it will go top
				}

				// Bounces off left
				// if the ball hits the paddle, it bounces off
				if (ball1 < 0) {
						if (ball2 > paddle1 && ball2 < paddle1 + paddleHeight) {
								x_speed =- x_speed;
								z_speed = ball2 - (paddle1 + paddleHeight/2);
								y_speed = z_speed * .3;
								collision += 1;
								console.log('collision ' + collision);
						} else {
								player2_points++; // increments points
								ballReset(); // ball will restart in the middle
						}
				}

				// Bounces off right
				if (ball1 > canvas.width){
						if (ball2 > paddle2 && ball2 < paddle2 + paddleHeight) {
								x_speed =- x_speed; // if it hits the right side, it will bounce off
								z_speed = ball2 - (paddle2 + paddleHeight / 2);
								y_speed = z_speed * .3;
						} else {
								player1_points++;
								ballReset();
						}
				}
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
				context.fillText("End of Game", canvas.width / 2 - canvas.width / 6, canvas.height / 2);
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
				bounce();
				AI_paddle();
				canvasSettings();
				Game();
		}
}
