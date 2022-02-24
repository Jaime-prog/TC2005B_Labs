// variables, constantes, consola

const personaje = "Pancho Pantera"; //dentro de toda la funcion
let personaje2; //dentro del entorno donde se declaro

console.log(personaje);
console.warn(personaje);
console.error(personaje);

for (let i = 1; i <= 10; i++){
    console.log(i);
}


alert("Esto es una alerta");

const nombre = prompt("Esto se llama:");
console.log(nombre);

const respuesta = confirm("¿Estas seguro?");
console.log(respuesta);