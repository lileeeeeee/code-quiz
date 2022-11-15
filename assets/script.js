
var highScoreBtn = document.querySelector("#highScore");
var lastCard = document.querySelector("#last");
var startBtn = document.querySelector(".openingButton");
var scoreInitials = document.querySelector("#scoreInitials");
var allCards = document.querySelector (".container");
var questionCards = document.querySelector ("#questions");
var btnOne = document.querySelector (".one");
var btnTwo = document.querySelector (".two");
var btnThree = document.querySelector (".three");
var btnFour = document.querySelector (".four");
var answerResultDisplay = document.querySelector (".rightOrWrong");
var questionDisplay = document.querySelector ("h2");

let questionOne = {
question: "what is JavaScript",
one: "a cool font",
two: "a dead language",
three: "a scripting language",
four: "how a coffee would write a letter",
rightAnswer:  "a scripting language"
}
let questionTwo = {
  question: "which of the below primitive values will not return the expected typeof when tested?",
  one: "boolean",
  two: "string",
  three: "undefined",
  four: "null",
  rightAnswer: "null"
}
let questionThree = {
question: "how long did it take to develop JavaScript?",
one: "ten years",
two: "ten days",
three: "ten minutes",
four: "ten weeks",
rightAnswer:  "ten days"
}
let questionFour = {
question: "who created JavaScript?",
one: "Brendan Eich",
two: "Bill Gates",
three: "Linus Torvalds",
four: "Tim Berners-Lee",
rightAnswer:  "Brendan Eich"
}
var questionArray = [questionOne, questionTwo, questionThree, questionFour];


var timer;
var timerCount = 60;

  // add event listener to the answer buttons, stores which button was clicked in the key 
  btnOne.addEventListener("click", checkOne);
 
  btnTwo.addEventListener("click", checkTwo);

  btnThree.addEventListener("click", checkThree);

  btnFour.addEventListener("click", checkFour);
 



function hideAllCards () {
allCards.setAttribute("style", "display: none");
}

//hides the current card and displays the lastCard  
function displayLastCard() {
     hideAllCards ();
     lastCard.setAttribute("style", "display: block");
     //need to link this card to local storage for initials//
   
}
//hides the current card (all card classes) and displays scoreInitials card by id selector
function displayscoreInitials() {
  hideAllCards ();
  scoreInitials.setAttribute("style", "display: block");

}

//displays the first card and the first set of questions
function startQuestions () {
  hideAllCards ();
  questionCards.setAttribute ("style", "display: block");
  
    var rdmQuestion = questionArray[(([Math.floor(Math.random()*questionArray.length)]))];
    //figure out how to remove that item from the array//
    //figure out how to code if there are no items in the array, display the last card//
    btnOne.textContent = rdmQuestion.one;
    btnTwo.textContent = rdmQuestion.two;
    btnThree.textContent = rdmQuestion.three;
    btnFour.textContent = rdmQuestion.four;
    questionDisplay.textContent = rdmQuestion.question;
    localStorage.setItem("answer", rdmQuestion.rightAnswer);
    console.log(localStorage.getItem("answer"));
    }

  

//checks the answer clicked, changes display message, clears local storage, reloads questions

function checkOne () {
  localStorage.setItem("answer1", btnOne.textContent);
  if (localStorage.getItem("answer1") === localStorage.getItem("answer")) {
    answerResultDisplay.textContent = "Correct!";
    
  }
  else {
    answerResultDisplay.textContent = "wrong"
    //subtract five seconds from clock//
  }
  localStorage.removeItem('answer1');
  localStorage.removeItem('answer');
  startQuestions ();
}  
function checkTwo () {
  localStorage.setItem("answer2", btnTwo.textContent);
  if (localStorage.getItem("answer2") === localStorage.getItem("answer")) {
    answerResultDisplay.textContent = "Correct!";
  }
  else {
    answerResultDisplay.textContent = "wrong"
    //subtract five seconds from clock//
  }
  localStorage.removeItem('answer2');
  localStorage.removeItem('answer');
  startQuestions ();
}  
function checkThree () {
  localStorage.setItem("answer3", btnThree.textContent);
  if (localStorage.getItem("answer3") === localStorage.getItem("answer")) {
    answerResultDisplay.textContent = "Correct!";
  }
  else {
    answerResultDisplay.textContent = "wrong"
    //subtract five seconds from clock//
  }
  localStorage.removeItem("answer3");
  localStorage.removeItem('answer');
  startQuestions ();
}  
function checkFour () {
  localStorage.setItem("answer4", btnFour.textContent);
  if (localStorage.getItem("answer4") === localStorage.getItem("answer")) {
    answerResultDisplay.textContent = "Correct!";
  }
  else {
    answerResultDisplay.textContent = "wrong"
    //subtract five seconds from clock//
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
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        displayscoreInitials();
      }
    }, 1000);
}

//starts the quiz
function startQuiz () {
  startTimer();
  startQuestions ();
  
}
    
    
    //Add event listener to high score button
   highScoreBtn.addEventListener("click", displayLastCard);
  
   //Add event listener to start button
  startBtn.addEventListener("click", startQuiz);
  
   
    