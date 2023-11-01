/**
 * Create Questions by useing array
 */
const questions = [
  {
    question: "/assets/images/Australia.jpg",
    answers: ["Germany", "Australia", "New Zealand"],
    correctAnswer: "Australia",
  },
  {
    question: "/assets/images/Brazil.jpg",
    answers: ["United States", "Mexico", "Brazil"],
    correctAnswer: "Brazil",
  },
  {
    question: "/assets/images/Egypt.jpg",
    answers: ["Sudan", "Egypt", "Jordan"],
    correctAnswer: "Egypt",
  },
  {
    question: "/assets/images/Japan.jpg",
    answers: ["Japan", "France", "Korea"],
    correctAnswer: "Japan",
  },
  {
    question: "/assets/images/UK.jpg",
    answers: ["Germany", "Ireland", "United Kimdom"],
    correctAnswer: "United Kimdom",
  },
  {
    question: "/assets/images/Italy.jpg",
    answers: ["Italy", "Portugal", "Slovenia"],
    correctAnswer: "Italy",
  },
  {
    question: "/assets/images/Turkey.jpg",
    answers: ["Plovdiv", "Serbia", "Turkey"],
    correctAnswer: "Turkey",
  },
  {
    question: "/assets/images/Korea.jpg",
    answers: ["Korea", "China", "Taiwan"],
    correctAnswer: "Korea",
  },
  {
    question: "/assets/images/Malasia.jpg",
    answers: ["Indonesia", "Malaysia", "Thailand"],
    correctAnswer: "Malaysia",
  },
  {
    question: "/assets/images/Singapore.jpg",
    answers: ["Thanland", "Taiwan", "Singapore"],
    correctAnswer: "Singapore",
  },
];

/**
 * The score and the question start from 0.
 */
let currentQuestionindex = 0;
let score = 0;

function loadQuestion(index) {
  const answers = document.querySelectorAll(".btn");
  const imageElement = document.getElementById("question-image");

  imageElement.src = questions[index].question;

  for (let i = 0; i < answers.length; i++) {
    answers[i].textContent = questions[index].answers[i];
  }
}

function checkAnswer(button) {
  if (button.textContent === questions[currentQuestionindex].correctAnswer) {
    score++;
  }

  currentQuestionindex++;

  if (currentQuestionindex < questions.length) {
    loadQuestion(currentQuestionindex);
  } else {
    endQuiz();
  }
}
function endQuiz() {
  const container = document.getElementById("container");
  container.innerHTML = `<h1>Quiz Completed!</h1>
    <p>Your Score: ${score} out of ${quizQuestions.length}</p>`;
}

/**
 * To start the game in the first
 */
loadQuestion(currentQuestionindex);
