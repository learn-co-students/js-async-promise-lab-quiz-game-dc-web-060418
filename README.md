JS Async Promises Lab
---

## Objectives
1. Practice working with setTimeout and asynchronous code
2. Practice working with promises


## Introduction

In this lab we'll practice using promises, as well as our other JavaScript skills, to make a game that some of our passengers can play during their ride.  It's a quiz game with a series of true or false question that our passengers must answer.  The user clicks on the "Ask Away!" button and that displays the next question as well as the True and False buttons. If they guess correctly, their score increments. If within five seconds the user does not answer the question, time is up and the question, and True and False buttons, disappear while the "Ask Away button appears again".   

## Your task

We have already done some of the work for you.  We have uploaded the "materialize.css" library, so that our game has some styling.  And if you look at the `index.html` file, you can see that we have provided a div "question-container" where the question should be displayed, and a div of "true false list" to hold the buttons.  

There are number of functions that we need to build to get this functionality to work.  

+ `nextQuestion` - Updates the global `question` variable to the next question in the list or loops back around to the start from the end of the list.
+ `appendQuestion` - Appends the question to the "question-container" in the `index.html` file
+ `askQuestionThen(time)` - Returns a promise that is resolved after (1) the user selects an answer or (2) after a specified amount of time (so that we can expire the question after 5 seconds). The amount of time to wait is provided as an argument to the function. The resolve value should reflect whether the user successfully answered the question correctly.
+ `removeQuestion()` - Removes the question from the "question-container". It also hides the true and false buttons and shows the ask away button again.
+ `askQuestionThenRemoveQuestion(time)` - It appends the question to the "question-container" and after (1) the user selects an answer or (2) after a specified amount of time, removes the question. It takes an argument of "time" indicating the amount of time the question will be displayed. 
+ `toggleButtons` - It toggles the hide class if not on the buttons, and removes the hide class if it is on the buttons. This should affect the true, false, and ask away buttons.
+ `displayQuestionOnClick`  - It hides the ask away button while displaying the true and false buttons and the question for five seconds, and then hides both of the true and false questions, removes the text of the question, and shows the ask away button

## Resources

- [Wikipedia: First-class function](https://en.wikipedia.org/wiki/First-class_function)
- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [JavaScript is Sexy: Higher-Order Functions](http://javascriptissexy.com/tag/higher-order-functions/)
