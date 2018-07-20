const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: "false"},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: "true"},
  {questionText: "Goldfish only have a memory of about three seconds", answer: "false"}
]
let index = 0;
let question = questions[index];
let userAnswer;
let score = 0;

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#ask").addEventListener("click", function(){
    question = nextQuestion()
    displayQuestionOnClick()
  })
});

function nextQuestion(){
  //loop index value 0-2
  index = (index + 1) % 3;
  //console.log(questions[index])
  return questions[index];
}

function displayQuestionOnClick(){
  askQuestionThenRemoveQuestion(5000)
}

function askQuestionThen(time){
  return new Promise((resolve, reject) => {
    //green button event and answer handling
    document.querySelector(".green").addEventListener("click", () => {
      let answer = (question.answer === "true") ? true : false 
      resolve(answer)
    })
    //red button event and answer handling
    document.querySelector(".red").addEventListener("click", () => {
      let answer = (question.answer === "false") ? true : false
      resolve(answer)
    })

    setTimeout(function(){
      //user doesn't answer in time
      resolve(false)
    }, time )
  })
}

function askQuestionThenRemoveQuestion(time){
  removeAnswerCorrectedness();
  appendQuestion();
  toggleButtons();
  askQuestionThen(time)
  .then(answerWas => {
    if (answerWas) {
      increaseScore();
      showAnswerCorrectedness("correct!!")
    } else {
      showAnswerCorrectedness("incorrect!!")
    }
    removeQuestion();
  })
}

function appendQuestion(){
  let questionElement = document.createElement("h4")
  questionElement.innerText = question.questionText
  document.querySelector(".question-container").appendChild(questionElement)
}

function removeQuestion(){
  let questionElement = document.querySelector("h4")
  document.querySelector(".question-container").removeChild(questionElement)
  toggleButtons();

}

function toggleButtons(){
  const greenBtn = document.querySelector(".green")
  const redBtn = document.querySelector(".red")
  const showBtn = document.getElementById("ask")
  greenBtn.classList.toggle("hide")
  redBtn.classList.toggle("hide")
  showBtn.classList.toggle("hide")
}


function increaseScore(){
  score++;
  document.getElementById("score").innerText = score;
}

function showAnswerCorrectedness(answerCorrectedness) {
  let answerElement = document.createElement("h6")
  answerElement.innerHTML = `Your answer was ${answerCorrectedness}`
  document.querySelector(".question-container").appendChild(answerElement)
}

function removeAnswerCorrectedness() {
  let answerElement = document.querySelector("h6")
  if (answerElement) {
    document.querySelector(".question-container").removeChild(answerElement);
  }
  
}
