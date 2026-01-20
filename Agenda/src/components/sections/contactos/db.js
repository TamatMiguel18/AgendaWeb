let STORAGE_KEY = "contactos";

let ContactList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
    { nombre: "Pablo Garcia", telefono: "123456789" },
    { nombre: "Maria Sanchez", telefono: "123456789" },

];

let guardarContactos = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ContactList));
}

export { ContactList, guardarContactos };