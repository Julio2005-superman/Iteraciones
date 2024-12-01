let verListaBtn = document.querySelector("#verListaBtn");
let listaNombres = document.querySelector("#listaNombres");
let listaVocales = document.querySelector("#listaVocales");
let listaNombresInvertidos = document.querySelector("#listaNombresInvertidos");
let listaPalindromos = document.querySelector("#listaPalindromos"); // Selecciona la lista de palíndromos
let listaCodificados = document.querySelector("#listaCodificados"); // Selecciona la nueva lista para nombres codificados

let nombres = ['Sara', 'Jose Antonio', 'Ximena', 'Juan', 'Natalia Elizabeth', 'Ana', 'Julio'];

// Función para extraer vocales de un nombre
let obtenerVocales = (nombre) => {
    return nombre.match(/[aeiouáéíóú]/gi) || []; // Extraer vocales, incluyendo acentos
};

// Función para invertir un nombre
let invertirNombre = (nombre) => {
    return nombre.split('').reverse().join('');
};

// Función para verificar si un nombre es un palíndromo
let esPalindromo = (nombre) => {
    let nombreSinEspacios = nombre.replace(/\s+/g, '').toLowerCase(); // Eliminar espacios y pasar a minúsculas
    return nombreSinEspacios === invertirNombre(nombreSinEspacios);
};

// Función para codificar un nombre (puedes modificar esto según el tipo de codificación que desees)
let codificarNombre = (nombre) => {
    return nombre.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join(''); // Codificación simple: desplazar cada carácter por 1
};

let borrar = () => {
    listaNombres.innerHTML = ''; // Limpiar listas previas
    listaVocales.innerHTML = '';
    listaNombresInvertidos.innerHTML = '';
    listaPalindromos.innerHTML = ''; // Limpiar la lista de palíndromos
    listaCodificados.innerHTML = ''; // Limpiar la lista de nombres codificados
};

verListaBtn.onclick = () => {
    listaNombres.innerHTML = ''; // Limpiar listas previas
    listaVocales.innerHTML = '';
    listaNombresInvertidos.innerHTML = '';
    listaPalindromos.innerHTML = ''; // Limpiar la lista de palíndromos
    listaCodificados.innerHTML = ''; // Limpiar la lista de nombres codificados

    // Encabezados
    listaNombres.innerHTML += `<li><strong>Nombre</strong></li>`;
    listaVocales.innerHTML += `<li><strong>Número de Vocales</strong></li>`;
    listaNombresInvertidos.innerHTML += `<li><strong>Nombre Invertido</strong></li>`;
    listaPalindromos.innerHTML += `<li><strong>¿Es Palíndromo?</strong></li>`;
    listaCodificados.innerHTML += `<li><strong>Nombre Codificado</strong></li>`; // Encabezado para nombres codificados

    nombres.forEach((nombre, index) => {
        // Mostrar nombres en la primera columna
        let liNombre = document.createElement('li');
        liNombre.textContent = nombre;
        listaNombres.appendChild(liNombre);

        // Mostrar el número de vocales en la segunda columna
        let numVocales = obtenerVocales(nombre).length; // Contar vocales
        let liVocales = document.createElement('li');
        liVocales.textContent = numVocales; // Mostrar el conteo de vocales
        listaVocales.appendChild(liVocales);

        // Invertir nombre y mostrar en la tercera columna
        let nombreInvertido = invertirNombre(nombre);
        let liNombreInvertido = document.createElement('li');
        liNombreInvertido.textContent = nombreInvertido;
        listaNombresInvertidos.appendChild(liNombreInvertido);

        // Verificar si el nombre es un palíndromo y mostrar en la cuarta columna
        let liPalindromo = document.createElement('li');
        liPalindromo.textContent = index < nombres.length - 1 ? (esPalindromo(nombre) ? 'Sí' : 'No') : 'No'; // Mostrar 'Sí' o 'No'
        listaPalindromos.appendChild(liPalindromo);

        // Codificar el nombre y mostrar en la quinta columna
        let nombreCodificado = codificarNombre(nombre);
        let liCodificado = document.createElement('li');
        liCodificado.textContent = nombreCodificado; // Mostrar el nombre codificado
        listaCodificados.appendChild(liCodificado);
    });

    listaNombres.classList.remove('hidden'); // Mostrar listas
    listaVocales.classList.remove('hidden');
    listaNombresInvertidos.classList.remove('hidden');
    listaPalindromos.classList.remove('hidden'); // Mostrar lista de palíndromos
    listaCodificados.classList.remove('hidden'); // Mostrar lista de nombres codificados
};
