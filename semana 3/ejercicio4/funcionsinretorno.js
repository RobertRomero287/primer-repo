/*
Escriba una función que muestre los números de 1 a n, teniendo n como parámetro.
*/


let n = parseInt(prompt("Ingrese el valor de n:"));

if (isNaN(n) || n <= 0) {
  alert("Por favor, ingrese un número mayor que 0.");
} else {
  function mostrarNumeros(n) {
    let numeros = "";
    for (let i = 1; i <= n; i++) {
      numeros += i + " ";
    }
    return numeros;
  }

  alert(`Números del 1 al ${n}: ${mostrarNumeros(n)}`);
}

