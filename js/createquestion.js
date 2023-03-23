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
  question.textContent = formdata.question;
  section.classList.add("qcard");
  section.append(question);

  body.append(section);
}
