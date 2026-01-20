import { TareaList, guardarTarea } from "../../sections/tareas/stoge.js";
import { renderTareas } from "../../sections/tareas/tareas.js";

let itemTarea = (tarea, index) => {
    let div = document.createElement("div");
    div.className = "item-tarea";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.estado;
    checkbox.addEventListener("change", () => {
        TareaList[index].estado = !TareaList[index].estado;
        guardarTarea();
        renderTareas();
    });

    let nombre = document.createElement("p");
    nombre.textContent = tarea.nombre;

    let prioridad = document.createElement("p");
    prioridad.textContent = tarea.prioridad;

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
        TareaList.splice(index, 1); // eliminar del array
        guardarTarea();
        renderTareas(); // actualizar la sección automáticamente
    });

    div.append(checkbox, nombre, prioridad, btnEliminar);
    return div;
};

export { itemTarea };
