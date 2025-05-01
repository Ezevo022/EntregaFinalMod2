const form = document.getElementById("formulario")
const lista = document.querySelector("#listaTareas")

//Evento de emilinar la tarea
const eliminarTarea = (id) => {
    const node = document.getElementById(id)
    const checkbox = node.querySelector("input[type='checkbox']");
    // const nodeParent = node.parentNode;

    if (!checkbox.checked) {
        alert("No se puede eliminar una tarea NO completada.");
        return;
    }

    node.remove()
}

let contador = 1;

//Evento de agregar una tarea
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const texto = form.tarea.value

    const nuevoElemento = document.createElement("li")
    nuevoElemento.id = contador
    
    nuevoElemento.innerHTML = `
    <input type='checkbox'>
        <span>
            ${texto}
        </span>
    <button onclick='eliminarTarea("${contador}")'>X</button>
    `

    lista.appendChild(nuevoElemento)
    form.tarea.value = ""

    contador++;
})