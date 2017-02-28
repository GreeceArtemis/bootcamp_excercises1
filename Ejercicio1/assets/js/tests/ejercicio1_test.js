var assert = require('assert');
var Mensaje = require('../ejercicio1.js');

//
describe('holamundo',function(){
    it ('Return the correct message if the param is string',function(){
      assert.equal(Mensaje.holamundo("es"),"Hola Mundo")
      assert.equal(Mensaje.holamundo("us"),"Hello World")
    })
    it ('Return option if the param is not string or is undefined',function(){
      assert.equal(Mensaje.holamundo(3),"Ingrese un opción indicada")
      assert.equal(Mensaje.holamundo([3,4,5]),"Ingrese un opción indicada")
    })

})
