function calcularPromedio() {
    // Obtener los valores de los inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    // Verificar que los valores no sean NaN (no numéricos)
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert('Por favor ingresa tres números válidos');
        return;
    }

    // Calcular el promedio
    const promedio = (num1 + num2 + num3) / 3;

    // Mostrar el resultado
    document.getElementById('resultado').innerText = 'El promedio es: ' + promedio.toFixed(2);
}
function calcularArea() {
    const base = document.getElementById('base').value;
    const altura = document.getElementById('altura').value;

    if (base > 0 && altura > 0) {
        const area = (base * altura) / 2;
        document.getElementById('resultado2').innerText = 'El área del triángulo es: ' + area;
    } else {
        (isNaN(base) || isNaN(altura) ) 
        alert('Por favor ingresa tres números válidos');
        return;
    
    }
}
function encontrarMayorMenor() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);
    
    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
        const mayor = Math.max(numero1, numero2, numero3);
        const menor = Math.min(numero1, numero2, numero3);
        document.getElementById('resultado4').innerText = 
            `El número mayor es ${mayor} y el número menor es ${menor}`;
    } else {
        document.getElementById('resultado4').innerText = 'Por favor, ingrese números válidos.';
    }
}
function elevarPotencia() {
    const base1 = parseFloat(document.getElementById('base1').value);
    const exponente = parseFloat(document.getElementById('exponente').value);
    
    if (!isNaN(base1) && !isNaN(exponente)) {
        const resultado5 = Math.pow(base1, exponente);
        document.getElementById('resultado5').innerText = 
            `El resultado de ${base1} elevado a la potencia ${exponente} es ${resultado5}`;
    } else {
        document.getElementById('resultado5').innerText = 'Por favor, ingrese números válidos.';
    }
}
function determinarParImpar() {
    const numero = document.getElementById('numero').value;
    
    if (numero !== "") {
        const esPar = numero % 2 === 0;
        document.getElementById('resultado3').innerText = 
            esPar ? `El número ${numero} es Par` : `El número ${numero} es Impar`;
    } else {
        document.getElementById('resultado3').innerText = 'Por favor, ingrese un número válido.';
    }
}