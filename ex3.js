
function calc() {
    let nums= document.getElementById("nums").value.split(',').map(Number);
    if (nums.length !== 10) {
        alert("Por favor, insira exatamente 10 números.");
        return;
    }

    let soma = 0, menz= 0;
    let maiom = [];

    for (let num of nums) {
        soma += num;
        if (num < 0) {
            menz++;
        }
    }

    let media = soma / nums.length;

    for (let num of nums) {
        if (num > media) {
            maiom.push(num);
        }
    }

    document.getElementById("result").innerHTML = `<br><br>
                Média: ${media.toFixed(2)}<br><br>
                &nbsp &nbsp &nbsp &nbsp &nbsp Números maiores que a média:<br> ${maiom.join(', ')}<br><br>
                Número de elementos menores que zero: ${menz}
            `;
}