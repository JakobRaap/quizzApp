const answerButtonOne = document.querySelector('[data-js="answer-button-one"]');
const answerOne = document.querySelector('[data-js="answer_one"]');
const answerButtonTwo = document.querySelector('[data-js="answer-button-two"]');
const answerButtonThree = document.querySelector(
  '[data-js="answer-button-three"]'
);
const answerTwo = document.querySelector('[data-js="answer_two"]');
const answerThree = document.querySelector('[data-js="answer_three"]');
const addButton = document.querySelector('[data-js="addButton"]');

answerButtonOne.addEventListener("click", () => {
  answerOne.classList.toggle("qcard__answer--hide");
});

answerButtonTwo.addEventListener("click", () => {
  answerTwo.classList.toggle("qcard__answer--hide");
});

answerButtonThree.addEventListener("click", () => {
  answerThree.classList.toggle("qcard__answer--hide");
});

let questions = [
  {
    question:
      "Wie lautet der name der Wäscherei über die man das St. Mungo Hospital betritt",
    answer: "Reinig & Tunkunter GMBH",
  },
  { question: "Wie heißt Albus Dumbledores letzter Vorname?", answer: "Brian" },
];
console.log(questions[1].answer);

function createCard(question, answer) {}
