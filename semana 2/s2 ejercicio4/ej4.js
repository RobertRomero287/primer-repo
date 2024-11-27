//Cree un programa que calcule el promedio de tres notas para 
// n estudiantes. Use ciclo for. Use funciones.

function calcularPromedio(estudiantes) {
    for (let i = 1; i <= estudiantes; i++) {
      let nota1 = parseFloat(prompt(`Ingrese la nota 1 del estudiante ${i}:`));
      let nota2 = parseFloat(prompt(`Ingrese la nota 2 del estudiante ${i}:`));
      let nota3 = parseFloat(prompt(`Ingrese la nota 3 del estudiante ${i}:`));
      let promedio = (nota1 + nota2 + nota3) / 3;
      console.log(`El promedio del estudiante ${i} es: ${promedio.toFixed(2)}`);
    }
  }
  
  let numeroEstudiantes = parseInt(prompt("Ingrese el número de estudiantes:"));
  calcularPromedio(numeroEstudiantes);







   