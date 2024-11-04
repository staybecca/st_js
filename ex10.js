function calcularExponencial() {
    let x = parseFloat(document.getElementById('x').value);
    let result = document.getElementById('result');

    let fe= Math.exp(x);

    result.textContent = `f(x) = e^${x} = ${fe.toFixed(4)}`;
}
