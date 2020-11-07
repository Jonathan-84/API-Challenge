//var timerEl = document.getElementById ('countdown');
//var timerEl=document.getElementById('countdown');
var submitButton = document.getElementById('submit');
var questionContainer = document.getElementById('questions')
var leaderboardContainer = document.getElementById('leaderboard')

// Start the correct answer total at 0
var score= 0;

//Questions for the game
var questions = [
    {
    title: "The fundamental language(s) of web development are   ____.",
    choices: {
      a: "HTML",
      b: "CSS",
      c: "Java Script",
      d: "all of the above"
    },
    answer: "d"
  },
{
    title: "How do you accurately reference id = 'batman in CSS'?",
    choices: {
        a: ".batman",
        b: "#batman"
    },
    answer: "b"
},
{
    title: "What programming language provides the style for a website?",
    choices: {
        a: "HTML",
        b: "CSS",
        c: "Java Script"
    },
    answer: "b"
},
{
    title: "What programming language provides the structure for a website?",
    choices: {
        a: "HTML",
        b: "CSS",
        c: "Java Script"
    },
    answer: "a"
},
];



// show results after submitting answer
submitButton.addEventListener('click', showResults);









]
