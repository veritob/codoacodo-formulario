const form = document.querySelector("form");
const usuario = document.getElementById("usuario");
const clave = document.getElementById("clave");
form.onsubmit = function (e) {
  if (!usuario.value.includes("@")) {
    e.preventDefault();
    alert("Falta el arroba en el usuario!");
  }
  if (clave.value === "") {
    alert("Cuadro clave vacio");
  }
};
