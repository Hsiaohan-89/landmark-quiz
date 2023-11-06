/**
 * Create Questions by useing array
 */
const questions = [
  {
    image: "assets/images/Australia.jpg",
    answers: ["Germany", "Australia", "New Zealand"],
    correctAnswer: "Australia",
  },
  {
    image: "assets/images/brazil.jpg",
    answers: ["United States", "Mexico", "Brazil"],
    correctAnswer: "Brazil",
  },
  {
    image: "assets/images/Egypt.jpg",
    answers: ["Sudan", "Egypt", "Jordan"],
    correctAnswer: "Egypt",
  },
  {
    image: "assets/images/Japan.jpg",
    answers: ["Japan", "France", "Korea"],
    correctAnswer: "Japan",
  },
  {
    image: "assets/images/UK.jpg",
    answers: ["Germany", "Ireland", "United Kingdom"],
    correctAnswer: "United Kingdom",
  },
  {
    image: "assets/images/Italy.jpg",
    answers: ["Italy", "Portugal", "Slovenia"],
    correctAnswer: "Italy",
  },
  {
    image: "assets/images/Turkey.jpg",
    answers: ["Plovdiv", "Serbia", "Turkey"],
    correctAnswer: "Turkey",
  },
  {
    image: "assets/images/Korea.jpg",
    answers: ["Korea", "China", "Taiwan"],
    correctAnswer: "Korea",
  },
  {
    image: "assets/images/Malasia.jpg",
    answers: ["Indonesia", "Malaysia", "Thailand"],
    correctAnswer: "Malaysia",
  },
  {
    image: "assets/images/Singapore.jpg",
    answers: ["Thanland", "Taiwan", "Singapore"],
    correctAnswer: "Singapore",
  },
];

/**
 * The score and the question start from 0.
 */
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

function loadQuestion(index) {
  const answerButtons = document.getElementsByClassName("btn");
  const questionImage = document.getElementById("question-image");

  questionImage.src = questions[index].image;

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = questions[index].answers[i];
  }
}

const answerButtons = document.getElementsByClassName("btn");

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", function () {
    checkAnswer(this); // call the checkAnswer function and pass the button as a parameter
  });
}

function checkAnswer(button) {
  if (button.textContent === questions[currentQuestionIndex].correctAnswer) {
    correctAnswers++; // Increase the correctAnswers count
    document.getElementById("score-correct").textContent = correctAnswers; // Update the correct answers display
    alert("Correct! Great job! ");
  } else {
    incorrectAnswers++; //Increase the incorrectAnswers count
    document.getElementById("score-incorrect").textContent = incorrectAnswers; // Update the incorrect answers display
    alert(
      `Sorry, that's incorrect. The correct answer is: ${questions[currentQuestionIndex].correctAnswer}`
    );
  
}

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion(currentQuestionIndex);
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("answer-btn").style.display = "none";
  document.getElementById("submit").style.display = "block";

  document.getElementById("score-correct").textContent = correctAnswers;
  document.getElementById("score-incorrect").textContent = incorrectAnswers;
}

/**
 * To start the game in the beginning
 */
loadQuestion(currentQuestionIndex);
alert("Welcome to the game!");
