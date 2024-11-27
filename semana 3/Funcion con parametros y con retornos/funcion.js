/*
funcion que tiene como parametros la base y la altura de un triangulo y retorna su area
*/
function areaTriangulo(base, altura) {
   let area = base * altura / 2
return area
}
let base = parseFloat(prompt("ingrese la base"))
let altura = parseFloat(prompt("ingrese la altura"))

let area = areaTriangulo(base, altura)
console.log(`el area del triangulo con una base ${base} y una altura ${altura} es= ${area}`);

