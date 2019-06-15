var operacion = prompt('Elija una operacion a realizar: suma, resta, multiplicacion o division');
operacion = operacion.toLocaleLowerCase()
while (operacion !== 'suma' && operacion !== 'resta' && operacion !== 'multiplicacion' && operacion !== 'division') {
  operacion = prompt('Elija una operacion valida (suma, resta, multiplicacion o division)');
}
var valorUno = prompt('Ingrese el primer numero');
var valorDos = prompt('Ingrese el segundo numero');

while (operacion == 'division' && parseInt(valorDos) == 0) {
  valorDos = prompt('Ingrese otro numero')
};

switch (operacion) {
  case 'suma':
    console.log(parseInt(valorUno) + parseInt(valorDos))
    break;
  case 'resta':
    console.log(parseInt(valorUno) - parseInt(valorDos))
    break;
  case 'multiplicacion':
    console.log(parseInt(valorUno) * parseInt(valorDos))
    break;
  case 'division':
    console.log(parseInt(valorUno) / parseInt(valorDos))
    break;
};

