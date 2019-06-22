function getLocalList(key) {
  var nombreKey = typeof key === 'string'
  if (!nombreKey) {
    return false
  }
  var value = localStorage.getItem(key)
  // value es null, if(null) no ejecuta, if(!null) ejecuta
  // value es 'ssdf' if('dfdf')
  if (!value) { // value === null
    return []
  }
  var parseArray = JSON.parse(value)
  Array.isArray(parseArray)
  if (Array.isArray(parseArray)) {
    return parseArray
  }
  return []
}

localStorage.setItem('Numeros', "[1,2,3]")
console.log(getLocalList('Numeros'))