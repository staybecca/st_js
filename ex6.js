function calc() {
    let m = parseFloat(document.getElementById('m').value);
    let a1 = parseFloat(document.getElementById('a1').value);
    let a2 = parseFloat(document.getElementById('a2').value);
    let result = document.getElementById('result');

    let a = a1 - a2;

    let ftt = m * a;

    result.textContent = `Força resultante: ${ftt.toFixed(2)} N`;
}

function calcu() {
    let m1 = parseFloat(document.getElementById('m1').value);
    let aob1 = parseFloat(document.getElementById('aob1').value);
    let m2 = parseFloat(document.getElementById('m2').value);
    let aob2 = parseFloat(document.getElementById('aob2').value);
    let result1 = document.getElementById('result1');

    let fa = m1 * aob1;
    let fr = m2 * aob2;

    result1.textContent = `Força de ação: ${fa.toFixed(2)} N, Força de reação: ${fr.toFixed(2)} N (mesma magnitude, sentidos opostos)`;
}
