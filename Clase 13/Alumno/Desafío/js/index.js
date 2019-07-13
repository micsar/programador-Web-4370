$(document).ready(function () {

  var firstName = $('#firstName')
  var email = $('#email')
  var comments = $('#comments')
  var submitButton = $('#submitButton')

  firstName.one('blur', validateNotEmpty)
  comments.one('blur', validateNotEmpty)
  email.one('blur', validateEmail)

  function allValidationsOk() {
    var allOk = $('.is-valid').length === 3
    if (allOk) {
      submitButton.attr('disabled', false)
      //submitButton.attr('disabled').remove()
    } else {
      submitButton.attr('disabled', true)
    }

  }

  function validateNotEmpty(event) {
    var input = $(event.target)
    input.next().remove()
    var errorText = ''
    var valueToValidate = input.val()
    if (valueToValidate.length > 0) {
      input.addClass('is-valid').removeClass('is-invalid')
    } else {
      errorText = 'Campo obligatorio'
      input.addClass('is-invalid').removeClass('is-valid')
      input.parent().append(`<div class = 'invalid-feedback'>${errorText}</div>`)
    }
    if (event.type === 'blur') {
      input.on('input', validateNotEmpty)
    }
    allValidationsOk()
  }

  function validateEmail(event) {
    var input = $(event.target)
    input.next().remove()
    var errorText = ''
    var valueToValidate = input.val()
    if (valueToValidate.indexOf('.') > -1 && (valueToValidate.indexOf('@') > -1)) {
      input.addClass('is-valid').removeClass('is-invalid')
    } else {
      errorText = 'Email no es válido'
      input.addClass('is-invalid').removeClass('is-valid')
      input.parent().append(`<div class = 'invalid-feedback'>${errorText}</div>`)
    }
    if (event.type === 'blur') {
      input.on('input', validateEmail)
    }
    allValidationsOk()
  }



})





/** function handleBlur(e) {
  var email = $(e.target)
  var value = email.val()
  if (value.indexOf('.') > -1 && (value.indexOf('@') > -1)) {
    email.addClass('is-valid')
    email.removeClass('is-invalid')
  } else {
    email.addClass('is-invalid')
    email.removeClass('is-valid')
  }
}*/
