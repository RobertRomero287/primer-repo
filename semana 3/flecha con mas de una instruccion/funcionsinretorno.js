const areaPerimetro = (base, altura, ancho) => {
    let area = base * altura * ancho
   
    return `Area: ${area} `
}
let resultado = areaPerimetro(2);
console.log(resultado);


let lado = parseFloat(prompt("Ingrese el lado del cubo:"));
function volumenCubo(lado) {
    
    return lado ** 3;
  }
  console.log(volumenCubo(lado));

  


