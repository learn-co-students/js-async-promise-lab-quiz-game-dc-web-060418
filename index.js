const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: "false"},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: "true"},
  {questionText: "Goldfish only have a memory of about three seconds", answer: "false"}
]

let question = questions[0]

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#ask").addEventListener("click", function(){
    question = nextQuestion()
    displayQuestionOnClick()
  })
});

function nextQuestion(){

}

function displayQuestionOnClick(){
  askQuestionThenRemoveQuestion(5000)
}

function askQuestionThen(time){

}

function askQuestionThenRemoveQuestion(time){

}

function appendQuestion(){

}

function removeQuestion(){

}

function toggleButtons(){

}
