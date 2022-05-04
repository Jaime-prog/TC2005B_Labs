//Función para calcular el promedio de un array
function promedioArray(myArray) {
    var i = 0, suma = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        suma = suma + myArray[i++];
}
    return suma / ArrayLen;
}

//Prueba 1 
var array1 = [1, 5, 2, 3, 7];
var a = promedioArray(array1);
console.log('Primer Arreglo:', array1, 'El promedio de este arreglo es:', a)

//Prueba 2
var array2 = [2,7,9,23,-2,-6];
var b = promedioArray(array2);
console.log('Segundo Arreglo: ', array2, 'El promedio de este arreglo es:', b)

//Función para escribir en un archivo con la ayuda del modulo fs
const fs = require('fs');
function funcionEscribir (entrada){
    entrada = entrada + '\n';
    fs.appendFileSync('./Resultado.txt', entrada);
}

//Prueba 1
var entrada = 'Amigo que te pasa estas llorando';
funcionEscribir(entrada);
var entrada2 = 'seguro es por destenes de mujeres';
funcionEscribir(entrada2);
var entrada3 = 'no hay golpe mas mortal para los hombres';
funcionEscribir(entrada3);
var entrada4 = 'que el llanto y el desprecio de esos seres';
funcionEscribir(entrada4);


//Problema ordenar los números de un array de menor a mayor por método de la burbuja

function ordenar(array)
{
    for(j=0;j<array.length;j++)
    {
        for(i=0;i<array.length;i++)
        {
            //Si el elemento en array[i] es mayor al elemento que sigue
            if(array[i]>array[i+1])
            {
                //Realizamos un swap
                var aux=array[i];
                array[i]=array[i+1];
                array[i+1]=aux;
            }
        }
    }
    return array;
}

function bacteriaIterativa(num)
{
    numBacteria=1;
    for (i = 1; i <=num; i++)
    {
        numBacteria = numBacteria * (1 + (3.78-2.34));
    }
    return numBacteria;
}

console.log('\nProblema de iteracion\n')
var x = bacteriaIterativa(5);
console.log('El numero de bacterias despues de 5 dias sera de:', x)


