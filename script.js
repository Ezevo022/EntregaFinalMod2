const pantalla = document.querySelector(".pantalla");
// Se obtiene un array con todos los botones del documento para manejarlos
const botones = document.querySelectorAll(".botones button");

// Se captura evento click en cualquier boton del documento usando forEach al ser un arreglo
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        // Se vacia la pantalla en caso de estar en algun error par que luego
        // no se nos genere un problema si queremos evaluar dicho valor con eval()
        if (pantalla.value === "Error" || pantalla.value === "Infinity") {
            pantalla.value = "";
        }

        // Se elige que hacer depende el boton seleccionado
        if (valor === "=" && !(pantalla.value === "")) {
            try {
                // Se usa la funcion global eval para evaluar el string sin tener que
                // realizar una anidacion excesiva de if lo cual ensucia el codigo
                pantalla.value = eval(pantalla.value);
            } catch {
                pantalla.value = "Error";
            }
        } else if (valor === "=") {
            return;
        } else if (valor === "C") {
            pantalla.value = "";
        } else if (valor === "←") {
            // Se hace uso de la funcion global slice() para borrar el ultimo caracter.
            pantalla.value = pantalla.value.slice(0, -1);
        } else {
            pantalla.value += valor;
        }
    });
});

// Se agrega evento "Enter" para que sea mas sencillo el uso de la calculadora
// si se esta usando el teclado para ingresar valores.
document.getElementById('pantalla').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita que se envíe un formulario si hay uno

        if (pantalla.value === "Error" || pantalla.value === "Infinity") {
            pantalla.value = "";
            return;
        }

        if (pantalla.value !== "") {
            try {
                pantalla.value = eval(pantalla.value);
            } catch {
                pantalla.value = "Error";
            }
        }
    }
});