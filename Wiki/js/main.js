let acordeon = document.getElementsByClassName("acordeon");

for (let i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

function login() {

    let username = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    if (username == "admin" && password =="topgroup.00") {
        window.location="../pages/privado.html";
    } else {
        alert("Usuario y/o contraseña incorrectos");
        return;
    }
}
