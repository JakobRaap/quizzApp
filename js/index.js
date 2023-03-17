const answerButtonOne = document.querySelector('[data-js="answer-button-one"]');
const answerOne = document.querySelector('[data-js="answer_one"]');
const answerButtonTwo = document.querySelector('[data-js="answer-button-two"]');
const answerButtonThree = document.querySelector(
  '[data-js="answer-button-three"]'
);
const answerTwo = document.querySelector('[data-js="answer_two"]');
const answerThree = document.querySelector('[data-js="answer_three"]');

answerButtonOne.addEventListener("click", () => {
  answerOne.classList.toggle("qcard__answer--hide");
});

answerButtonTwo.addEventListener("click", () => {
  answerTwo.classList.toggle("qcard__answer--hide");
});

answerButtonThree.addEventListener("click", () => {
  answerThree.classList.toggle("qcard__answer--hide");
});
