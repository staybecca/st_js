function calcular() {
    let met = parseFloat(document.getElementById('met').value);
    let ame = parseFloat(document.getElementById('ame').value);
    let resultado = document.getElementById('resultado');

        if (ame > 50) {
            resultado.textContent = 'liga predominantemente ametalica';
        } else {
            if (met > 50) {
                resultado.textContent = 'liga predominantemente metalica';
            } else {
                if (ame === met) {
                    resultado.textContent = 'A liga é 50 % metálica e 50 % ametálica';
                } else {
                    resultado.textContent = 'Para fazer o calculo e preciso que um deles seja maior que 50% ou ambos iguais a 50%';
                }
            }
    }
}
