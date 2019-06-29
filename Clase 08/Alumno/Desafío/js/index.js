var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

function createStudentNode(student) {
  var li = document.createElement('li')
  li.className = 'list-group-item'
  li.id = student.dni
  var h1 = document.createElement('h1')
  h1.innerHTML = student.firstName + ' ' + student.lastName
  var h3 = document.createElement('h3')
  h3.innerHTML = student.dni
  var p = document.createElement('p')
  p.innerHTML = `E-mail: ${student.email}`
  li.appendChild(h1)
  li.appendChild(h3)
  h3.appendChild(p)
  return li
}

var ul = document.getElementById('ul-id')
ul.appendChild(createStudentNode(student))
//var studentNode = createStudentNode(newStudent)


console.log(createStudentNode(students))

