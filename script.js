// ------------start of countdown--------------------

//constructing timer var
const timer = document.getElementById("timer");

// Target date
const targetDate = new Date("August 26, 2026 11:00:00").getTime();

// 
const interval = setInterval(() => {
    const currentDate = new Date().getTime();
    const countdown = targetDate - currentDate;

    // Time calculations
    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    //output results
    timer.innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";

}, 1000);

// getting all the id that will be added to the class .darkMode
const toggleBtn = document.getElementById("darkMode");
const thirdBox = document.getElementById("thirdBox");
const aboutMain = document.getElementById("aboutMain");
const aboutText1 = document.getElementById("aboutText1");
const aboutText2 = document.getElementById("aboutText2");
const aboutText3 = document.getElementById("aboutText3");
const historyMain = document.getElementById("historyMain");
const yr1 = document.getElementById("yr1");
const yr2 = document.getElementById("yr2");
const yr3 = document.getElementById("yr3");
const yr4 = document.getElementById("yr4");
const yr5 = document.getElementById("yr5");


// the main function it will toggle the class .darkMode when onclick
toggleBtn.onclick = function() {
    if (thirdBox) thirdBox.classList.toggle("darkMode");
    if (aboutText1) aboutText1.classList.toggle("darkMode");
    if (aboutText2) aboutText2.classList.toggle("darkMode");
    if (aboutText3) aboutText3.classList.toggle("darkMode");
    if (aboutMain) aboutMain.classList.toggle("darkMode");
    if (historyMain) historyMain.classList.toggle("darkMode");
    if (yr1) yr1.classList.toggle("darkMode");
    if (yr2) yr2.classList.toggle("darkMode");
    if (yr3) yr3.classList.toggle("darkMode");
    if (yr4) yr4.classList.toggle("darkMode");
    if (yr5) yr5.classList.toggle("darkMode");
};




//--------- End of Countdown ----------------------
//--------- Start of Quiz ----------------------



// question section array
const questions = [
    {
        question: "In what month does the La-tomatina is held?",
        answers: [
            {text: "December", correct: false},
            {text: "August", correct: true},
            {text: "January", correct: false},
            {text: "July", correct: false},
        ]
    },
    {
        question: "How long does the La-tomatina tradition last for?",
            answers: [
                {text: "a day", correct: false},
                {text: "4 hour", correct: false},
                {text: "1 hour", correct: true},
                {text: "a week", correct: false},
            ]
    },
    {
        question: "What country holds the largest food fight festival?",
        answers: [
            {text: "Brunei", correct: false},
            {text: "Mexico", correct: false},
            {text: "Netherlands", correct: false},
            {text: "Spain", correct: true},
        ]
    },
    {
        question: "What can't you bring during the La-tomatina?",
        answers: [
            {text: "A Scissor", correct: true},
            {text: "A camera", correct: false},
            {text: "A tomato", correct: false},
            {text: "A shirt", correct: false},
        ]
    },
    {
        question: "What does the second water cannon sound signifies?",
        answers: [
            {text: "Stop running and freeze", correct: false},
            {text: "A warning to the participant", correct: false},
            {text: "Start throwing tomatoes", correct: false},
            {text: "Stop throwing tomatoes", correct: true},
        ]
    },
    {
        question: "Are the tomatoes thrown edible?",
        answers: [
            {text: "Only the yellow one", correct: false},
            {text: "yes", correct: false},
            {text: "Some of it", correct: false},
            {text: "No", correct: true},
        ]
    },
    {
        question: "In what year did the tradition was officially banned?",
        answers: [
            {text: "2002", correct: false},
            {text: "1947", correct: true},
            {text: "1957", correct: false},
            {text: "2013", correct: false},
        ]
    },
    {
        question: "How many people are allowed to participate in the festival?",
        answers: [
            {text: "20,000", correct: true},
            {text: "100,000", correct: false},
            {text: "50,000", correct: false},
            {text: "500", correct: false},
        ]
    },
    {
        question: "In what year did the tradition of La-tomatina started?",
        answers: [
            {text: "1947", correct: false},
            {text: "1945", correct: true},
            {text: "1935", correct: false},
            {text: "2002", correct: false},
        ]
    },
    {
        question: "The traditional festival is held in what town?",
        answers: [
            {text: "Buñol", correct: true},
            {text: "Madrid", correct: false},
            {text: "Valencia", correct: false},
            {text: "Besalú", correct: false},
        ]
    }
];

// constructing variable
const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

// setting up variable
let currentQuestionIndex = 0;
let score = 0;

// 
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    //for loop
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

// to remove the Next button while selecting answer
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        //creating class for colors in css
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// to show the final score screen
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// to progress to the next question ++
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

// what happens if you click the next button and if 
// runs out of question it starts the quiz again
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

// --------------end of quiz script------------------





