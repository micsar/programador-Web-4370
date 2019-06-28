
var texts = ['Ed', 'Edd', 'Eddy']
var listaHtml = document.getElementById('mainList')

/**for (var i = 0; i < texts.length; i++) {
  var item = document.createElement('li')
  item.className = 'list-group-item'
  item.innerHTML = texts[i]
  listaHtml.appendChild(item)
}
*/

function itemsLista(array) {
  for (var i = 0; i < array.length; i++) {
    var item = document.createElement('li')
    item.className = 'list-group-item'
    item.innerHTML = array[i]
    listaHtml.appendChild(item)
  }
}

itemsLista(texts)

