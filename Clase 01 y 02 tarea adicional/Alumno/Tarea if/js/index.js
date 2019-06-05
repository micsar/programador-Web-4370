var nota = prompt('Ingrese su nota');
nota = parseFloat(nota)
if (nota >= 7) {
  console.log('El alumno está promocionado')
} else if (nota < 7 && nota >= 4) {
  console.log('El alumno está aprobado')
} else if (nota < 4) {
  console.log('El alumno está reprobado')
  console.log('Debe esforzarse mas')
}