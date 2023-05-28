document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario');

  form.addEventListener("submit", onformSubmit);
});

function validarFormulario(evento){
evento.preventDefault();

}

function onformSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const name = data.get("name");
  const email = data.get("mail");
  const text = data.get("msg");
  if(name.length == 0 || email.length ==0 ){
    alert('No has escrito nada en el usuario');
    return;
  }
  console.log(`Nombre: ${name}, correo electrónico: ${email}, mensaje: ${text}`);
}
