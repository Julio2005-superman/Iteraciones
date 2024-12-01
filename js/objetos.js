// Declaración de un objeto
let personas = [
    { nombre: "Jose Alfredo", edad: 25, genero: "Masculino" },
    { nombre: "Estefania", edad: 17, genero: "Femenino" },
    { nombre: "Nicol", edad: 16, genero: "Femenino" },
    { nombre: "Jibran", edad: 17, genero: "Masculino" }
];

let tabla = document.querySelector("#tabla");

// Función para generar el HTML de la tabla
let imprimirtabla = (personas) => {
    let msg = "<table class='table table-bordered table-striped'>";
    msg += "<thead><tr><th>No</th><th>Nombre</th><th>Edad</th><th>Género</th></tr></thead>";
    msg += "<tbody>";
    for (let i = 0; i < personas.length; i++) {
        let persona = personas[i];
        msg += "<tr>";
        msg += `<td>${i + 1}</td><td>${persona.nombre}</td>`;
        msg += `<td>${persona.edad}</td>`;
        msg += `<td>${persona.genero}</td>`;
        msg += "</tr>";
    }
    msg += "</tbody></table>";
    return msg;
};

// Función que se ejecuta al hacer clic en el botón
let imprimir = () => {
    tabla.innerHTML = imprimirtabla(personas);
};

let ordenar = () => {
    personas.sort((a, b) => (a.nombre < b.nombre ? -1 : 1));
    imprimir();
}

let eliminar_inicio = () => {
    personas.shift();
    imprimir();
}

let eliminar_final = () => {
    personas.pop();
    imprimir();
}

// Función para limpiar el formulario
let limpiar = () => {
    document.querySelector("#nombre").value = '';
    document.querySelector("#edad").value = '';
    document.querySelector("#genero").selectedIndex = 0;
};

// Referencia al formulario
let formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (event) => {
    // Prevent default form submission
    event.preventDefault();

    // Referencia para los datos
    let n = document.querySelector("#nombre").value;
    let e = document.querySelector("#edad").value;
    let g = document.querySelector("#genero").value;

    // Crear un objeto de tipo persona
    let persona = {
        nombre: n,
        edad: e,
        genero: g
    };

    // Agregar la nueva persona a la lista
    personas.push(persona);
    imprimir();  // Actualiza la tabla
    limpiar();   // Limpia el formulario
    if ('.n.isEmpty()' || '.e.isEmpty()' || '.g.isEmpty()') {
        console.log("No se admiten vacíos");
    } else {
        let persona = {
            nombre: n,
            edad: e,
            genero: g
        };
        
        agregarPersona(persona); // Asumiendo que tienes una función para agregar la persona
        imprimir(); // Imprime la información de las personas
    }
    
    event.preventDefault(); // Se asume que 'event' ha sido definido en el contexto adecuado
});