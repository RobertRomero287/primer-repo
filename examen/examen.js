/*
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "la division no es posible, ingrese un numero diferente a 0"
    }
    return a / b;
}

function calculadora() {

    const calculos = prompt("que operacion deseas realizar? + - * /")
    const numero1 = parseFloat(prompt("ingrese el primer numero"))
    const numero2 = parseFloat(prompt("ingrese el segundo numero"))

    let resultado

    switch (calculos) {
        case "+":
            resultado = suma(numero1, numero2)
            break;
        case "-":
            resultado = resta(numero1, numero2)
            break;
        case "*":
            resultado = multiplicacion(numero1, numero2)
            break;
        case "/":
            resultado = division(numero1, numero2)
            break;
        default:

            break;
    }
    console.log(numero1, calculos, numero2);

    console.log("el resultado es: ", resultado);

}
calculadora()
*/

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "La división no es posible, ingrese un número diferente a 0";
    }
    return a / b;
}

function calculadora() {
    const operacion = prompt("¿Qué operación deseas realizar? (+, -, *, /)");

    if (!["+", "-", "*", "/"].includes(operacion)) {
        alert("Operación no válida. Por favor, ingresa uno de los siguientes operadores: +, -, *, /");
        return;
    }

    const numero1 = parseFloat(prompt("Ingresa el primer número"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    let resultado;

    switch (operacion) {
        case "+":
            resultado = suma(numero1, numero2);
            break;
        case "-":
            resultado = resta(numero1, numero2);
            break;
        case "*":
            resultado = multiplicacion(numero1, numero2);
            break;
        case "/":
            resultado = division(numero1, numero2);
            break;
    }

    // Mostrar el resultado de la operación
    alert(`El resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`);
}

// Ejecutar la calculadora
calculadora();
