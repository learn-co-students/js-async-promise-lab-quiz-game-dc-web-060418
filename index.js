const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: "false"},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: "true"},
  {questionText: "Goldfish only have a memory of about three seconds", answer: "false"}
]

document.addEventListener("DOMContentLoaded", function(){
  let question = questions[0]
  document.querySelector("#ask").addEventListener("click", function(){
    displayQuestionOnClick(question)
    question = nextQuestion(question)
  })
});

function nextQuestion(question){
  currIndex = questions.indexOf(question)
  return questions[(currIndex + 1) % questions.length]
}

function displayQuestionOnClick(question){
  askQuestionThenRemoveQuestion(question, 5000)
}

//Returns a Promise obj that resolves with either a true or false value.
//The promise resolves with true if the user clicked the correct answer.
//The promise resolves with false if the user clicked the wrong answer
//or if 5 seconds have passed
function askQuestionThen(question, time){
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    document.querySelector(".answer-buttons").addEventListener("click", function(event){
      if(checkQuestion(question, event.target.id)){
        resolve(true)
      }else{
        resolve(false)
      }
    })
    setTimeout(function(){
      resolve(false)
    }, time)
  })
}

//Invokes the askQuestionThen function and passes the promiseValue to the removeQuestion function
function askQuestionThenRemoveQuestion(question, time){
   askQuestionThen(question, time)
  .then((correctGuess) => {
    removeQuestion(correctGuess)
  })
}

function appendQuestion(question){
  let container = document.querySelector('.question-container')
  container.innerHTML = question.questionText;
  toggleButtons()
}

function checkQuestion(question, answer){
  return question.answer === answer
}

function removeQuestion(correctGuess){
  if(correctGuess){
    incrementScore()
  }
  let container = document.querySelector('.question-container')
  container.innerHTML = ''
  toggleButtons()
}

function toggleButtons(){
  document.querySelector("#true").classList.toggle('hide')
  document.querySelector("#false").classList.toggle('hide')
  document.querySelector("#ask").classList.toggle('hide')
}

function incrementScore(){
  let score = document.querySelector("#score").innerHTML
  score++
  document.querySelector("#score").innerHTML = score
}
