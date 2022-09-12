let nombre = prompt("Ingresa tu/s nombre/s.");
let apellido = prompt("Ingresa tu/s apellido/s.");

function bienvenida(nombre, apellido) {
    alert("¡Hola " + nombre + " " + apellido + "! Bienvenido/a al armado del presupuesto.")
}
bienvenida(nombre, apellido);

// -----------------------------------------------------------------------

let ingreso = prompt("Selecciona el nivel de estudios del encargado del Service de PC: \n 1. Amateur \n 2. Semi-profesional \n 3. Profesional Certificado \n 4. Universitario (para empresas)");

while (ingreso != "1" && ingreso != "2" && ingreso != "3" && ingreso != "4") {
    alert("Opción no válida.")
    ingreso = prompt("Selecciona el nivel de estudios del encargado del Service de PC: \n 1. Amateur \n 2. Semi-profesional \n 3. Profesional Certificado \n 4. Universitario (para empresas)");
} switch (ingreso) {
    case "1":
        alert("Seleccionaste Amateur.");
        break;
    case "2":
        alert("Seleccionaste Semi-profesional.");
        break;
    case "3":
        alert("Seleccionaste Profesional Certificado.");
        break;
    case "4":
        alert("Seleccionaste Universitario (para empresas).");
        break;
}

// -----------------------------------------------------------------------

// Arrays

const servicios = [
    { nombre: "Service 1", precio: 20},
    { nombre: "Service 2", precio: 25},
    { nombre: "Service 3", precio: 30},
    { nombre: "Service 4", precio: 35},
    { nombre: "Service 5", precio: 40},
    { nombre: "Service 6", precio: 45},
    { nombre: "Service 7", precio: 50},
];
let total = []

let precio = 0

// -----------------------------------------------------------------------

let lista = servicios.map(
    (servicios) => servicios.nombre + " (" + servicios.precio + " USD)"
);

let seleccion = prompt("Por favor, elegí el tipo de service que realizaste:\n - " + lista.join("\n - "))

while (seleccion != "1" && seleccion != "2" && seleccion != "3" && seleccion != "4" && seleccion != "5" && seleccion != "6" && seleccion != "7") {
    alert("Opción no válida.")
    seleccion = prompt("Por favor, elegí otra vez el tipo de service que realizaste:\n - " + lista.join("\n - "));
} switch (seleccion) {
    case "1":
        alert("Seleccionaste Service 1.");
        precio = 20
        break;
    case "2":
        alert("Seleccionaste Service 2.");
        precio = 25
        break;
    case "3":
        alert("Seleccionaste Service 3.");
        precio = 30
        break;
    case "4":
        alert("Seleccionaste Service 4.");
        precio = 35
        break;
    case "5":
        alert("Seleccionaste Service 5.");
        precio = 40
        break;
    case "6":
        alert("Seleccionaste Service 6.");
        precio = 45
        break;
    case "7":
        alert("Seleccionaste Service 7.");
        precio = 50
        break;
}

alert(`- Servicio realizado: Service ${seleccion} \n- Presupuesto final: ${precio} USD`)