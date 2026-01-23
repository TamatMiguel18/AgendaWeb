import { Button } from "./components/common/button/button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { viewContacts, viewNewContacts, viewToDoList, viewNewTask } from "./components/layout/nav/NavController.js";


let app = document.getElementById("app");

let nav = document.getElementById("nav");

nav.appendChild(Button(
    "Agenda",
    "agenda",
    "User.svg",
    viewContacts
));
nav.appendChild(Button(
    "+",
    "plus",
    "mas.svg",
    viewNewContacts
));
nav.appendChild(Button(
    "Tareas",
    "toDoList",
    "lista.svg",
    viewToDoList
));
nav.appendChild(Button(
    "Crear Tarea",
    "plus",
    "mas.svg",
    viewNewTask
));

let container = document.getElementById("container");

container.appendChild(Contactos());

async function tareas() {
    try {
        let data = await fetch("http://jsonplaceholder.typicode.com/posts");
        let r = await data.json();
        console.log(r);

    } catch (error) {
        console.log(error);
    }
}

tareas();

console.log("Completado")