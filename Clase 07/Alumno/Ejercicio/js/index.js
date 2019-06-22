function setLocalList(key, array) {
  var valorKey = typeof key === 'string'
  var valorArray = Array.isArray(array)
  if (!valorKey || !valorArray) {
    return false
  }
  arrayStr = JSON.stringify(array)
  localStorage.setItem(key, arrayStr)
  return true
}


var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS']
setLocalList('studentsList', testList)
console.log('Lista de estudiantes ' + localStorage.getItem('studentsList')) 
