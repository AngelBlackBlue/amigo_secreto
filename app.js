let arrayFriends = [];

function agregarAmigo() {
    let friend = document.getElementById("amigo").value; // Obtener el valor del input
    if (friend.trim() !== "") { // Evitar agregar valores vacíos
        arrayFriends.push(friend);
        actualizarLista(); // Actualizar la lista de amigos
        document.getElementById("amigo").value = ""; // Limpiar el input
        console.log(arrayFriends);

    } else {
        alert("Por favor, inserte un nombre.");
    }
    return arrayFriends; 


}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

    for (let i = 0; i < arrayFriends.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = arrayFriends[i]; // Agregar el texto del amigo
        lista.appendChild(li); // Insertarlo en la lista
    }
}

function sortearAmigo() {
    if (arrayFriends.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }
    let randomIndex = Math.floor(Math.random() * arrayFriends.length);
    let amigoSorteado = arrayFriends[randomIndex];
    console.log(amigoSorteado);

    document.getElementById("resultado").innerHTML = amigoSorteado
  
    
}
