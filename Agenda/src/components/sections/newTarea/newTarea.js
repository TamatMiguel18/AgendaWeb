import { TareaList, guardarTarea } from "../tareas/stoge.js";
import { renderTareas } from "../tareas/tareas.js";

let NuevaTarea = () => {
    let form = document.createElement("form");
    form.className = "nueva-tarea-form";

    let h3 = document.createElement("h3");
    h3.textContent = "Nueva Tarea";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Descripcion de la tarea";

    let inputPrioridad = document.createElement("input");
    inputPrioridad.type = "text";
    inputPrioridad.placeholder = "Prioridad";

    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Agregar Tarea";

    form.append(h3, inputNombre, inputPrioridad, btnSubmit);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!inputNombre.value.trim() || !inputPrioridad.value.trim()) return;

        TareaList.push({
            estado: false,
            nombre: inputNombre.value,
            prioridad: inputPrioridad.value
        });

        guardarTarea();
        renderTareas(); // actualizar lista automáticamente

        inputNombre.value = "";
        inputPrioridad.value = "";
    });

    return form;
};

export { NuevaTarea };
