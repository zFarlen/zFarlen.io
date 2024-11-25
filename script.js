// Alternar entre tema claro e escuro
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    toggleButton.innerText = "🌞"; // Ícone para tema claro
  } else {
    toggleButton.innerText = "🌙"; // Ícone para tema escuro
  }
});


// Validar formulário de contato
const form = document.getElementById("contact-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const successMessage = document.getElementById("success-message");
  const name = form.querySelector("input[name='name']").value;
  const email = form.querySelector("input[name='email']").value;
  const message = form.querySelector("textarea[name='message']").value;

  // Simulação de envio
  if (name && email && message) {
    successMessage.innerText = "Mensagem enviada com sucesso!";
    form.reset();
  } else {
    successMessage.innerText = "Por favor, preencha todos os campos.";
  }
});
