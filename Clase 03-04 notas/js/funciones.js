/** function nombreDeFuncion(){

}   SEMANTICA BASICA VARIABLE

function suma(op1, op2) {
  return op1 + op2
}

console.log(suma(5, 3))

O

var a = function(param1,param2){
  return param1 + param2
}

var resultadoSuma = suma(10,23)
console.log(resultadoSuma)


function supCir(radio) {
  var pi = 3.14
  return radio * radio * pi
}
console.log(supCir(8))

function decirHola(nombre) {
  console.log('Hola ' + nombre)
}
decirHola('Pedro')*/


var examResults = [7, 5, 6, 4, 3, 2, 8]
function promedio(arrayDeNumeros) {
  var acumulador = o;
  for (var i = 0; i < arrayDeNumeros.lenght; i += 1) {
    acumulador = acumulador + arrayDeNumeros[i];
  }
  return acumulador / arrayDeNumeros.lenght;
}
console.log(examResults)
console.log(promedio(examResults))
