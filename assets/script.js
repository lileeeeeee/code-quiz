
var highScoreBtn = document.querySelector("#highScore");
var lastCard = document.querySelector("#last");
var startBtn = document.querySelector(".openingButton");
var scoreInitials = document.querySelector("#scoreInitials");
var questionCards = document.querySelector ("#questions");
var startCard = document.querySelector ("#opening");
var btnOne = document.querySelector (".one");
var btnTwo = document.querySelector (".two");
var btnThree = document.querySelector (".three");
var btnFour = document.querySelector (".four");
var answerResultDisplay = document.querySelector (".rightOrWrong");
var questionDisplay = document.querySelector ("h2");
var submitBtn = document.querySelector ("#submit");
var initialInput = document.querySelector ("#initials");
var highScoreList = document.querySelector ("#highscores");
var clearScoresBtn = document.querySelector (".clear");
var playAgainBtn = document.querySelector (".playagain");

var timer;
var timerCount = 60;
var score;
var scoreCount = 0;

var questionOne = {
question: "what is JavaScript",
one: "a cool font",
two: "a dead language",
three: "a scripting language",
four: "how a coffee would write a letter",
rightAnswer:  "a scripting language"
}
var questionTwo = {
  question: "which of the below primitive values will not return the expected typeof when tested?",
  one: "boolean",
  two: "string",
  three: "undefined",
  four: "null",
  rightAnswer: "null"
}
var questionThree = {
question: "how long did it take to develop JavaScript?",
one: "ten years",
two: "ten days",
three: "ten minutes",
four: "ten weeks",
rightAnswer:  "ten days"
}
var questionFour = {
question: "who created JavaScript?",
one: "Brendan Eich",
two: "Bill Gates",
three: "Linus Torvalds",
four: "Tim Berners-Lee",
rightAnswer:  "Brendan Eich"
}
var questionFive = {
  question: "each of the below are features of JavaScript, except ______",
  one: "Compatability with other languages",
  two: "Programming without compilation",
  three: "Mutable and immutable data types",
  four: "Curly brackets",
  rightAnswer:  "Mutable and immutable data types"
}
var questionSix = {
  question: "what does an event listener do?",
  one: "attends concerts",
  two: "adds an event to an element",
  three: "refreshes the page",
  four: "creates an infinite loop",
  rightAnswer:  "adds an event to an element"
}
var questionSeven = {
  question: "what does JSON stand for?",
  one: "Java Standard Object Number",
  two: "JavaScript Object Numerals",
  three: "JavaScript Object Notation",
  four: "Jason just forgot the A again",
  rightAnswer:  "JavaScript Object Notation"
}
var questionEight = {
  question: "how many basic data types are there in JavaScript?",
  one: "eight",
  two: "eight hundred",
  three: "eighty",
  four: "there is no data in JavaScript",
  rightAnswer:  "eight"
}
var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight];

//hides the current card and displays the lastCard  
function displayLastCard() {
  startCard.setAttribute ("style", "display:none");
    questionCards.setAttribute ("style", "display: none");
    scoreInitials.setAttribute("style", "display: none");
     lastCard.setAttribute("style", "display: block");
     highScoreList.innerHTML = localStorage.getItem("highscores");
}

//collects the data from the initials input text box and combines with the score from local storage into the scoresObject//
function collectInitialsScore (event) {
  event.preventDefault ();
  localStorage.setItem("initials", initialInput.value);
  var initials = localStorage.getItem("initials");
  var yourScore = localStorage.getItem("score");
   var scoresObject = {
    score: yourScore,
    initials: initials
     }
     console.log(scoresObject);
     //https://www.youtube.com/watch?v=DFhmNLKwwGw for the two lines below//
     var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
     highScores.push(scoresObject);
     localStorage.setItem("highscores", JSON.stringify(highScores));
     console.log(localStorage.getItem("highscores"));
     var scoreDisplay = localStorage.getItem("highscores");   
     highScoreList.innerHTML = scoreDisplay;
    
 

  displayLastCard (); 
}


//hides other cards and displays initials input
function displayInitialsInput() {
  startCard.setAttribute ("style", "display:none");
  questionCards.setAttribute ("style", "display: none");
  lastCard.setAttribute("style", "display: none");
  scoreInitials.setAttribute("style", "display: block");

}

//displays the first card and the first set of questions
function startQuestions () {
  startCard.setAttribute ("style", "display:none");
  questionCards.setAttribute ("style", "display: block");
  if (questionArray.length == 0) {
    clearInterval(timer);
    displayInitialsInput();
    return
  }
    //this is no longer random but it does remove the questions from the array 
  var rdmQuestion = questionArray.pop();
// REMOVED [(([Math.floor(Math.random()*questionArray.length)]))]
    btnOne.textContent = rdmQuestion.one;
    btnTwo.textContent = rdmQuestion.two;
    btnThree.textContent = rdmQuestion.three;
    btnFour.textContent = rdmQuestion.four;
    questionDisplay.textContent = rdmQuestion.question;
    localStorage.setItem("answer", rdmQuestion.rightAnswer);
    
  } 
//checks the answer clicked, changes display message, clears local storage, reloads questions
function checkOne () {
  localStorage.setItem("answer1", btnOne.textContent);
  if (localStorage.getItem("answer1") === localStorage.getItem("answer")) {
    answerResultDisplay.textContent = "Correct!";
    scoreCount = scoreCount + 1;
    localStorage.setItem("score", scoreCount);
  }
  else {
    answerResultDisplay.textContent = "wrong"
    timerCount = timerCount-5;
  }
  localStorage.removeItem('answer1');
  localStorage.removeItem('answer');
  startQuestions ();
}  

function checkTwo () {
  localStorage.setItem("answer2", btnTwo.textContent);
  if (localStorage.getItem("answer2") === localStorage.getItem("answer")) {
    answerResultDisplay.textContent = "Correct!";
    scoreCount = scoreCount + 1;
    localStorage.setItem("score", scoreCount);
  }
  else {
    answerResultDisplay.textContent = "wrong"
    timerCount = timerCount-5;
  }
  localStorage.removeItem('answer2');
  localStorage.removeItem('answer');
  startQuestions ();
}  

function checkThree () {
  localStorage.setItem("answer3", btnThree.textContent);
  if (localStorage.getItem("answer3") === localStorage.getItem("answer")) {
    answerResultDisplay.textContent = "Correct!";
    scoreCount = scoreCount + 1;
    localStorage.setItem("score", scoreCount);
  }
  else {
    answerResultDisplay.textContent = "wrong"
    timerCount = timerCount-5;
  }
  localStorage.removeItem("answer3");
  localStorage.removeItem('answer');
  startQuestions ();
}  

function checkFour () {
  localStorage.setItem("answer4", btnFour.textContent);
  if (localStorage.getItem("answer4") === localStorage.getItem("answer")) {
    answerResultDisplay.textContent = "Correct!";
    scoreCount = scoreCount + 1;
    localStorage.setItem("score", scoreCount);
    
  }
  else {
    answerResultDisplay.textContent = "wrong"
    timerCount = timerCount-5;
  }
  localStorage.removeItem("answer4");
  localStorage.removeItem('answer');
  startQuestions ();
}  

//starts the timer
function startTimer () {
    timer = setInterval(function() {
      timerCount--;
      document.querySelector(".timerdisplay").textContent = timerCount;
      // Tests if time has run out
      if (timerCount == 0) {
        // Clears interval
        clearInterval(timer);
        displayInitialsInput();
      }
    }, 1000);
}


//starts the quiz
function startQuiz () {

  startTimer();
  startQuestions ();
  
}
function clearScores () {
  localStorage.removeItem("highscores");
  displayLastCard()
}
function playAgain () {
location.reload ();
}
    
//Add event listener to high score button
highScoreBtn.addEventListener("click", displayLastCard);
//Add event listener to the clear scores button
clearScoresBtn.addEventListener("click", clearScores);
//Add event listener to the play again button
playAgainBtn.addEventListener("click", playAgain);
//Add event listener to start button
startBtn.addEventListener("click", startQuiz);
//add event listener to the submit button
submitBtn.addEventListener("click", collectInitialsScore); 
// add event listener to the answer buttons, stores which button was clicked in the key 
btnOne.addEventListener("click", checkOne);
btnTwo.addEventListener("click", checkTwo);
btnThree.addEventListener("click", checkThree);
btnFour.addEventListener("click", checkFour);