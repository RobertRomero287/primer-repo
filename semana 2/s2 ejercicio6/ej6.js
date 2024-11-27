/*let n = parseInt(prompt("ingrese el numero"))
let control = 1
let acumuladora = 0
while (control <= n)
{
    acumuladora = acumuladora + control
    control++
    console.log(control);
    console.log(acumuladora);
    
    
  
}*/

let n = parseInt(prompt("Ingresa el valor de n:"));
    let suma = 0;
    let i = 1;
    
    while (i <= n) {
      suma += i;  
      i++;  
    }
    
    console.log("La suma de los primeros "+n+" números naturales es: "+suma);
/*Cree un programa que calcula la suma de los primeros n números naturales.*/