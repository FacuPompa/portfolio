//función que me aplica el estilo a la opción seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    let opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.classList.remove("seleccionado"));
    link.classList.add("seleccionado");

    //hacemos desaparecer el menú una vez que se ha seleccionado una opción en modo responsive
    let x = document.getElementById("nav");
    x.classList.remove("responsive");
}

//función que muestra el menú responsive
function responsiveMenu() {
    toggleMenu();
}

function toggleMenu() {
    let nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
}

//detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//función que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
    }
}

//función para descargar el CV al hacer clic en el botón
document.getElementById('downloadbtn').addEventListener('click', function() {
    downloadCV();
});

function downloadCV() {
    let link = document.createElement('a');
    link.href = '/utils/cv.pdf';
    link.download = 'facundo_pompa_cv.pdf';

    link.click();
}

//función para mostrar una alerta al enviar el formulario
function mostrarAlerta(titulo, mensaje, tipo) {
    alert(titulo + ": " + mensaje);
}

//función para enviar el formulario
function sendForm(event) {
    event.preventDefault();

    let formulario = document.getElementById("form");
    let nombreCompleto = formulario.elements["name"].value;
    let email = formulario.elements["email"].value;
    let tema = formulario.elements["title"].value;
    let mensaje = formulario.elements["message"].value;

    if (nombreCompleto.trim() === "" || email.trim() === "" || tema.trim() === "" || mensaje.trim() === "") {
        mostrarAlerta("Error", "Por favor, completa todos los campos obligatorios.", "error");
        return;
    }

    if (!validarFormatoEmail(email)) {
        mostrarAlerta("Error", "Por favor, ingresa una dirección de correo electrónico válida.", "error");
        return;
    }

    // Envía el formulario
    formulario.submit();
}
