//Ejercicio 1 Cuadrados y Cubos en una tabla
const num = prompt("Favor de ingresar cualquier numero entero", "1");

function squareAndCube(){
    let resultado = "<table>";
    resultado += "<tr><td>Número</td>" + "<td>Cuadrado</td>" + "<td>Cubo</td></tr>";
    for(let i = 1; i <= num;i++){
        resultado += "<tr>";
        resultado += "<td>" + i +  "</td>" + "<td>" + Math.pow(i,2) +  "</td>"  + "<td>" + Math.pow(i,3) +  "</td>";
        resultado += "</tr>";
    }
    resultado += "</table>";
    return resultado;
}
document.getElementById("answer1").innerHTML = squareAndCube();


//Ejercicio 2 Suma de numeros aleatorios

var num1 = Math.floor(Math.random()*10);
var num2 = Math.floor(Math.random()*10);

var startTime = Date.now();
const usuarioSuma = prompt("¿Cuánto es: " + num1 + "+" + num2 + "?");
var endTime = Date.now();

function sumar(){
    sistemaSuma = num1 + num2;

    let sistemaSuma = "La suma de " + num1 + " + " + num2 + " es: " + sistemaSuma + "<br></br>"
    
    if (sistemaSuma == usuarioSuma){
        sistemaSuma = sistemaSuma + "La suma ingresada es correcta";
    }
    else{
        sistemaSuma = sistemaSuma + "La suma ingresada es incorrecta";
    }
    
    let tiempo = (endTime - startTime)/1000;

    sistemaSuma = sistemaSuma + "<br></br> El usuario se tardo: " + tiempo + " segundos "+ "en contestar";

    return sistemaSuma;
}

document.getElementById("answer2").innerHTML = sumar();

//Ejercicio 3 Contador de negativos, 0s y positivos en un arreglo

//Funcion para generar un arreglo con numeros aleatorios
function arrayAleatorio(){

    let num = Math.floor(Math.random() * 10)

    new Array(num)

    {length: num}

    () => Math.floor(Math.random() * 10);

    let finalArray = Array.from({length: num}, () => Math.floor( Math.random() * (70 - (-70) + 1)) -70);

    return finalArray;
}


//Para imprimir el array
function imprimirArray(array){

    var stringArray = "";
    
    for (let i=0; i < array.length; i++) {

        stringArray = "[" + array[i] + "] " + stringArray; 

    }

    stringArray = stringArray + "<br></br>";

    return stringArray;
}


var arrayToCount = arrayAleatorio();

function contador(arrayToCount) {
    
    imprimirArray(arrayToCount)

    let cero = 0
    let positivo = 0
    let negativo = 0

    for (let i=0; i < arrayToCount.length; i++) {
        
        if(arrayToCount[i] > 0){
            positivo ++;
        }
        else if(arrayToCount[i] < 0){
            negativo ++;
        }
        else{
            cero ++;
        }
    
    }

    respuesta = imprimirArray(arrayToCount) + "Numeros Positivos: " + positivo + "<br></br>Numeros Negativos: " + negativo + "<br></br>Ceros: " + cero;
    return respuesta;
    
}
document.getElementById("answer3").innerHTML = contador(arrayToCount);


//Ejercicio 4 Metodo promedio de matriz

var prueba_promedio = [3,5,6,-1]

var esperado = imprimirArray(prueba_promedio) + "El promedio del array es: 3.25<br></br><br></br>"

esperado = esperado + "<p><em>Por función (Respuesta obtenida)</em><p></p><br>"

var funcion_promedio = promedios(prueba_promedio)

esperado = esperado + funcion_promedio

var datos = arrayAleatorio();

function promedios (datos){

    datos.forEach(function(item,index,arr){
        console.log(item);
    });

    var suma = 0;

    for (let i=0; i < datos.length; i++) {
        
        suma = datos[i] + suma

    }

    let promedio = suma/datos.length

    resultado = imprimirArray(datos) + "El promedio del array es: " + promedio;

    return resultado;
    
}

document.getElementById("pruebaPromedio").innerHTML = esperado;
document.getElementById("answer4").innerHTML = promedios(datos);



//Ejercicio 5  Función inverso

var prueba_inverso = 456

var esperado = "Número = 456<br></br>" + "Invertido: 654<br></br><br></br>"

esperado = esperado + "<p><em>Por función (Respuesta obtenida)</em><p></p><br>"

var funcion_inverso = inverso(prueba_inverso)

esperado = esperado + funcion_inverso

var numero = Math.floor( Math.random() * 157);


function inverso(numero){

  var invertido = 0
  var resto = numero
  do {
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto / 10)
  } while ( resto > 0 )

  respuesta = "Número = " + numero +"<br></br>" + "Invertido: " + invertido
  return respuesta

}

document.getElementById("pruebaInverso").innerHTML = esperado;
document.getElementById("answer5").innerHTML = inverso(numero);


//Ejercicio 6 

