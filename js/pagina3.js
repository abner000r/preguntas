function invertirTexto() {
    const texto = document.getElementById('textoInput').value;
    const textoInvertido = texto.split('').reverse().join('');
    document.getElementById('resultadoTexto').innerText = `Texto invertido: ${textoInvertido}`;
}