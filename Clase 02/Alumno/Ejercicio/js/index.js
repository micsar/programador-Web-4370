<<<<<<< HEAD
var dia = prompt('Ingrese un dia')
switch (dia) {
  case 'Lunes':
  case 'Martes':
  case 'Miercoles':
  case 'Jueves':
  case 'Viernes':
    console.log('Es un dia habil')
    break;
  case 'Sabado':
  case 'Domingo':
    console.log('No es un dia habil')
=======
var dia = prompt('Ingrese dia')
var diaMinuscula = dia.toLowerCase()

switch (diaMinuscula) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('dia habil')
    break;
  case 'sabado':
  case 'domingo':
    console.log('finde :)')
>>>>>>> 7f43d56ea0537cbc489fb9d73aaa6c9d7b84e363
    break;
  default:
    console.log('No es un dia valido')
    break;
}