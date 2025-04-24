const form = document.getElementById("formulario")
const lista = document.querySelector("#listaTareas")

const eliminarTarea = (id) => {
    const node = document.getElementById(id)
    const checkbox = node.querySelector("input[type='checkbox']");
    const nodeParent = node.parentNode;

    if (!checkbox.checked) {
        alert("No se puede eliminar una tarea NO completada.");
        return;
    }

    nodeParent.remove()
}

let contador = 1;

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const texto = form.tarea.value

    const nuevoElemento = document.createElement("li")
    nuevoElemento.innerHTML = `
    <div id="${contador}">
    <input type='checkbox'>
        <span>
            ${texto}
        </span>
    <button class='botonEliminar' onclick='eliminarTarea("${contador}")'>X</button>
    </div>
    `

    lista.appendChild(nuevoElemento)
    form.tarea.value = ""

    contador++;
})