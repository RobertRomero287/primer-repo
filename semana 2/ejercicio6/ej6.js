/* 
Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.
*/

let numero = parseInt(prompt("ingrese el numero a revisar"));

let division = numero / 5

if (division % 2 === 0){
    console.log("El numero si es divisible ");  
}else {
    console.log("el numero no se puede dividir ");  
}


// Versión con switch-case
switch (division % 2 === 0) {
  case true:
    console.log("El numero si es divisible");
    break;

  default:
    console.log("el numero no se puede dividir");
}
    