'use strict';

let nombre = 5;

console.log(nombre, typeof nombre);

nombre = 'Pepe';

console.log(nombre, typeof nombre);

const constante = 5;

let variable;

console.log(variable, typeof variable);

let nulo = null;

console.log(nulo, typeof nulo);

const numeroTexto = '5';

console.log(numeroTexto, typeof numeroTexto);

console.log(numeroTexto + 3);

const numero = Number(numeroTexto);

console.log(numero, typeof numero);

if (isNaN(numero)) {
    console.log('No es un número');
} else {
    console.log('Es un número');
}

const x = Number(prompt('Introduce la x'));
const y = Number(prompt('Introduce la y'));
const op = prompt('Introduce la operación');

let resultado;

switch (op) {
    case '+':
        resultado = x + y;
        break;
    case '-':
        resultado = x - y;
        break;
    case '*':
        resultado = x * y;
        break;
    case '/':
        resultado = x / y;
        break;
    default:
        resultado = 'Operación no válida';
}

alert(resultado);
