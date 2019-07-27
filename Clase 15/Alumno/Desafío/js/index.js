$(document).ready(function () {

  function getData(url, cbk) {
    $.ajax()

      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }



  getData('http https://swapi.co/api/people', handlePagination)

  function handlePagination(error, data) {
    if (!error) {
      console.log(data)
      var results = data.results
      for (var index = 0; index < results.length; index++) {
        var character = results[index];
        console.log(character.name)
      }
      if (data.next) {
        getData(data.next, handlePagination)
      }
    }
  }

})