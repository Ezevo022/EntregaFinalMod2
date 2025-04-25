const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".botones button");

// Evento click en cualquier boton
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        // Se vacia la pantalla en caso de estar en algun error
        if (pantalla.value === "Error" || pantalla.value === "Infinity") {
            pantalla.value = "";
        }

        // Se elige que hacer depende el boton seleccionado
        if (valor === "=" && !(pantalla.value === "")) {
            try {
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