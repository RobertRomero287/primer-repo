let datoa = parseFloat(prompt("ingrese valor de a"));
let datob = parseFloat(prompt("ingrese valor de b"));
let datoc = parseFloat(prompt("ingrese valor de c"));
let math;
//(-b+√(b²-4ac))/(2a)
let paso1 = datob ** 2;
//(-b+√(paso1-4ac))/(2a)
let paso2 = 4 * datoa * datoc;
//(-b+√(paso1-paso2))/(2a)
let paso3 = paso1 - paso2;
if (paso3 >= 0) {
    //(-b+√paso3)/(2a)
    let paso4 = 2 * datoa;
    //(-b+√paso3)/paso4
    let paso5 = Math.sqrt(paso3);
    //(-b+paso5)/paso4
    let paso6 = - datob + paso5;
    //paso6/paso4
    let paso7 = paso6 / paso4;
    console.log(paso7);

//(-b-√(b²-4ac))/(2a)

    let paso8 = -datob - paso5;
    let paso9 = paso8 / paso5;
    console.log(paso9);
}else {
    console.log("no tiene una solucion real");
    
}


// (-b±√(b²-4ac))/(2a)
//Cree un programa que dados a, b y c, use la fórmula general para resolver la ecuación cuadrática correspondiente.