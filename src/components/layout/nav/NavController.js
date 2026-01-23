import { Contactos } from "../../sections/contactos/Contactos.js";
import { nuevoContacto } from "../../sections/newContactFrom/NewContactFrom.js";
import { tareas } from "../../sections/tareas/toDoList.js";
import { NuevaTarea } from "../../sections/newTarea/newTarea.js";

let container = document.getElementById("container");
let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function () {
    container.innerHTML = "";
    container.appendChild(nuevoContacto());
}

let viewToDoList = function () {
    container.innerHTML = "";
    container.appendChild(tareas());
}

let viewNewTask = function () {
    container.innerHTML = "";
    container.appendChild(NuevaTarea());
}

export { viewContacts, viewNewContacts, viewToDoList, viewNewTask };
