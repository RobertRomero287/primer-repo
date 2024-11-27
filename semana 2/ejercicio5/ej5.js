let dato1 = parseFloat(prompt("ingrese el numero a revisar"));

let modulo = dato1 % 2
console.log(modulo);

if (modulo == 0){
    console.log("el numero es par");  
}else {
    console.log("el numero es impar");  
}


// Versión con switch-case
switch (dato1 % 2) {
  case 0:
    console.log(`${dato1} es par.`);
    break;
  default:
    console.log(`${dato1} es impar.`);
}


/*Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case.*/