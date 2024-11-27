let longitud = parseInt(prompt("ingrese longitud de ADN"))
let base = prompt("ingrese base: A, G, C, T")
let cadenaADN = ""
for (let index = 1; index <= longitud; index++){
    cadenaADN = cadenaADN + base
}
console.log(cadenaADN);

/*
La cadena está formada por una única base: Adenina (A), Timina (T), Citosina (C) o Guanina (G),
según se indique al momento de ejecutar el programa.
*/ 