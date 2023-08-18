//Funciones para realizar las operaciones
function suma(x, y) {
    return x + y;
}
function resta(x, y) {
    return x - y;
}
function multiplicacion(x, y) {
    return x * y;
}
function division(x, y) {
    return x / y;
}
//calculos según la operación elegida
function calcularResultado(option, num1, num2) {
    let resultado;
    switch (parseFloat(option)) {
        case 1:
            resultado = suma(num1, num2);
            break;
        case 2:
            resultado = resta(num1, num2);
            break;
        case 3:
            resultado = multiplicacion(num1, num2);
            break;
        case 4:
            resultado = division(num1, num2);
            break;
    }
    return resultado;
}
//validación de números, longitud y la operación elegida, se podría haber trabajado con input tipo number
function validar(opcion, num1, num2) {
    if (isNaN(opcion)) {
        alert('Seleccione una operación!!!');
        exit();
    }
    if (isNaN(num2) || isNaN(num1) || num2===0) {
        alert('Uno y/o ambos número/s no son válidos. O el divisor es 0!!!');
        exit();
    }
}
//función general
function main() {
    let opcion = parseInt(document.getElementById('operacion').value);
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    validar(opcion, num1, num2);
    //limitando la cantidad de decimales
    return resultado=(calcularResultado(opcion, num1, num2)).toFixed(2);
}