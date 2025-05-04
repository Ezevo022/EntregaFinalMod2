const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const cerrarBtn = document.getElementById('cerrar');

// Al hacer click en cada imagen se captura su ubicacion y texto
// alternativo para ampliarlo luego.
// Como genera un array se captura con un listener evento click por cada elemento.
document.querySelectorAll('.galeria img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        modalImg.alt = img.alt;
    });
});

cerrarBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Se agrega evento para cerrar la ampliacion en caso de hacer click
// fuera de la imagen por mas que no sea en el boton de X.
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});