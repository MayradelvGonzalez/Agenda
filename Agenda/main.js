const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btn = document.querySelector('.btn-add-contact');
const listado = document.querySelector('.listado');

const ls = window.localStorage

btn.onclick = () => {
    let contact = {
        id: Math.random(1, 100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,


    }
    saveContact(ls, contact)
}
cargarContactos(ls, listado)