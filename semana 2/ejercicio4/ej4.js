let datoa = parseFloat(prompt("ingrese valor de a"));
let datob = parseFloat(prompt("ingrese valor de b"));
let datoc = parseFloat(prompt("ingrese valor de c"));


let paso1 = datoa + datob + datoc;

if (paso1 == 180){
    console.log("si es un tiengulo");
    
}else {
    console.log("no es un triangulo");
    
}


switch (paso1 == 180) {
    case true:
      console.log("si es un triangulo ");
      break;
    default:
      console.log("no es un triangulo");
  }
/* Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no. Realice una versión con condicionales y otra con estructura switch-case
*/