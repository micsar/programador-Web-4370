function getRandomId() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

function Student(firstName, lastName, dni, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dni = dni;
  this.email = email;
  var id = getRandomId()
  this.getId = function () {
    return id
  }
}

Student.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
}

/** function studentsList(list) {
  var len = list.length
  for (i = 0; i < len; i++) {
    var newStudent = new Student(list)
  }
}

console.log(studentsList(students))*/

function studentsList(list) {
  var listWithObjects = []
  for (var i = 0; i < list.length; i++) {
    var newStudent = new Student(list[i])
    listWithObjects.push(newStudent)
  }
  return listWithObjects
}

var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

console.log(studentsList(students))
console.log(newStudent.firstName)

