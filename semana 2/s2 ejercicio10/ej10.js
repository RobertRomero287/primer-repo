/*let sumanums = 0
for( i = 1 ; i<=10 ; i++){
    let num = parseInt(prompt(`ingrese el ${i} numero`))
    sumanums = sumanums+num
}

console.log(`El promedio de sus numeros es ${sumanums/10}`);*/
/* 10.Cree un programa que calcule el promedio de 10 números.*/

/*let numero=0;
let suma  = 0;
for(let i=1; i<=10; i++){
    numero = parseInt(prompt(`ingrese el número ${i}`));
    suma += numero;
}
let promedio = suma/10;
console.log(`El promedio es ${promedio}`);*/


let contador = 0;
let interacciones = -1;
let numeroActual;

do {
    numeroActual = parseInt(prompt("Digite un numero"))
    contador += numeroActual;
    interacciones++;
} while (numeroActual != 0);

alert(`El promedio de los numeros digitados es ${contador/(interacciones )}`)



