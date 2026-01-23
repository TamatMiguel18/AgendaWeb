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


    button.addEventListener("click", function () {

        const username = user.value;
        const pass = password.value;

        if (username && pass) {
            window.location.href = "../../AgendaWeb/src/app.html"
        } else {
            alert("Por favor llene los datos")
        }
    })

    section.appendChild(h3);
    section.appendChild(user);
    section.appendChild(password);
    section.appendChild(button);

    return section;
}

export { login };
