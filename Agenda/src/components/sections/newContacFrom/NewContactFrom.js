import { ContactList } from "../contactos/db";

let FormularioContacto = () => {
  let form = document.createElement("form");
  form.className = "form-contacto";

  let inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.placeholder = "Nombre";
  inputNombre.required = true;

  let inputTelefono = document.createElement("input");
  inputTelefono.type = "tel";
  inputTelefono.placeholder = "Celular";
  inputTelefono.required = true;

  let boton = document.createElement("button");
  boton.type = "submit";
  boton.textContent = "Agregar";

  form.append(inputNombre, inputTelefono, boton);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let contacto = {
      nombre: inputNombre.value,
      telefono: inputTelefono.value
    };

    ContactList.push(contacto);
    console.log("Contacto agregado:", ContactList);

    form.reset();
  });

  return form;
};

export { FormularioContacto };
