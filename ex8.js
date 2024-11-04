function calc() {
    let emet = parseInt(document.getElementById('emet').value);
    let eame = parseInt(document.getElementById('eame').value);
    let result = document.getElementById('result');

    let mdc = gcd(emet, eame);
    let pmet = eame / mdc;
    let pame = emet / mdc;

    result.textContent = `Fórmula iônica: M${pmet}A${pame} (${pmet}:${pame})`;
}

function calcu() {
    let lgatm= parseInt(document.getElementById('lgatm').value);
    let lgatm2 = parseInt(document.getElementById('lgatm2').value);
    let result = document.getElementById('result1');

    let mdc = gcd(lgatm, lgatm2);
    let proporcaoAtomo1 = lgatm2 / mdc;
    let proporcaoAtomo2 = lgatm / mdc;

    result1.textContent = `Fórmula molecular: A${proporcaoAtomo1}B${proporcaoAtomo2} (${proporcaoAtomo1}:${proporcaoAtomo2})`;
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
