/*
Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad
de vocales que contiene la cadena.
*/


/*let cadenaVocales = prompt("Ingrese una cadena de texto:");
function contarVocales(cadena) {
  let vocales = "aeiouAEIOU";
  let contador = 0;
  for (let char of cadena) {
    if (vocales.includes(char)) {
      contador++;
    }
  }
  return contador;
}
alert(`Cantidad de vocales en la cadena '${cadenaVocales}': ${contarVocales(cadenaVocales)}`);

*/


function calcularEdad(fechaNacimiento) {
    // Obtener la fecha actual
    const fechaActual = new Date();
    
    // Crear un objeto de fecha a partir de la fecha de nacimiento
    const [diaNac, mesNac, añoNac] = fechaNacimiento.split('/').map(Number);
    const fechaNacimientoObj = new Date(añoNac, mesNac - 1, diaNac);
    
    // Calcular la diferencia en años
    let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
    
    // Ajustar la edad si el cumpleaños no ha ocurrido aún este año
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();

    if (mesActual < mesNac - 1 || (mesActual === mesNac - 1 && diaActual < diaNac)) {
        edad--;
    }

    return edad;
}

// Ejemplo de uso
const fechaNacimiento = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA): ");
const edad = calcularEdad(fechaNacimiento);
console.log("La edad actual es: " + edad + " años.");
