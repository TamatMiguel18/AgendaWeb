let Button = (titulo, id, img) => {
    let div = document.createElement("div");
    div.className = "button";
    div.id = id;

    let divImage = document.createElement("div");
    divImage.className = "button-image";

    let imgIcon = document.createElement("img");
    imgIcon.src = `./assets/icons/${img}`;

    let p = document.createElement("p");
    p.className = "button-text";
    p.textContent = titulo;

    divImage.appendChild(imgIcon);
    div.appendChild(divImage);
    div.appendChild(p);

    return div;
};

export { Button };
