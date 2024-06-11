function invertirTexto() {
    const texto = document.getElementById('textoInput').value;
    const textoInvertido = texto.split('').reverse().join('');
    document.getElementById('resultadoTexto').innerText = `Texto invertido: ${textoInvertido}`;
}
function calcularFactorial() {
    const numero = parseInt(document.getElementById('numeroInput').value);
    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultadoFactorial').innerText = 'Por favor, ingrese un número válido';
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById('resultadoFactorial').innerText = `El factorial de ${numero} es: ${factorial}`;
}
function verificarPerfecto() {
    const numero = parseInt(document.getElementById('numeroInput1').value);
    if (isNaN(numero) || numero < 1) {
        document.getElementById('resultadoPerfecto').innerText = 'Por favor, ingrese un número válido';
        return;
    }

    let suma = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }

    if (suma === numero) {
        document.getElementById('resultadoPerfecto').innerText = `${numero} es un número perfecto`;
    } else {
        document.getElementById('resultadoPerfecto').innerText = `${numero} no es un número perfecto`;
    }
}
function contarVocales() {
    const texto = document.getElementById('textoInput2').value;
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador = 0;

    for (let char of texto) {
        if (vocales.includes(char)) {
            contador++;
        }
    }

    document.getElementById('resultadoVocales1').innerText = `El texto ingresado contiene ${contador} vocales`;
}
function verificarPrimo() {
    const numero = parseInt(document.getElementById('numeroInput2').value);
    if (isNaN(numero) || numero < 1) {
        document.getElementById('resultadoPrimo').innerText = 'Por favor, ingrese un número válido';
        return;
    }

    let esPrimo = true;
    if (numero === 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo) {
        document.getElementById('resultadoPrimo').innerText = `${numero} es un número primo`;
    } else {
        document.getElementById('resultadoPrimo').innerText = `${numero} no es un número primo`;
    }
}