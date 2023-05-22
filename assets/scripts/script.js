//recuperamos los datos del formulario
document.addEventListener('DOMContentLoaded'),() =>{
    const form = document.getElementById(formula);
}




form.addEventListener("submit", onformSubmit);
//funcion que ejecuta al enviar el formulario

function onformSubmit(event){
event.preventDefault();
const data = new FormData(event.target);
const name = data.get("name");
const email = data.get("email");
const text  = data.get("msg");
console.log(`Nombre: ${name}, correo electronico: ${email}, mensaje: ${msg}`);
}

