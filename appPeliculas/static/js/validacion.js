document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (event) {
      const inputs = form.querySelectorAll("input[type='text'], textarea");
      for (let input of inputs) {
        if (input.value.trim() === "") {
          alert("Por favor, completa todos los campos.");
          event.preventDefault();
          return;
        }
      }
    });
  }

  const mensaje = document.querySelector("#mensaje");
  if (mensaje) {
    mensaje.style.opacity = 0;
    mensaje.style.transition = "opacity 1.5s";
    setTimeout(() => {
      mensaje.style.opacity = 1;
    }, 200);
  }
});
