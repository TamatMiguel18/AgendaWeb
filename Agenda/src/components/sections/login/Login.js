function login() {
    let section = document.createElement("section");

    let h3 = document.createElement("h3");
    h3.innerHTML = "Login";

    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";

    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";

    let button = document.createElement("button");
    button.innerHTML = "Iniciar Sesión";

    section.appendChild(h3);
    section.appendChild(user);
    section.appendChild(password);
    section.appendChild(button);

    return section;
}

export { login };
