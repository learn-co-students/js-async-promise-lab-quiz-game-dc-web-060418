const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: "false"},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: "true"},
  {questionText: "Goldfish only have a memory of about three seconds", answer: "false"}
]

let question = questions[0]


document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#ask").addEventListener("click", function(){
    nextQuestion()
    displayQuestionOnClick()
  })
});

function nextQuestion() {
  let questionIndex = questions.indexOf(question)
  if (questionIndex !== (questions.length - 1)) {
    question = questions[questionIndex + 1]
  } else {
    question = questions[0]
  }
}

function displayQuestionOnClick(){
  askQuestionThenRemoveQuestion(5000)
}

function askQuestionThen(time){
  return new Promise((resolve, reject) => {
    document.querySelector("#true").addEventListener("click", function() {
      question.answer === "true" ? resolve("Correct Answer") : resolve("Incorrect Answer")
    })
    document.querySelector("#false").addEventListener("click", function() {
      question.answer === "false" ? resolve("Correct Answer") : resolve("Incorrect Answer")
    })
    setTimeout( function() {resolve("timeout")}, time)
  })
}

function askQuestionThenRemoveQuestion(time){
  appendQuestion()
  askQuestionThen(time).then(function(resolveMessage) {
    console.log(resolveMessage)
    let score = document.querySelector("#score")

    if (resolveMessage === "Correct Answer") {
      score.innerText = (parseInt(score.innerText) + 5)
    } else {
      score.innerText = 0
    }
    removeQuestion()
  })
}

function appendQuestion(){
  toggleButtons()
  let questionContainer = document.querySelector(".question-container")
  let newQuestion = document.createElement("p")
  newQuestion.innerHTML = question.questionText
  newQuestion.dataset.answer = question.answer
  newQuestion.id = "question"
  questionContainer.appendChild(newQuestion)
}

function removeQuestion(){
  toggleButtons()
  let postedQuestion = document.querySelector("#question")
  document.querySelector(".question-container").removeChild(postedQuestion)
}

function toggleButtons(){
  let trueButton = document.querySelector("#true")
  let falseButton = document.querySelector("#false")
  let askButton = document.querySelector("#ask")

  trueButton.classList.toggle("hide")
  falseButton.classList.toggle("hide")
  askButton.classList.toggle("hide")
}
