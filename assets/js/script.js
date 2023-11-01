/**
 * Create Questions by useing array
 */
const questions = [
    {
        question: "Australia.jpg",
        answers: ["Germany", "Australia", "New Zealand"],
        correctAnswer: "Australia",
    },
    {
        question: "Brazil.jpg",
        answers: ["United States", "Mexico", "Brazil"],
        correctAnswer: "Brazil",
    },
    {
        question: "/asstes/images/Egypt.jpg",
        answers: ["Sudan", "Egypt", "Jordan"],
        correctAnswer: "Egypt",
    },
    {
        question: "/asstes/images/Japan.jpg",
        answers: ["Japan", "France", "Korea"],
        correctAnswer: "Japan",
    },
    {
        question: "/asstes/images/UK.jpg",
        answers: ["Germany", "Ireland", "United Kimdom"],
        correctAnswer: "United Kimdom",
    },
    {
        question: "/asstes/images/Italy.jpg",
        answers: ["Italy", "Portugal", "Slovenia"],
        correctAnswer: "Italy",
    },
    {
        question: "/asstes/images/Turkey.jpg",
        answers: ["Plovdiv", "Serbia", "Turkey"],
        correctAnswer: "Turkey",
    },
    {
        question: "/asstes/images/Korea.jpg",
        answers: ["Korea", "China", "Taiwan"],
        correctAnswer: "Korea",

    },
    {
        question: "/asstes/images/Malasia.jpg",
        answers: ["Indonesia", "Malaysia", "Thailand"],
        correctAnswer: "Malaysia",
    },
    {
        question: "/asstes/images/Singapore.jpg",
        answers: ["Thanland", "Taiwan", "Singapore"],
        correctAnswer: "Singapore",
    }
];

/**
 * The score and the question start from 0.
 */
let currentQuestionindex = 0;
let score = 0;

function loadQuestion(index) {
    //const questionElement = document.getElementById("question-image");
    const answerbutton = document.getElementById("answer-btn");
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