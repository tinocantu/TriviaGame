$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};


var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Who is the tennis player with more Grand Slams?',
	possibleAnswers : ['A. Roger Federer',
				 'B. Andre Agassi',
				 'C. Rafael Nadal',
				 'D. Serena Williams'],
	flags : [true, false, true, false],
    answer : 'A. Roger Federer'
};

var q2 = {
	question: 'Who was the legendary Benedictine monk who invented champagne by accident',
	possibleAnswers: ['A. Anshin Bankei',
				 'B. Dom Perignon',
				 'C. Dom Bensen',
				 'D. Dom Daishin'],
	flags : [false, true, false, false],
	answer : 'B. Dom Perignon'
};

var q3 = {
	question : 'Name the largest freshwater lake in the world?',
	possibleAnswers : ['A. Lake Superior',
				 'B. Presa de la Boca',
				 'C. Lake Alberta',
				 'D. Lake Colorado'],
	flags : [true, true, false, false],
	answer : 'A. Lake Superior'
};

var q4 = {
	question : 'What is the worlds biggest river?',
	possibleAnswers : ['A. Nile river',
				 'B. Amazon river',
				 'C. Bravo river',
				 'D. Usumascinta river'],
	flags : [false, true, false, false],
	answer : 'A. Amazon River'
};

var q5 = {
	question : 'Which chess piece can only move diagonally?',
	possibleAnswers : ['A. Rook',
				 'B. Bishop',
				 'C. Queen',
				 'D. Pawn'],
	flags : [false, true, false, false],
	answer : 'B. Bishop'
};

var q6 = {
	question : 'What is Daenerys Targaryen nickname in Game of Thrones show?',
	possibleAnswers : ['A. Khaleesi',
				 'B. The Unburnt',
				 'C. Breaker of Chains',
				 'D. All of the above'],
	flags : [false, false, false, true],
	answer : 'D. All of the above'
};

var q7 = {
	question : 'When did the Cold War end?',
	possibleAnswers : ['A. 1986',
				 'B. 1988',
				 'C. 1987',
				 'D. 1989'],
	flags : [false, false, false, true],
	answer : 'D. 1989'
};

var q8 = {
	question : 'Which sea creature has three hearts?',
	possibleAnswers : ['A. Crab',
				 'B. Lobster',
				 'C. Both A & B',
				 'D. Octopus'],
	flags : [false, false, false, true],
	answer : 'B. octopus'
};

var q9 = {
	question : 'How many bones does an adult human have?',
	possibleAnswers : ['A. 202',
				 'B. 204',
				 'C. 206',
				 'D. 205'],
	flags : [false, false, true, false],
	answer : 'C. 206'
};

var q10 = {
	question : 'How many degrees are found in a circle?',
	possibleAnswers : ['A. 240',
				  'B. 360',
				  'C. 180',
				  'D. 270'],
	flags : [false, true, false, false],
	answer : 'B. 360'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();  
}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {


	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});



});

