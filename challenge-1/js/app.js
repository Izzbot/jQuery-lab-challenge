// Challenge summary:
// You will be implementing a countdown clock which take the number
// of seconds as parameter. In addition, you will also add 'confetti'
// to a random location on the page for each passing second.

// After you have completed the basic core components, there are a few
// optional features to work on:
// -- If seconds > 60, timer display should switch to minute:second.
// -- Include a warning when time is up (audio or visual).
// -- Display time in milliseconds.


// First, take a look at the index.html file to see the items you
// will need to work with.

var secsRem;
var timer;

// This function is the equivalent of document ready
$(function() {
	/* Hints:
	 		-- Start by registering the click event for the button.
	 		-- You will need to keep track of the number of second somewhere.
	 		-- Remember javascript function can be assigned into variable.
	 		-- Input values are strings, remember to parse it!
			-- Regex for checking digit input is '^\\d+$'
			-- Look up how setInterval() works, you will need it.
	*/

    var numRegex = new RegExp('^\\d+$');

    $('#countdownButton').click(function() {
    secsRem = $('#time').val().trim();

        if (!numRegex.test(secsRem)) {
            throw new Error('Please put in a time.');
        }

        // Every second
        timer = window.setInterval(function() {
            countDown();

        },1000);

    });
});

function countDown() {
	// Hint: if time < 0, stop the countdown, otherwise refresh the timer display & call createConfetti().
	// Hint: to stop countdown, look up clearInterval() function.
    $('#displayedTimer').text(secsRem + ' s');
    secsRem--;

    // Make confetti
//    createConfetti();

    // Stop the timer when necessary
    if (secsRem < 0) {
        window.clearInterval(timer);
    }
}

function createConfetti() {
	// Get confetti's size. If user doesn't specify or type in invalid value, switch to a default size.

    var size = $('#size').val();

	//	Random color RGB, use Math.floor(Math.random() * 255)
    var color = Math.floor(Math.random() * 255);

	// Random locations on screen
	// Hint: use Math.floor, Math.random, window.innerHeight/Width to compute px value.
    var confX = Math.floor(Math.random() * window.innerWidth);
    var confY = Math.floor(Math.random() * window.innerHeight);

	// Add confetti and apply styles: width/height, location, background-color.
	// Hint: use fixed positioning with top & left attributes
    var confetti = $('#confettiField');
    confetti.style.position('fixed');
    confetti.style.top = confY;
    confetti.style.left = confX;
    confetti.style.color = color;
    confetti.style.height = size;
    confetti.style.width = size;

	// [Optional]
	// Change the timer display's font color to the same as the last confetti's
	// background color. This is actually very simple (1-2 line of code).
	
	// [Optional]
	// Allow user to click on each confetti and remove it (1-2 line of code).
}