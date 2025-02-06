// Autor: Carlos Torres Garrido
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    let regex = /^[A-Za-z]+$/;

    if (nombre === "") {
        alert("El campo no puede estar vacío");
        return;
    }

    if (!regex.test(nombre)) {
        alert("El nombre solo puede contener letras");
        return;
    }

    amigos.push(nombre);
    console.log(amigos);
    limpiarcaja();
    mostrarAmigos();
    return amigos;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarcaja() {
    document.querySelector("#amigo").value = "";
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let ganador = amigos[Math.floor(Math.random() * amigos.length)];

    asignarTextoElemento("titulo2", `El amigo sorteado es: ${ganador}`);

    document.getElementById("sortear").setAttribute("disabled", "");
    document.getElementById("amigo").setAttribute("disabled", "");
    document.getElementById("botonAmigo").setAttribute("disabled", "");
    asignarTextoElemento("listaAmigos", "Listo! tu amigo ha sido sorteado, para un nuevo sorteo por favor reinicia la página.");
    
    return;
}




