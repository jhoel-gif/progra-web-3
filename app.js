const formulario = document.querySelector("form");
const mensaje = document.createElement("p");
mensaje.id = "mensaje";
formulario.after(mensaje);

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    mensaje.textContent = `Registro realizado para ${nombre}`;
    formulario.reset();
});