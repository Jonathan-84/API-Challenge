var questions = [
    {
        title: "What is not a commonly used data type:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "Which option below is not a main building block of modern websites: ",
        choices: ["JavaScript", "CSS", "GitHub", "HTML"],
        answer: "GitHub"
    },
    {
        title: "Arrays in JavaScript can be used  to store:",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title: "What useful tool is used during development and debugging in browser:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
  ];
  
  var userScores = []
  
  $(document).ready(function () {
    //declare global variables
    // TIMER VARIABLES
    //-----------------------------------------------------
    var startBtn = document.querySelector("#start-button");
    var timerDisplay = document.querySelector("#timer");
    var timeRemaining = 0;
    var interval;
    var gameTitle = document.querySelector("#game-title");
    var questionText = document.querySelector
        ("#question-text");
    var choices = document.querySelector(".choice");
    var questionNum = 0;
    var choice1 = document.querySelector("#choice1");
    var choice2 = document.querySelector("#choice2");
    var choice3 = document.querySelector("#choice3");
    var choice4 = document.querySelector("#choice4");
    var answers = ["alerts", "GitHub", "all of the above", "quotes", "console.log"]
    var gameState;
    var rightOrWrong = document.getElementById("rightwrong");
    var highScores = JSON.parse(localStorage.getItem("scores") || "[]");
    var clearBtn = document.querySelector("#clear-btn");
  
    startBtn.addEventListener("click", function (event) {
        event.preventDefault;
        startTimer();
        console.log(gameState);
    })
  
    clearBtn.addEventListener("click", function (event) {
        event.preventDefault;
        clearScores();
    })
  
    choice1.addEventListener("click", function () {
        if (this.textContent === answers[questionNum]) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
  
    })
  
    choice2.addEventListener("click", function () {
        if (this.textContent === answers[questionNum]) {
            correctAnswer();
        } else {
            wrongAnswer();
  
        }
  
    })
  
    choice3.addEventListener("click", function () {
        if (this.textContent === answers[questionNum]) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
  
    })
  
    choice4.addEventListener("click", function () {
        if (this.textContent === answers[questionNum]) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
  
    })
  
  
    //FUNCTIONS
    //----------------------------------------------------
    function timerSet() {
        timeRemaining = 60;
        clearInterval(interval);
    }
  
    function startTimer() {
        gameState = "playing";
        startBtn.setAttribute("style", "display:none");
        choices.setAttribute("style", "display:none");
        timerSet();
        beginGame();
        interval = setInterval(function () {
            timeRemaining--;
            displayTime();
        }, 1000);
    }
  
    function displayTime() {
        timerDisplay.textContent = timeRemaining;
        if (timeRemaining === 0) {
            stopTimer();
            resetPage();
        }
    }
  
    function stopTimer() {
        gameState = "not playing";
        saveHighScore();
        timerDisplay.textContent = 0;
        timerSet();
        alert("Game over!")
        rightOrWrong.textContent = "";
        startBtn.setAttribute("style", "display:block")
        startBtn.textContent = "Can you beat that?";
    }
  
    function resetPage() {
        gameTitle.textContent = "Coding Quiz Challenge!";
        questionText.textContent = "Ok Hot Shot! You've got 60 seconds select the right answer to these coding questions. Careful though, if you are wrong you will lose 10 seconds.";
        choices.setAttribute("style", "display:none");
        console.log("page reset");
    }
  
    function beginGame() {
        questionNum = 0;
        if (gameState === "playing") {
            questionFill();
            choiceFill();
        } else {
            stopTimer();
        }
    }
  
    function questionFill() {
        console.log("I'm here!");
        questionText.textContent = questions[questionNum].title;
    }
  
    function choiceFill() {
        choices.setAttribute("style", "display:block");
        choice1.textContent = questions[questionNum].choices[0];
        choice2.textContent = questions[questionNum].choices[1];
        choice3.textContent = questions[questionNum].choices[2];
        choice4.textContent = questions[questionNum].choices[3];
    }
  
    function wrongAnswer() {
        timeRemaining = timeRemaining - 15;
        rightOrWrong.textContent = "Incorrect- Tick Tock Tick Tock!";
        displayTime();
        if (timeRemaining <= 0) {
            stopTimer();
        }
    }
  
    function correctAnswer() {
        questionNum++;
        if (questionNum == answers.length) {
            stopTimer();
        } else {
            rightOrWrong.textContent = "Correct!";
            questionFill();
            choiceFill();
        }
    }
  
    function saveHighScore() {
        var userName = prompt("Enter your initials!");
        var timeScore = (60 - timeRemaining);
        console.log(userName);
        console.log(timeScore);
        highScores.push([userName, timeScore]);
        console.log(highScores);
        localStorage.setItem("scores", JSON.stringify(highScores));
        populateScores();
    }
  
    function populateScores() {
        $.each(highScores, function (i, value) {
            var initials = value[0];
            var score = value[1];
            var userScore = $("<li>");
            userScore.text(initials + ": " + score);
            $("#scores-list").append(userScore);
        });
    }
  
    function clearScores() {
        highScores = [];
        localStorage.setItem("scores", JSON.stringify(highScores));
        //remove all of the list's children
        $("#scores-list").empty();
    }
  
  
  });