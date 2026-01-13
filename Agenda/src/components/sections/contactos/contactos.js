import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";

let Contactos = () => {
  let sectionContactos = document.createElement("section");
  sectionContactos.className = "contactos";

  let h2 = document.createElement("h2");
  h2.textContent = "Contactos";

  let lista = document.createElement("div");
  lista.className = "lista-contactos";

  // ejemplo de contactos
  lista.appendChild(ItemContacto("User.svg"));
  lista.appendChild(ItemContacto("User.svg"));
  lista.appendChild(ItemContacto("User.svg"));

  sectionContactos.appendChild(h2);
  sectionContactos.appendChild(lista);

  return sectionContactos;
};

export { Contactos };
