// Validar imagen JPG y previsualizar
function mostrarImagen(evento) {
    const imagenPelícula = document.querySelector("#imagenPelícula");
    const fileFoto = document.querySelector("#foto");
    const files = evento.target.files;
    const archivo = files[0];

    if (!archivo) return;

    const url = URL.createObjectURL(archivo);
    const filename = archivo.name;
    const extension = filename.split('.').pop().toLowerCase();

    if (extension !== 'jpg') {
        fileFoto.value = "";
        Swal.fire("Formato inválido", "La imagen debe ser en formato JPG", "warning");
        imagenPelícula.removeAttribute("src");
    } else {
        imagenPelícula.setAttribute("src", url);
    }
}

// Validar campos obligatorios antes de enviar formulario
function validarFormulario(event) {
    const campos = document.querySelectorAll("input[required], select[required], textarea[required]");
    let formularioValido = true;

    campos.forEach(campo => {
        if (!campo.value.trim()) {
            formularioValido = false;
        }
    });

    if (!formularioValido) {
        event.preventDefault();
        Swal.fire("Campos vacíos", "Todos los campos son obligatorios", "error");
    }
}

// Confirmar antes de eliminar una película
function confirmarEliminacion(event) {
    event.preventDefault();
    const enlace = event.currentTarget.href;

    Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = enlace;
        }
    });
}

// Asignar eventos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const inputFile = document.querySelector("#foto");
    const form = document.querySelector("form");
    const botonesEliminar = document.querySelectorAll(".btn-eliminar");

    if (inputFile) {
        inputFile.addEventListener("change", mostrarImagen);
    }

    if (form) {
        form.addEventListener("submit", validarFormulario);
    }

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", confirmarEliminacion);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const inputImagen = document.querySelector('input[name="imagen"]');
    const vistaPrevia = document.createElement("img");
    vistaPrevia.style.maxWidth = "200px";
    vistaPrevia.style.marginTop = "10px";

    if (inputImagen) {
        inputImagen.after(vistaPrevia);

        inputImagen.addEventListener("change", function () {
            const archivo = this.files[0];

            if (archivo) {
                // Validar extensión JPG
                const extension = archivo.name.split(".").pop().toLowerCase();
                if (extension !== "jpg") {
                    alert("Solo se permiten imágenes en formato JPG.");
                    this.value = "";
                    vistaPrevia.src = "";
                    return;
                }

                // Previsualizar imagen
                const lector = new FileReader();
                lector.onload = function (e) {
                    vistaPrevia.src = e.target.result;
                };
                lector.readAsDataURL(archivo);
            }
        });
    }
});
