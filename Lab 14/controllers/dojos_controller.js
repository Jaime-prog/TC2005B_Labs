const path = require('path');
const filesystem = require('fs');
const Dojo = require('../models/blog');


exports.listar = (request, response, next) =>{
    console.log(request.body)
    response.render('lista', {dojos: Dojo.fetchAll()});
};

exports.Alex = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'Dojos.html'));
};

exports.get_nuevo = (request, response, next) =>{
    console.log(request.body);
    response.render('nuevo',{nombre: 'Dojos'})
};

exports.post_nuevo = (request,response,next) =>{
    console.log(request.body);
    const dojo = new Dojo(request.body.nombre);
    dojo.save();
    filesystem.writeFileSync('Dojos.txt', request.body.nombre)
    response.status(303);
};