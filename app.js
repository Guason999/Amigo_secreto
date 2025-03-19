// Arreglo para almacenar los nombres//
let nombres = [];
// Función para agregar un nombre de  amigo a la lista//
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const nombre = inputNombre.value.trim();
    // condicional para  el campo está vacío//
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    // funcion_para_agregar_el_nombre_al_array//
    nombres.push(nombre);
    actualizarLista();
    inputNombre.value = "";
    inputNombre.focus();
}
//Función para actualizar la lista de nombres//
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}
// Función para sortear un amigo aleatorio//
function sortearAmigo() {
    const resultadoSorteo = document.getElementById("resultado");
    
    if (nombres.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    resultadoSorteo.innerHTML = `<li>El amigo seleccionado es: <strong>${nombres[indiceAleatorio]}</strong></li>`;
}
