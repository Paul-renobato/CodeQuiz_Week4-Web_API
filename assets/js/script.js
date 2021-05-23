var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
var shuffleQuestions, currentQuestionIndex
startButton.addEventListener("click", startQuiz)

function startTimer(){
    var time = setInterval(myTimer,1000)
    var startTime = 60;

    function myTimer() {
        time.innerHTML= --startTime;
        if (startTime ==0){
            clearInterval(time)
        }
    }
}

function startQuiz() {
startButton.classList.add("hide")
shuffleQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove("hide")
setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])

}
function showQuestion (question){
questionElement.innerText = question.question
question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
})
}
function resetState(){
    setButton.classlist.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}
function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}
var questions = [
{
    question: "What does HTML stand for?",
    answers: [
        {text: "Hyper Text Markup Language", correct: true},
        {text: "Hyperlinks and Text Markup Language", correct: false},
        {text: "Home Tool Markup Language", correct: false},
        {text: "Hydro Text Mirror Linguistics", correct: false}

     ]
    }

]