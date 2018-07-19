const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: "false"},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: "true"},
  {questionText: "Goldfish only have a memory of about three seconds", answer: "false"}
]

let question = questions[0]
let questionId = 0

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#ask").addEventListener("click", function(){
    question = nextQuestion()
    displayQuestionOnClick()
  })
});

function nextQuestion(){
  questionId = (questionId === questions.length-1) ? 0 : questionId + 1
  return questions[questionId]
}

function displayQuestionOnClick(){
  askQuestionThenRemoveQuestion(5000)
}

function askQuestionThen(time){
  appendQuestion()
  toggleButtons()
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(false)  
    }, time);
    document.getElementById('true').addEventListener("click",()=> resolve((question.answer === "true")? true : false))
    document.getElementById('false').addEventListener("click", () => resolve((question.answer === "false") ? true : false))
  })
}

function askQuestionThenRemoveQuestion(time){
  askQuestionThen(time).then((answer)=>{
    if (answer) {
      const score =document.getElementById("score")
      score.innerText = parseInt(score.innerText) +1
    }
    removeQuestion()
    toggleButtons()
  })
}

function appendQuestion(){
  document.querySelector(".question-container").appendChild(document.createTextNode(question.questionText))
}

function removeQuestion(){
  document.querySelector(".question-container").innerHTML = ""
}

function toggleButtons(){
  
  document.getElementById('true').classList.toggle('hide')
  document.getElementById('false').classList.toggle('hide')
  document.getElementById('ask').classList.toggle('hide')
}
