let dato1 = prompt("ingrese el articulo a revisar");

if (dato1 == "lentejas" || dato1 == "arroz" ){
    console.log("no pagan IVA");  
} 
if (dato1 == "crema" || dato1 == "vino" ){
    console.log("si pagan IVA");  
} 





switch (dato1) {
    case "arroz":
      console.log("no paga IVA");
      break;
      case "lentejas":
      console.log("no paga IVA");
      break;
      case "vino":
      console.log("si paga IVA");
      break;
      case "crema":
      console.log("si paga IVA");
      break;
    default:
      console.log("revise la lista");
  }

/* En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no. Realice una versión con condicionales y otra con estructura
switch-case.*/ 