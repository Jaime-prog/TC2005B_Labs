const blog = [
    {nombre:"Karatuki"}, 
    {nombre:"Datsuki"}, 
    {nombre:"Kirutiku"}
    ]; 
    
    module.exports = class Dojo {
        constructor(nuevo_dojo){
            this.nombre =nuevo_dojo;
        }
        save(){
            dojos.push(this);
            console.log(dojos);
        }
        static fetchAll(){
            return dojos;
        }
    }