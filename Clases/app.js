/*fs; fileSystem
const FileSystem = require('fs');
fileSystem.writeFileSync('hola.txt','hola desde 0')


const http = require('http');
const server= http.createServer()
*/

const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);