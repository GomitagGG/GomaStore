// Función para abrir el modal
function abrirModal(nombreJuego) {
  var modalId = "modal-" + nombreJuego;
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
  }
}

// Función para cerrar el modal
function cerrarModal(nombreJuego) {
  var modalId = "modal-" + nombreJuego;
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
    
    // Pausar y reiniciar el video
    var video = modal.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }
}