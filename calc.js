let num1 = 10; 
let num2 = 5;  // Cambia este valor según tus pruebas
let operacion = "suma";


function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: División por cero no permitida.";
        }
        return num1 / num2;
    } else {
        return "Operación no válida.";
    }
}

let continuar = true;

while (continuar) {

    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division o salir):").toLowerCase();

    if (operacion === "salir") {
        console.log("Gracias por usar la calculadora. ¡Hasta luego!");
        continuar = false;
    } else {
        const resultado = realizarOperacion(num1, num2, operacion);
        console.log(`Resultado de la operación (${operacion}):`, resultado);
    }
}
