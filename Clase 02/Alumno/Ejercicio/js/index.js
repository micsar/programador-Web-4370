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
    break;
  default:
    console.log('No es un dia valido')
    break;
}