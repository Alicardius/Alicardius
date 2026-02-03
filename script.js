const form = document.querySelector(".newsletter-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = form.querySelector("input[type='email']");
  if (!emailInput.value.trim()) {
    emailInput.focus();
    return;
  }

  form.reset();
  alert("Thanks for subscribing! Your first letter arrives Friday night.");
});
