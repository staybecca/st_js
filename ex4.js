function calcularGasto() {
    let klometr = parseFloat(document.getElementById('klometr').value);
    let ttComb = parseFloat(document.getElementById('ttComb').value);
    let result = document.getElementById('result');

    let consKm = 8;

    let litus = klometr / consKm;

    let tt = litus * ttComb;

    result.textContent = `O gasto com combustível é de R$ ${tt.toFixed(2)}`;
}
