const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: "false"},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: "true"},
  {questionText: "Goldfish only have a memory of about three seconds", answer: "false"}
]

let index = 0
let question = questions[index]


document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#ask").addEventListener("click", function(){
    nextQuestion()
    displayQuestionOnClick()
  })
});


function nextQuestion(){
  if(index === questions.length - 1) {
    index = 0
    question = questions[index];
  } else {
    index++
    question = questions[index]
  }
}

function displayQuestionOnClick(){
  askQuestionThenRemoveQuestion(5000)
}

function askQuestionThen(time){
  appendQuestion()
  return new Promise((resolve, reject) => {
    document.querySelector(".answer-buttons").addEventListener("click", function(event){
      if(question.answer === event.target.id) {
        console.log("answer is correct")
        resolve(true)
      } else {
        console.log("answer is incorrect")
        resolve(false);
      }
    })
    setTimeout(function(){
      resolve(false)
    }, time)
  })
}

function askQuestionThenRemoveQuestion(time){
  askQuestionThen(time).then(resolve => {
    let score = document.getElementById("score")
    if (resolve=== true) {
      score.innerText = parseInt(score.innerText) + 1
    } else if (resolve === false) {
      score.innerText = 0;
    }
      removeQuestion(question)
  })
}

function appendQuestion(){
  container = document.querySelector(".question-container")
  container.innerText = question.questionText;
  toggleButtons()
}

function removeQuestion(){
  container = document.querySelector(".question-container")
  container.innerText = ""
  toggleButtons()
}

function toggleButtons(){
  document.querySelector("#ask").classList.toggle("hide")
  document.querySelector("#true").classList.toggle("hide")
  document.querySelector("#false").classList.toggle("hide")
}
