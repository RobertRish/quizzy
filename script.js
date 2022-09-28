var questions = [
  {
    prompt: "What is 3 x 12?",
    answer: "36",
  },
  {
    prompt: "What is 12 / 4?",
    answer: "3",
  },
  {
    prompt: "What is 13 x 7?",
    answer: "91",
  },
];

var score = 0;

for (var i = 0; i < questions.length; i++) {
  var response = window.prompt(questions[i].prompt);
  if (response == questions[i].answer) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong :/");
  }
}

alert("you got " + score + "/" + questions.length);
