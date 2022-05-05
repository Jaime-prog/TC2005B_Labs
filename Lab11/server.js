const fs = require('fs');
const http = require('http');



const server = http.createServer((req,res) => {
    console.log('peticion hecha')
    res.setHeader('Content-Type', 'text/html');
    res.write('Ninjas Colombianos');
    res.end();
});


server.listen(3000, 'localhost', () => {
    console.log('Funcionando en puerto 3000')
})



//leer archivos
//esto es asincrono
/*
fs.readFile('./docs/text.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})
*/

//escribir archivos
/*
fs.writeFile('./docs/text.txt', 'Prueba para escribir en archivo', () => {
    console.log('el archivo fue reescrito');
})
*/