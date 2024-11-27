/*La cadena tiene una longitud múltiplo de 10 y la distribución de las bases debe respetar que: la cantidad de Citosina (C) es cuatro veces la cantidad de Guanina, Timina (T) es dos veces la cantidad de Guanina y Adenina (A) es tres veces la cantidad de Guanina. La cadena debe tener cuatro bases. El programa debe garantizar que el usuario ingrese una longitud múltiplo de 10. Si esta condición no se cumple, el programa debe informar y solicitar nuevamente los datos.*/

let salir = false; 
while (!salir) {
    let respuesta = parseInt(prompt("ingrese la cadena en multiplos de 10"));
    let respuesta1= respuesta % 10;
    if (respuesta1 == 0 ) {
       salir= true
       // console.log("el numero es correcto ");
        //let citosina = prompt("ingrese la CITOSINA");
        //let guanina = prompt("ingrese la GUANINA");
        //let timina = prompt("ingrese la TIMINA");
        //let adenina = prompt("ingrese la ADENINA");
        let guanina = respuesta / 10;
        let citosina = guanina * 4;
        let timina = guanina * 2;
        let adenina = guanina * 3;

        console.log(citosina , "citosina" , timina , "timina" , adenina , "adenina" , guanina , "guanina");



    }else {
        console.log("ingrese la cadena en multiplos de 10");
        
        
    }
}