//tomamos el formulario desde javascript
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formula');

    form.addEventListener("submit", onformSubmit);
});


//levantamos el nombre, correo y texto con los id que le proveimos en html con javascript
function onformSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get("name");
    const email = data.get("mail");
    const text = data.get("msg");
    console.log(`Nombre: ${name}, correo electrónico: ${email}, mensaje: ${text}`);
}
