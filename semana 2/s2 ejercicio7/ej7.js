//Cree un programa que muestre la tabla de multiplicar del 10, del 1 al 50.
//for (let i = 1; i <= 50; i++) {
  //  console.log(`10 x ${i} = ${10 * i}`);  
//}


//Crear un programa que pida datos de
//registro a un usuario, edad, estatura
//peso. El programa debe pedir indefinidamente
//los datos del registro en caso de que
//alguno no cumpla. Para poder registrarse
// al edad debe ser de una persona mayor de edad, la estaura superior a 1.75 m, y el peso entre 75 y 100 kg

//version 1
let edad;
let estatura;
let peso;
do {
    edad = parseInt(prompt("ingrese edad"))
    estatura = parseFloat(prompt("ingrese estatura"))
    peso = parseFloat(prompt("ingrese peso"))
} while (edad < 18 || estatura < 1.75 || (peso < 75 || peso > 100));
console.log("registrado exitosamente");
