let consumoDeCarne;
let usoDiario;
let pregunta;
let pregunta2;
let opciones;

function mensajeParaTransporte(pregunta, pregunta2) {
    switch (pregunta, pregunta2) {
        
        case "diario" && "si":
            alert(`Su huella de Co2 es de:  ${usoDiario + consumoDeCarne} kilos pos año \n ¡Haz tu parte por el planeta! 🌍🚍mensaje de DIARIO Y SI`);

            opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
            break;


        case "diario" && "no":
            alert(`Su huella de Co2 es de:  ${usoDiario + consumoDeCarne} kilos pos año \n ¡Haz tu parte por el planeta! 🌍🚍mensaje de DIARIO Y NO`);

            opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
            break;

        case "semanal" && "si":
            alert(`Su huella de Co2 es de:  ${usoDiario + consumoDeCarne} kilos pos año \n ¡Haz tu parte por el planeta! 🌍🚍mensaje de SEMANAL Y SI `);

            opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
            break;

        case "semanal" && "no":
            alert(`Su huella de Co2 es de:  ${usoDiario + consumoDeCarne} kilos pos año \n ¡Haz tu parte por el planeta! 🌍🚍mensaje de SEMANAL Y NO`);

            opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
            break;

        case "nunca" && "si":
            alert(`Su huella de Co2 es de:  ${usoDiario + consumoDeCarne} kilos pos año \n ¡Haz tu parte por el planeta! 🌍🚍mensaje de NUNCA Y SI`);

            opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
            break;

        case "nunca" && "no":
            alert(`Su huella de Co2 es de:  ${usoDiario + consumoDeCarne} kilos pos año \n ¡Haz tu parte por el planeta! 🌍🚍mensaje de NUNCA Y NO`);

            opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
            break;

        default:
            break;
    }







}
function calcularHuellaTransporte(pregunta) {
    switch (pregunta) {
        case "diario":
            usoDiario = 1250 * 0.09;
            alert(`Se realiza el cálculo teniendo en cuenta un desplazamiento de 5 km diarios durante los 250 días hábiles en Colombia, lo que da como resultado: ${usoDiario} kg CO2 al año`);


            break;
        case "semanal":
            usoDiario = 280 * 0.09;
            alert(`Se realiza el calculo teniendo en cuenta un desplazamiento de 5 km  uasandose una vez a la semana dando como resultado ", ${usoDiario}, "kg CO2 al año`);

            break;
        case "nunca":

            alert(`No estas generando contaminacion de CO2 en tu desplazamiento diario ${consumoDeCarne = 0}`);

            break;

    }
}
function calcularHuellaCarne(pregunta2) {
    if (pregunta2 === "si") {
        consumoDeCarne = 21 * 27;
        alert(`Se realiza calculo de consumo de carne roja  3 veces por semana consumiendo cada dia 125gr aproximadamente dando como resultado ${consumoDeCarne} , "kg Co2 al año`);

    } else {
        alert(`Tu impacto ambiental por consumo de carnes rojas es  bajo, ${consumoDeCarne = 0}`)
            ;
    }
}


alert(`Hola, somos LagunaViva queremos impactar positivamente al medioambiente, concientizandote de la huella de carbono generada diariamente en habitos cotidianos y como se pueden reducir`);

alert(`Acontinuacion encontrarar un menu de opciones, elige una para que continues la interaccion en el aplicativo`);

opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));

while (true) {
    switch (opciones) {
        case 1:
            alert(`La quema de combustibles fósiles (como petróleo, gas y carbón) para energía, transporte e industria libera dióxido de carbono (CO₂), un gas de efecto invernadero que atrapa el calor en la atmósfera. \n La tala de bosques para obtener madera o crear espacios para cultivos y ganadería reduce la capacidad de la Tierra para absorber CO₂, lo que aumenta los gases de efecto invernadero. \n La sobreexplotación de los recursos naturales también contribuye a la contaminación y al agotamiento de ecosistemas.`);

            opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));

            break;
        case 2:
            pregunta = prompt("¿Con qué frecuencia usas transporte público? (Responde: diario, semanal, nunca)");
            pregunta2 = prompt("¿Consumes carne roja más de 3 veces por semana? (sí/no)");
            calcularHuellaTransporte(pregunta);
            calcularHuellaCarne(pregunta2);
            opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
            break;
        case 3:
            mensajeParaTransporte(pregunta, pregunta2);
            break;
        default:
            break;
    }
}