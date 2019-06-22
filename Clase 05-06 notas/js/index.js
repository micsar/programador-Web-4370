var auto1 = {
  puertas: 4,
  airbag: false,
  color: 'rojo',
  marca: 'VW',
  modelos: 1998,
  km: 10000,
}

var auto2 = {
  puertas: 5,
  airbag: true,
  color: 'negro',
  marca: 'bmw',
  modelos: 2015,
  km: 0,
}

// siempre empiezan con mayuscula
// function Auto(puertas, airbag, color, marca = 'vw') PARA ASIGNAR UNA VALR DEFAULT SI ESE NO ES COMPLETADO {
function Auto(puertas, airbag, color, marca) {
  this.puertas = puertas;
  this.airbag = airbag;
  this.color = color;
  this.marca = marca;
  this.encendido = false;
  this.encender = function () {
    this.encendido = true
  }
  this.apagar = function () {
    this.encendido = false
  }
}

console.log(auto1)
var autoNuevo = new Auto(4, true, 'gris', 'Chery')
autoNuevo.puertas = 10
autoNuevo.encendido = true
console.log(autoNuevo)
autoNuevo.encender()
console.log(autoNuevo)
autoNuevo.apagar()
console.log(autoNuevo)