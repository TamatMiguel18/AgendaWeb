import { TareaList, guardarTarea } from "../../sections/tareas/stoge.js";

let itemTarea = (tarea, index) => {
    let itemTarea = document.createElement("div");
    div.className = "item-tarea";

    let etiquetaEstado = document.createElement("input");
    etiquetaEstado.type = "checkbox";
    etiquetaEstado.checked = tarea.estado;

    etiquetaEstado.addEventListener("change", () => {
        tareaList[index].estado = !tarea.estado;
        guardarTarea();
    });

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = nombre;

    let etiquetaPioridad = document.createElement("p");
    etiquetaPioridad.textContent = pioridad;

    itemTarea.appendChild(etiquetaEstado);
    itemTarea.appendChild(etiquetaNombre);
    itemTarea.appendChild(etiquetaPioridad);

    return itemTarea;
}

export { itemTarea };
