// Selecciona todos los elementos que deben aparecer con el scroll
const secciones = document.querySelectorAll('.left, .right, .indice, .ficha, .row');
const cierre = document.querySelector('.cierre'); // Contenedor de h1 y p
const intro = document.querySelector('.intro'); // Contenedor de intro

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

    // Mostrar el contenedor de la clase 'cierre'
    const topPosCierre = cierre.getBoundingClientRect().top;

    if (topPosCierre < triggerBottom) {
        cierre.classList.add('visible'); // Añade la clase 'visible' para la animación
    } else {
        cierre.classList.remove('visible'); // Elimina la clase si no está visible
    }

    // Mostrar el contenedor de la clase 'intro'
    const topPosIntro = intro.getBoundingClientRect().top;

    if (topPosIntro < triggerBottom) {
        intro.classList.add('visible'); // Añade la clase 'visible' para la animación
    } else {
        intro.classList.remove('visible'); // Elimina la clase si no está visible
    }
}

// Escucha el evento de scroll
window.addEventListener('scroll', mostrarAlDesplazar);

// Llama a la función al cargar la página
mostrarAlDesplazar();

// Selecciona el botón, el elemento de audio y el ícono
const audioButton = document.getElementById('audioButton');
const audio = document.getElementById('audio');
const audioIcon = document.getElementById('audioIcon');

// Variable para controlar el estado de reproducción
let isPlaying = false;

// Función para reproducir o pausar el audio
audioButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();  // Pausa el audio
        audioIcon.src = 'img/play.png'; // Cambia la imagen a 'play'
        audioIcon.alt = 'Play'; // Cambia el texto alternativo
    } else {
        audio.play();   // Reproduce el audio
        audioIcon.src = 'img/pausa.png'; // Cambia la imagen a 'pause'
        audioIcon.alt = 'Pause'; // Cambia el texto alternativo
    }
    isPlaying = !isPlaying; // Cambia el estado
});

// Evento para reiniciar el audio al hacer doble clic
audioButton.addEventListener('dblclick', () => {
    audio.currentTime = 0; // Reinicia el audio al inicio
    audio.play();          // Reproduce el audio
    audioIcon.src = 'img/pausa.png'; // Cambia la imagen a 'pause'
    audioIcon.alt = 'Pause'; // Cambia el texto alternativo
    isPlaying = true; // Asegura que el estado sea 'reproduciendo'
});
