// Arreglo para almacenar los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim(); // Remover espacios en blanco

    // Validar entrada
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar nombre a la lista si no está repetido
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    amigos.push(nombre); // Agregar nombre al arreglo
    mostrarLista(); // Actualizar la lista visible
    inputAmigo.value = ''; // Limpiar el campo de texto
    inputAmigo.focus(); // Enfocar nuevamente el campo de texto
}

// Función para mostrar la lista de nombres
function mostrarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista anterior

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'name-item';
        li.setAttribute('data-index', index);

        // Agregar opción para eliminar nombre al hacer clic
        li.onclick = () => {
            eliminarAmigo(index);
        };

        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar amigo del arreglo
    mostrarLista(); // Actualizar la lista visible
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía. Agrega nombres para sortear.');
        return;
    }

    const indexAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indexAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
