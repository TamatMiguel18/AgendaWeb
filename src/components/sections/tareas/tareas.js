import { TareaList } from "./stoge.js";
import { itemTarea } from "../../common/itemTarea/ItemTarea.js";

let sectionTareas = null;

let renderTareas = () => {
    if (!sectionTareas) return;
    sectionTareas.innerHTML = "<h2>Tareas</h2>"; // limpiar sección
    TareaList.forEach((tarea, index) => {
        sectionTareas.appendChild(itemTarea(tarea, index));
    });
};

let tareas = () => {
    sectionTareas = document.createElement("section");
    sectionTareas.className = "tareas";
    renderTareas(); // render inicial
    return sectionTareas;
};

export { tareas, renderTareas };
