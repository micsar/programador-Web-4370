var genero = prompt('Ingrese su genero')
var edad = prompt('Ingrese su edad')
genero = genero.toLowerCase(genero)
edad = parseInt(edad)
if (genero === 'female' && edad >= 18) {
  console.log('Sra. usted es mayor de edad, puede ingresar')
} else if (genero === 'female' && edad < 18) {
  console.log('Sra. usted es menor de edad, no puede ingresar')
} else if (genero === 'male' && edad >= 18) {
  console.log('Sr. usted es mayor de edad, puede ingresar')
} else if (genero === 'male' && edad < 18) {
  console.log('Sr. usted es menor de edad, no puede ingresar')
} else if (genero !== 'male' && genero !== 'female' && edad >= 18) {
  console.log('Sx. usted es mayor de edad, puede ingresar')
} else if (genero !== 'male' && genero !== 'female' && edad >= 18) {
  console.log('Sx. usted es mayor de edad, puede ingresar')
} else {
  console.log('Sx. usted es menor de edad, no puede ingresar')
} 