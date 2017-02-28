function holamundo(hola){
//Código
  if(hola==undefined||typeof hola!="string"){
    return "Ingrese un opción indicada";
    }
  hola=hola.toUpperCase();

  switch(hola){
    case ("US"):
      return "Hello World";
    case ("DE"):
      return "Hallo Welt";
    case ("ES"):
      return "Hola Mundo";
    case ("FR"):
    return "Bonjour tout le monde";
    default:
     return "Hola Mundo";
    }
}
//
if(typeof exports !== 'undefined') {
    exports.holamundo = holamundo;
}
