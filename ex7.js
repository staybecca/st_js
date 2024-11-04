function calc() {
    let met = parseFloat(document.getElementById('met').value);
    let ame = parseFloat(document.getElementById('ame').value);
    let resultado = document.getElementById('resultado');
    
    let tt = ame + met
if (tt===100) {
    if (ame > met) {
        result.textContent = 'liga predominantemente ametalica';
    } else {
        result.textContent = 'liga predominantemente metalica';
    }
    if (ame===met) {
        result.textContent = 'A liga é 50 % metálica e 50 % ametálica';
    }
} else {
    result.textContent = 'A soma dos percentuais deve ser igual a 100%';
}
 
}
