const express = require('express')
const app = express()

const parametros = {
    codigo:{
        demand: true,
        alias: 'c'
    },
    nombre:{
        demand: true,
        alias: 'n'
    },
    documento:{
        demand:true,
        alias: 'd'
    }
};


let creartexto = (documento,nombre,curso)=>{
    texto = 'El estudiante con nombre ' + nombre +
            '\n con documento ' + documento+
            ' se ha matriculado en el curso '+curso.nombre+
            ' que tiene na duracion de '+curso.duracion+
            ' con un costo de '+curso.valor;

            app.get('/', function (req, res) {
                res.send(texto);
              });
               
              app.listen(3000);
}



module.exports ={
    parametros,
    creartexto
};