const saveContact = (ls, contact) => {
    ls.setItem(contact.id, JSON.stringify(contact))
    window.location.href = 'http://127.0.0.1:5500/index.html'
}

const cargarContactos = (ls, parentNode) => {
    let claves = Object.keys(ls)

    for (clave of claves) {
        let contact = JSON.parse(ls.getItem(clave))
        createContact(parentNode, contact, ls)

    }



}

const createContact = (parentNode, contact, ls) => {
    let divContact = document.createElement('div')
    let nombreContact = document.createElement('h3')
    let numeroContact = document.createElement('p')
    let direccionContact = document.createElement('p')
    let iconoDelete = document.createElement('span')

    nombreContact.innerHTML = contact.nombre
    numeroContact.innerHTML = contact.numero
    direccionContact.innerHTML = contact.direccion
    iconoDelete.innerHTML = 'delete'

    divContact.classList.add('tarea')
    iconoDelete.classList.add('material-icons', 'icono')

    iconoDelete.onclick = () => {
        ls.removeItem(contact.id)
        window.location.href = 'http://127.0.0.1:5500/index.html'
    }
    divContact.appendChild(nombreContact)
    divContact.appendChild(numeroContact)
    divContact.appendChild(direccionContact)
    divContact.appendChild(iconoDelete)

    parentNode.appendChild(divContact)

}
