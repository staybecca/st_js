function calcular() {
    let nums = document.getElementById("nums").value.split(',').map(Number);
    let soma = 0, par = 0, imp = 0;

    for (let num of nums) {
        soma += num;
        if (num % 2 === 0) {
            par++;
        } else {
            imp++;
        }
    }

    let media = soma / nums.length;

    document.getElementById("result").innerHTML = `<br>
               Soma: ${soma}<br><br>
                Média: ${media.toFixed(2)}<br><br>
                Pares: ${par}<br><br>
              Ímpares: ${imp}
            `;
}
