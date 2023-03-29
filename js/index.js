const answerButtonOne = document.querySelector('[data-js="answer-button-one"]');
const answerOne = document.querySelector('[data-js="answer_one"]');
const answerButtonTwo = document.querySelector('[data-js="answer-button-two"]');
const answerButtonThree = document.querySelector(
  '[data-js="answer-button-three"]'
);
const answerTwo = document.querySelector('[data-js="answer_two"]');
const answerThree = document.querySelector('[data-js="answer_three"]');
const addButton = document.querySelector('[data-js="addButton"]');
const bookmarkToggleOne = document.querySelector('[data-js="bookmark"]');
const bookmarkToggleTwo = document.querySelector('[data-js="bookmarktwo"]');
const bookmarkToggleThree = document.querySelector('[data-js="bookmarkthree"]');

answerButtonOne.addEventListener("click", () => {
  answerOne.classList.toggle("qcard__answer--hide");
});

answerButtonTwo.addEventListener("click", () => {
  answerTwo.classList.toggle("qcard__answer--hide");
});

answerButtonThree.addEventListener("click", () => {
  answerThree.classList.toggle("qcard__answer--hide");
});
bookmarkToggleOne.addEventListener("click", () => {
  bookmarkToggleOne.classList.toggle("qcard__bookmark--clicked");
});
bookmarkToggleTwo.addEventListener("click", () => {
  bookmarkToggleTwo.classList.toggle("qcard__bookmark--clicked");
});
bookmarkToggleThree.addEventListener("click", () => {
  bookmarkToggleThree.classList.toggle("qcard__bookmark--clicked");
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


