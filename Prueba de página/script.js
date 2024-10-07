// Selecciona todos los elementos que deben aparecer con el scroll
const secciones = document.querySelectorAll('.left, .right, .indice');

// Función para mostrar los elementos al hacer scroll
function mostrarAlDesplazar() {
    const triggerBottom = window.innerHeight * 0.8; // 80% de la altura de la ventana

    secciones.forEach(seccion => {
        const topPos = seccion.getBoundingClientRect().top;

        if (topPos < triggerBottom) {
            seccion.classList.add('show'); // Añade la clase para hacer visible el elemento
        } else {
            seccion.classList.remove('show'); // Elimina la clase si no está visible
        }
    });
}

// Escucha el evento de scroll
window.addEventListener('scroll', mostrarAlDesplazar);

// Llama a la función al cargar la página
mostrarAlDesplazar();

