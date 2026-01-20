import { TareaList } from "./stoge.js";
import { itemTarea } from "../../common/itemTarea/ItemTarea.js";

let tareas = () => {
    let section = document.createElement("section");
    section.className = "tareas";

    let h2 = document.createElement("h2");
    h2.textContent = "Tareas";
    section.appendChild(h2);

    TareaList.forEach((tarea, index) => {
        section.appendChild(itemTarea(tarea, index));
    });

    return section;
}

export { tareas };
