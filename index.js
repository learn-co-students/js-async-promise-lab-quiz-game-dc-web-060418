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
  currIndex = questions.indexOf(question)
  return questions[(currIndex + 1) % questions.length]
}

function displayQuestionOnClick(){
  askQuestionThenRemoveQuestion(5000)
}

//Returns a Promise obj that resolves with either a true or false value.
//The promise resolves with true if the user clicked the correct answer.
//The promise resolves with false if the user clicked the wrong answer
//or if 5 seconds have passed
function askQuestionThen(time){
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    document.querySelector(".answer-buttons").addEventListener("click", function(event){
      if(checkQuestion(event.target.id)){
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
function askQuestionThenRemoveQuestion(time){
   askQuestionThen(time)
  .then((correctGuess) => {
    if(correctGuess){
      incrementScore()
    }
    removeQuestion();
  })
}

function appendQuestion(){
  let container = document.querySelector('.question-container')
  container.innerHTML = question.questionText;
  toggleButtons()
}

function checkQuestion(answer){
  return question.answer === answer
}

function removeQuestion(){
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
