
let amigos = [];


function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); 

    if (nombre === "") {
        alert("Por favor, ingresa un nombre valido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    if (amigos.length >= 100) {
        alert("Solo puedes agregar hasta 100 nombres.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; 
}


function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length < 0) {
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[indice];

    mostrarResultado(elegido);
}

function mostrarResultado(elegido) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; 

    const li = document.createElement("li");
    li.textContent = `El amigo secreto elegido es: ${elegido}`;
    listaResultado.appendChild(li);
}