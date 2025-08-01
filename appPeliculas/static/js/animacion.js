document.addEventListener("DOMContentLoaded", function () {
  const mensaje = document.querySelector("#mensaje");

  if (mensaje) {
    mensaje.style.opacity = 0;
    mensaje.style.transition = "opacity 2s";

    setTimeout(() => {
      mensaje.style.opacity = 1;
    }, 200); 
  }
});
