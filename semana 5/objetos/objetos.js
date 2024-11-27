/*
objeto es una estructura de datos que tiene como elementos pares, llaves o valor
los cuales van separados por comas
esta estructura no es ordenada, no es iterable

*/

/*
let user ={};
let productos = {papa:2000, arroz:3000, leche:4000};
let valorPapa = productos.papa;
console.log("valorPapa: ", valorPapa );
console.log("valor leche: ", productos.leche);

let valorPapaCorchetes = productos ["papa"];
console.log("valor papa: ", valorPapaCorchetes);

let numeros = {1: "uno", 2:"dos", 3:"tres"}
let valorPropiedad1 = numeros[1];
console.log("valor propiedad 1:" ,valorPropiedad1);

// agregar propiedades con sus nombres

user.nombre = "Lady";
user.tema = "feliz cumpleaños";
user.edad = 27;
user.estado = true;
console.log("objeto user completo", user);

user["estatura"] = 180;
console.log("objeto agragado", user);

user.tema = "estas viejita :)";
console.log("actualizacion", user);

delete user.tema;
console.log("eleiminacion", user);

delete productos["papa"]
console.log("elimincion", productos);
*/
/*
let productos = {papa:2000, leche:3000, huevos:10000, mantequilla:5000, lentejas:1000, aceite:8000}
console.log("el listado con los precios es el siguiente", productos);

let vacio ={}
vacio.nombre = "lady"
vacio.evento = "cumpleaños"
vacio.años = 27
console.log("que pasa hoy:" ,vacio);

let clave ={password:"admin:30905", rol:"administrador", edad1:20}
console.log("clave", clave);

clave.password = "user_7833"
clave.rol = "user"
clave.edad1 = 34
console.log("datos nuevos", clave);

*/
/*
let carro = {color:"rojo", costo:30000000, acelera(){console.log("acelerando");
}}
console.log(carro);
carro.acelera()



let llavesCarro = Object.keys(carro);
console.log("llaves", llavesCarro);
let valoresCarro = Object.values(carro);
console.log("valores", valoresCarro);


let entradaUser = Object.entries(carro)
console.log("pares", entradaUser);

for (const clave in carro) {
   console.log("clave carro", clave);
   console.log("valor de user", carro [clave]);
   console.log("************"); 
   
}

*/


/*
let numeros = {1: "uno", 2:"dos", 3:"tres", }
let valorPropiedad1 = numeros[1];
console.log("valor propiedad 1:" ,valorPropiedad1);


for (const clave in numeros) {
    console.log("clave ", clave);
    console.log("valor", numeros [clave]);
    console.log("************"); 
    
 }


 // Obtener las claves del objeto
 const claves = Object.keys(numeros);
 
 // Recorrer las claves y mostrar la propiedad y su valor
 claves.forEach(clave => {
   console.log(`Propiedad: ${clave}, Valor: ${numeros[clave]}`);
 });




4. Dado el objeto {dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50} recorrer el objeto y
mostrar cuáles de los valores son pares.
*/

/*
let numeros = {dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50};
let clave = Object.values(numeros);
for (const clave in numeros) {
    if (numeros[clave] % 2 === 0) {
        console.log("los pares son", numeros[clave]);
 }}

*/

/*
let numeros = { 183344: "habilitado", 354625: "habilitado", 6762442:
    "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" } 

    let clave = Object.values(numeros);
    let conteo = 0
    for (const clave in numeros) {
        if (numeros[clave] === "habilitado")
             {
                conteo ++
     }
     }
     console.log("los usuarios habilitados son", conteo);
    
 */
/*
     const objeto = { numeros: [45, 78, 22, 89, 8] };

     objeto.numeros.forEach((Element) => {
       console.log(Element);
     });
     
 */
/*
     let numeros = { 3: "tres", 60: "sesenta", 10: "diez" }
     delete numeros [60]
     console.log(numeros);
*/

   let cadena = {
    162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
    4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
    786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
    }
   

    for (const clave in cadena) {
      let elemento = cadena [clave]
      for (const clave in elemento) {
       {
           console.log(elemento[clave]);
           
        }
      }  
     }

