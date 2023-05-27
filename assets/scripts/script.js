document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario');

  form.addEventListener("submit", onformSubmit);
});

function onformSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const name = data.get("name");
  const email = data.get("mail");
  const text = data.get("msg");
  console.log(`Nombre: ${name}, correo electrónico: ${email}, mensaje: ${text}`);
}
