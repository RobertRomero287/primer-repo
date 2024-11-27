/*let arreglo = [20, 4, 7, 8, 5];
console.log(arreglo);
let elemento0 = arreglo[0];
console.log("elemento 0", elemento0);
let elemento3 = arreglo[3];
console.log("elemento 3", elemento3);

let longitudArreglo = arreglo.length;
console.log("la longitud es de", longitudArreglo);


let arregloVacio = [];
console.log(arregloVacio);


arreglo.push(16)
console.log("nueva longitud ", arreglo.length);
console.log(arreglo);
arreglo.push(-90)
console.log("nueva longitud 2 ", arreglo.length);
console.log(arreglo);


arreglo.splice(2, 1)
console.log(arreglo);

arreglo.splice(2, 3)
console.log(arreglo);
*/

/*
Dado el siguiente arreglo let j = [200, -100, 45, 78, 32] , imprimir los elementos de
índice 2 y 4.
*/

let j = [200, -100, 45, 78, 32]
j2 = j[2]
console.log("elemento 2", j2);
j4 = j[4]
console.log("elemento 4", j4);

/*
Dado el siguiente arreglo let f = ["ab", "cd", "ef", "gh"] , imprimir los elementos cd y gh.
*/
let f = ["ab", "cd", "ef", "gh"]
f1 = f[1]
console.log("elemento 2", f1);
f2 = f[3]
console.log("elemento 4", f2);

/*
Dado el arreglo [1, 2, false] Elimine el elemento de índice 2.
*/

/*let arreglo = [1, 2, false]
arreglo.splice(2, 1)
console.log(arreglo);
*/
/*
Dado el siguiente arreglo let h = [true, true, false,true, false], cambiar el elemento de
índice 2 por true, cambiar el elemento de índice 3 por false.
*/

let h = [true, true, false,true, false]
h[2] = true
h[3] = false
console.log(h);

/*
Dado el siguiente arreglo let w = ["wc", "jp", "zx", "qr"], cambiar el elemento "jp" por
true, cambiar el elemento "qr" por 30 .
*/

let w = ["wc", "jp", "zx", "qr"]
w[1] = true
w[3] = 30
console.log(w);

let arreglo2 = ["manzana", "pera", "limon", "banano"]
/*
console.log(arreglo2[0]);
console.log(arreglo2[1]);
console.log(arreglo2[2]);
*/
for (let index = 0; index < arreglo2.length; index++) {
    const element = arreglo2[index];
    console.log(index);
    
    console.log(element);
    
}

arreglo2.forEach((element) => {
    console.log(element);
    
})

let arregloA =["a", "b", "c"]
let copiaIndependiente = arregloA.slice()
//copia de un arreglo 


/*
Función que recibe un arreglo de números como argumento y retorna su promedio
*/
/*
function promedioArreglo(arreglo) {
    let promedio = 0
    for (let i = 0; i < arreglo.length; i++) {
      promedio += arreglo[i]
    }
    promedio = promedio / arreglo.length
    return promedio
  }
  
  console.log(promedioArreglo([5,5,5]));
*/


function imparesArreglo(arreglo){
    let arregloNuevo = [];
    for(let i = 0; i < arreglo.length; i++){
        if( arreglo[i] % 2 != 0){
            arregloNuevo.push(arreglo[i]);
        }
    }
    return arregloNuevo;
}

const arreglo = [17, 4, 64, 79, 109, 112];
console.log("El nuevo arreglo es: ", imparesArreglo(arreglo));



function mayor(arregloM) {
    let mayor = arregloM[0]
    for (let index = 0; index < arregloM.length; index++) {
        if (mayor < arregloM[index]) {
           mayor = arregloM[index] 
        }
        
    }
  return mayor  
}

function menor(arregloMin) {
    let menor = arregloMin[0]
    for (let index = 0; index < arregloM.length; index++) {
        if (mayor > arregloMin[index]) {
           mayor = arregloMin[index] 
        }
        
    }
  return menor 
}
let arregloM = [22, 120, 55, 100, 1]
let arregloMin = arregloM
console.log(menor(arregloMin));
console.log(mayor(arregloM));

