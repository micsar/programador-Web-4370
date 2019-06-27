function borrarNumero(indice, listaNumeros) {
  if (indice < listaNumeros.length) {
    var arr1 = listaNumeros.slice(0, indice - 1)
    var arr2 = listaNumeros.slice(indice++, listaNumeros.length)
    return arr1.concat(arr2)
  }
  return false
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var ind = 3

console.log(borrarNumero(ind, numeros))


//si el indice no està en el array que devuelva copia del array