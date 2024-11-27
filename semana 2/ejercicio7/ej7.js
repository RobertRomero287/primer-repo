/*
Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
condicionales y otra con estructura switch-case.
*/

let n1 = parseInt(prompt("ingrese un numero entre 1 y 15"));
let condicion = (n1 >= 1 && n1 <= 15) 
let n2 =  (n1 % 2)
let n3 = n2 === 0

if (condicion == true) {
if (n2 != 0) {
console.log("Es numero primo.");
} else {
console.log("Es numero no primo");
}
} else {
console.log("ingrese numero dentro del rango");
} 


if (condicion == true) {
switch (n2) {
    case 0:
        console.log("No es numero primo");
        break;
    default:
        console.log("Es un numero primo");
        break;
} } else {
    console.log("ingrese valor dentro del rango");
    
} 
    
 /*   n1 = !condicion ?  parseInt(prompt("ingrese un numero entre 1 y 15")) : n1;
    
    switch (n2) {
        case true :
            console.warn(my number is prime ${n1})
            break;
        case false :
            console.warn(my number is a not prime ${n1})
            break;
    }
    */
       switch (condicion - n3) {
            case true - true:
                console.log("No es numero primo");
            case false - true :
                console.log("ingrese valor dentro del rango");
                break;
            case true - false:
                console.log(" es numero primo");
                break;
            case false - false :
                console.log("ingrese valor dentro del rango");
                break;
       
            default:
                console.log("i");
                break;
        }
     
                