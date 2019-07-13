$(document).ready(function () {

  $('ul > li > i.fa-trash-alt')
    .click(function (event) {
      $(event.target)
        .parent()
        .remove()

    })

})