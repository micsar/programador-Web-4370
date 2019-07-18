$(document).ready(function () {

  $('.btn-danger').click(function (event) {
    var button = $(event.target)
    var id = button.parent().parent().attr('id')
    removeElementWithAnimation(id)
  })

  function removeElementWithAnimation(id) {
    $('#' + id).fadeOut(3000, function () {
      $('#' + id).remove()
    })
  }


  /** var button = $('.btn')

  button.click(removeElementWithAnimation)

  function removeElementWithAnimation(id) {
    var idToBeRemoved = button.parent().parent().attr('id')
    idToBeRemoved.fadeOut(3000, function () {
      idToBeRemoved.remove()
    })

  }
*/

})


