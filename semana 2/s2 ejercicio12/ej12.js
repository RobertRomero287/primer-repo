let n = parseFloat(prompt("ingrese el numero a revisar"));

function sumaDeCuadrados(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i * i;
    }
    return suma;
}

console.log(`La suma de los cuadrados de los números entre 1 y ${n} es: ${sumaDeCuadrados(n)}`);



/*
12.Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.
*/