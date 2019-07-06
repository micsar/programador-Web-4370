window.onload = function () {

  var firstName = document.getElementById('firstName')
  firstName.onblur = function (e) {
    var value = event.target.value
    if (value.length > 0) {
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')
    } else {
      event.target.classList.add('is-invalid')
      event.target.classList.remove('is-valid')
    }
  }

}