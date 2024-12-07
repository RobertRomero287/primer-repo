/*
es un paradigma que se centra en resolver problemas usando funciones de manera declarativa

funciones de orden superior 
son funciones que reciben como argumento otras funciones o que retornan otra funcion 

callback
es una funcion que se pasa como argumento a otra funcion y se ejecuta cuando el trabajo a terminado 

*/


//funcion de orden superior
// funcion que recibe a otra funcion como argumento
//realizar una funcion usando callback

const sumaAB = (a,b) => a + b;

function suma(a, b, callback) {
    let resultado = callback (a, b)
    return resultado;
}

let resultadoSUMA = suma(3, 5, sumaAB)

console.log("resultado ", resultadoSUMA);

console.log("_____________________________________");

// saludo usando callback

const saludo = (nombre, apellido) => `${nombre} ${apellido}`

function hola(nombre, apellido, callback) {
    let saludoCompleto = callback (nombre, apellido)
    console.log(saludoCompleto);
    
}
hola("juan", "perez", saludo)

console.log("___________________");

function saludoT (saludo1) {
    return function saludoSegundoPaso (saludo2){
        return `${saludo1} ${saludo2}`
    }
}
let primeraParte = saludoT("hola...")
let saludoTotal = primeraParte("pedro")
console.log(saludoTotal);

console.log("___________________________");


function sumaA(a) {
    return function sumaB(b) {
        return a + b
    }
}
let sumaParcial = sumaA(3)
let sumaTotal2 = sumaParcial(7)
console.log("suma total", sumaTotal2);

// metodo every este metodo verifica
// si una condicion se cumple a o no

const numeros = [10, 20, 30, 40]
const todosPositivos = numeros.every ((num) => num > 0)
console.log(todosPositivos);

const nombres = ["maria", "juan", "bolivar"]
const todosMasTresCaracteres = nombres.every ((nombre) => nombre.length > 3)

console.log("todos tienen mas de 3 caracteres", todosMasTresCaracteres);

console.log("_____________________");

//uso de setTimeout es una manera de trabajar asincronicamente en javaS

setTimeout(() => {
   console.log("hola mundo");
    
}, 4000);

console.log("ZZZZZZZZZZzzz");


function imprimeMensajeConRetraso(mensaje, callback) {
    setTimeout(() => {
      callback(mensaje);
    }, 2000);
  }
  const mensaje = (mensaje) => {
        console.log(mensaje);
  }
  console.log("Inicio");
  imprimeMensajeConRetraso("Hola Mundo 2", mensaje);
  console.log("Fin");


let palabra = prompt("ingrese la palabra");

const imprimirPalabra = palabra => palabra.split("").forEach(letra => console.log(letra))

imprimirPalabra(palabra);
