import { Button } from "./components/common/botton/Button.js";
import { Contactos } from "./components/sections/contactos/contactos.js";
import { Contactos } from "./components/sections/contactos/contactos.js";
import { Button } from "./components/common/botton/Button.js";
import { Contactos } from "./components/sections/contactos/contactos.js";

let nav = document.getElementById("nav");
let container = document.getElementById("container");

nav.appendChild(Button("Agenda", "agenda", "User.svg"));
nav.appendChild(Button("Agregar Contacto", "add", "mas.svg"));
nav.appendChild(Button("ToDoList", "todo", "lista.svg"));
nav.appendChild(Button("Agregar Tarea", "addTask", "mas.svg"));

container.appendChild(Contactos());
