let nombreAmigo;
const listaAmigos = [];

function agregarAmigo() {
  nombreAmigo = document.getElementById("amigo").value;
  // Validando que el dato no esté vacio y en caso este vacío no se guarde en la array
  if (nombreAmigo == "") {
    alert("NO INGRESES DATOS VACÍOS.");
    return;
  } else {
    mostrarListaAmigos("ul", nombreAmigo);
    listaAmigos.push(nombreAmigo);
    limpiarCaja();
  }
}

function mostrarListaAmigos(elemento, texto) {
  //  Para identificar el elemento donde será la lista
  const lista = document.querySelector(elemento);
  //  Crear los li para la ul
  const nuevoAmigo = document.createElement("li");
  // Agregando texto al li
  nuevoAmigo.textContent = texto;
  // Agregando a la li como hijo de la ul
  lista.appendChild(nuevoAmigo);
}

function limpiarCaja() {
  document.querySelector("#amigo").value = "";
}

function sortearAmigo() {
  const indiceArray = Math.floor(Math.random() * listaAmigos.length);
  asignarTextoElemento(
    "ul",
    ` <strong style="color: #39ff14;"> El amigo secreto sorteado es: ${listaAmigos[indiceArray]}</strong>`
  );
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}
