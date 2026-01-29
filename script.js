let form = document.querySelector("#form");
let email = document.querySelector("#email");

const formCard = document.querySelector("#form-container");
const field = document.querySelector(".field");
const successCard = document.getElementById("success-card");
const userEmail = document.getElementById("user-email");
const dismissBtn = document.getElementById("dismiss-btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!email.checkValidity()) {
    field.classList.add("error");
    return;
  } else {
    field.classList.remove("error");
  }

  const emailValue = email.value.trim();
  if (!emailValue) return;
  userEmail.textContent = emailValue;

  formCard.classList.add("hidden");
  successCard.classList.remove("hidden");
});

dismissBtn.addEventListener("click", function () {
  successCard.classList.add("hidden");
  formCard.classList.remove("hidden");
  form.reset();
});
