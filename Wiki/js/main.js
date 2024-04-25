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


let username = document.getElementById("usuario").value;
let password = document.getElementById("contraseña").value;
let btnlogin = document.getElementById("btn-btnLogin");

btnlogin.addEventListener("click", function () {
    if (username === "admin" && password === "1234") {
        document.getElementById("contenidoPrivado").classList.remove("oculto");
        document.getElementById("contenidoPrivado").classList.add("contenidoActivo"); 
        document.getElementById("login").classList.add("oculto");
    } else{
        alert("Usuario y/o contraseña incorrectos");
    }
    });