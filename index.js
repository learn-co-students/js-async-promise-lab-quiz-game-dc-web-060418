const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: "false"},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: "true"},
  {questionText: "Goldfish only have a memory of about three seconds", answer: "false"}
]

let question = questions[0]
let questionContainer = document.querySelector(".question-container")
let buttons = document.querySelectorAll(".btn")
let score = 0

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#ask").addEventListener("click", function(){
    question = nextQuestion()
    displayQuestionOnClick()
    toggleButtons()
  })
})


function nextQuestion(){
  currentIndex = questions.indexOf(question)
  return question = questions[(currentIndex +1) % questions.length]

}

function displayQuestionOnClick(){
  askQuestionThenRemoveQuestion(5000)
}

function askQuestionThen(time){
  appendQuestion()
  return new Promise((resolve, reject) => {
   
    document.querySelector("#true").addEventListener("click", function(){
      if (question.answer === "true") {
        score++
        document.querySelector("#score").innerText = score
        resolve()
      }
      if (question.answer === "false") {
        console.log("I hear you")
        resolve()
      }
    })
  
    document.querySelector("#false").addEventListener("click", function(){
      if (question.answer === "false") {
        score++
        document.querySelector("#score").innerText = score
        resolve()
      }
      if (question.answer === "true") {
        console.log("I hear you")
        resolve()
      }
    });
   
    setTimeout(function() {
      resolve()
    }, time)
  })
  
}


function askQuestionThenRemoveQuestion(time){
  askQuestionThen(time).then(() => {
    toggleButtons()
    removeQuestion() 
    
  })
  


}

function appendQuestion(){
  newQuestion = document.createElement("p")
  newQuestion.innerText = question.questionText
  questionContainer.appendChild(newQuestion)
}

function removeQuestion(){
  questionContainer.removeChild(newQuestion)

}

function toggleButtons(){
  buttons.forEach(function(button){ 
    button.classList.toggle("hide");

  })


}
