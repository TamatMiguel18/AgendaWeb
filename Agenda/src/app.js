import { Button } from "./components/common/botton/Button.js";
import { Contactos } from "./components/sections/contactos/contactos.js";
import {FormularioContacto} from "./components/sections/newContacFrom/NewContactFrom.js";

let nav = document.getElementById("nav");
let app = document.getElementById("app");

nav.appendChild(Button(
    "Agenda", 
    "agenda", 
    "User.svg",
function(){
    container.innerHTML = "";
    container.appendChild(Contactos());


}
));
nav.appendChild(Button(
    "Agregar Contacto",
     "add",
      "mas.svg",
      function (){
        container.innerHTML = "";
        container.appendChild(FormularioContacto());
      }
    ));
nav.appendChild(Button("ToDoList", "todo", "lista.svg"));
nav.appendChild(Button("Agregar Tarea", "addTask", "mas.svg"));

let container = document.getElementById("container");
container.innerHTML = "";
/*
container.appendChild(Contactos());
container.appendChild(FormularioContacto());*/

