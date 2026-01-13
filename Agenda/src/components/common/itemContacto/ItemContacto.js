let ItemContacto = (imgContacto) => {
  let div = document.createElement("div");
  div.className = "item-contacto";

  let etiquetaImg = document.createElement("img");
  etiquetaImg.src = `/assets/icons/${imgContacto}`;

  let etiquetaNombre = document.createElement("p");
  etiquetaNombre.textContent = "Nombre";

  let etiquetaTelefono = document.createElement("p");
  etiquetaTelefono.textContent = "Teléfono";

  div.appendChild(etiquetaImg);
  div.appendChild(etiquetaNombre);
  div.appendChild(etiquetaTelefono);

  return div;
};

export { ItemContacto };
