const newCardForm = document.querySelector('[data-js="newCardForm"]');
const body = document.querySelector('[data-js="addquestion__body"]');

newCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const entries = Object.fromEntries(data);
  createCard(entries);
});

function createCard(formdata) {
  const section = document.createElement("section");
  const question = document.createElement("p");
  const answerbutton = document.createElement("button");
  const answer = document.createElement("p");
  answer.classList.add("qcard__answer", "qcard__answer--hide");
  answer.textContent = formdata.answer;
  answer.setAttribute = ("data-js", "answer_one");
  answerbutton.classList.add("qcard__answer-button");
  answerbutton.setAttribute("data-js", "answer-button-one");
  answerbutton.addEventListener("click", () =>
    answer.classList.toggle("qcard__answer--hide")
  );
  question.textContent = formdata.question;
  section.classList.add("qcard");
  section.append(question);
  section.append(answerbutton);
  section.append(answer);
  body.append(section);
}
