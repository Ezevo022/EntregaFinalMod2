const pantalla = document.querySelector(".pantalla");
// Se obtiene un array con todos los botones del documento para manejarlos
const botones = document.querySelectorAll(".botones button");

// Evento click en cualquier boton del documento usando forEach al ser un arreglo
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        // Se vacia la pantalla en caso de estar en algun error par que luego
        // no se nos genere un error si queremos evaluar dicho valor con eval
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
            pantalla.value = pantalla.value.slice(0, -1);
        } else {
            pantalla.value += valor;
        }
    });
});