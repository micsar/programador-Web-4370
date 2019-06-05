var caracter = prompt('Ingrese una letra o simbolo');
caracter = caracter.toLowerCase(caracter)
switch (caracter) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log('Es una vocal')
    break;
  case 'q':
  case 'w':
  case 'r':
  case 't':
  case 'y':
  case 'p':
  case 's':
  case 'd':
  case 'f':
  case 'g':
  case 'h':
  case 'j':
  case 'k':
  case 'l':
  case 'ñ':
  case 'z':
  case 'x':
  case 'c':
  case 'v':
  case 'b':
  case 'n':
  case 'm':
    console.log('Es una consonante')
    break;
  default:
    console.log('Es un simbolo')
    break;
}