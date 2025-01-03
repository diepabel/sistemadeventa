function loguear(event) {
    event.preventDefault();
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user == "usuario1" && pass == "1234") {
        window.location.href = "interfaz.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}