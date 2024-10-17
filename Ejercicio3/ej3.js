let dato1 = parseFloat(prompt("ingrese el Valor del electrodomestico"));
let dato2 = parseFloat(prompt("ingrese el numero de cuotas"));
let division = dato1 / dato2;
let interesmes = division * 0.05;
let interestotal= interesmes + division
console.log ("la cuota a pagar es de=",interestotal);