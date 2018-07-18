// const expect = chai.expect;
//
// describe('index', () => {
//   describe('appendQuestion', () => {
//     let question = questions[0]
//     it('appends the question to the question-container', function(){
//       appendQuestion(question)
//       expect(document.querySelector('.question-container').innerHTML).to.eq('Lightning never strikes in the same place twice')
//     })
//   })
//
//   describe('askQuestionThen', () => {
//     let questionContainer;
//
//     beforeEach(function () {
//       questionContainer = document.querySelector('.question-container')
//      });
//
//     it('should have question start off as undefined', () => {
//       expect(question).to.eq(undefined)
//     })
//
//     it("should assign a global variable question to equal a question", function() {
//       askQuestionThen()
//       expect(question.answer).to.be.a('boolean')
//     })
//
//     it('should append the question', function(){
//       askQuestionThen()
//       expect(document.querySelector('.question-container').innerHTML).to.eq('Lightning never strikes in the same place twice')
//     })
//
//     it('should return a promise', function(){
//       expect(askQuestionThen()).to.be.a('promise')
//     })
//   })
//
//   describe('removeQuestion', () => {
//     let question = questions[0]
//
//     it('removes the question to the question-container', function(){
//       appendQuestion(question)
//       expect(document.querySelector('.question-container').innerHTML).to.eq('Lightning never strikes in the same place twice')
//       removeQuestion()
//       expect(document.querySelector('.question-container').innerHTML).to.eq('')
//     })
//   })
//
//   describe('askQuestionThenRemoveQuestion', function(){
//     let questionContainer;
//     let removeQuestionSpy
//     beforeEach(function () {
//       questionContainer = document.querySelector('.question-container')
//      });
//
//     it('should append the question for 10 seconds and then remove the question when the promise resolves', function(){
//       let resolvingPromise = askQuestionThenRemoveQuestion(1000)
//       expect(questionContainer.innerHTML).to.eq("Lightning never strikes in the same place twice")
//       resolvingPromise.then( (result) => {
//           expect(questionContainer.innerHTML).to.equal('');
//       })
//     })
//   })
//
//   describe('trueAndFalseButtons', function(){
//     it('selects and returns the true and false buttons in the index.html file', function(){
//       expect(trueAndFalseButtons().length).to.eq(2)
//       expect(trueAndFalseButtons()[0].innerText).to.eq("TRUE")
//       expect(trueAndFalseButtons()[1].innerText).to.eq("FALSE")
//     })
//   })
//   describe('toggleTrueAndFalseButtons', function(){
//     it('changes hidden true and false buttons to displayed', function(){
//       trueAndFalseButtons().forEach(function(btn){
//         btn.classList.add('hide')
//       })
//       toggleTrueAndFalseButtons()
//       let btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
//       expect(Array.from(btns[0].classList)).to.not.include('hide')
//       expect(Array.from(btns[1].classList)).to.not.include('hide')
//     })
//
//     it('changes displayed true and false buttons to hidden', function(){
//       trueAndFalseButtons().forEach(function(btn){
//         btn.classList.remove('hide')
//       })
//       toggleTrueAndFalseButtons()
//       let btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
//       expect(Array.from(btns[0].classList)).to.include('hide')
//       expect(Array.from(btns[1].classList)).to.include('hide')
//     })
//   })
//
//   describe('displayQuestionOnClick', function(){
//     let event;
//     beforeEach(function(){
//       event = new MouseEvent('click', {
//         'view': window,
//         'bubbles': true,
//         'cancelable': true
//       });
//     })
//
//     it('it displays the question for after a click event to the button', function(){
//       displayQuestionOnClick()
//       let btn = document.querySelector('.btn')
//       btn.dispatchEvent(event)
//       let questionContainer = document.querySelector('.question-container')
//       expect(questionContainer.innerHTML).to.eq('Lightning never strikes in the same place twice')
//     })
//
//     it('also displays the true and false buttons', function(){
//       displayQuestionOnClick()
//       let btn = document.querySelector('.btn')
//       btn.dispatchEvent(event)
//       let questionContainer = document.querySelector('.question-container')
//       let btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
//       setTimeout(function(){
//         expect(Array.from(btns[0].classList)).to.not.include('hide')
//         expect(Array.from(btns[1].classList)).to.not.include('hide')
//       }, 500)
//     })
//   })
// })
