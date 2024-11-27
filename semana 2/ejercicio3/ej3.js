let dato1 = parseFloat(prompt("ingrese el primer numero a revisar"));
let dato2 = parseFloat(prompt("ingrese el segundo numero a revisar"));

if (dato1 == dato2){
    console.log("los numeros son iguales");
}else {

switch (dato1 < dato2) {
    case true:
        console.log("es mayor el segundo numero " + dato2);
        break;
    case false:
        console.log("es mayor el primer numero " + dato1);
        break;

}
}

/*Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario.*/