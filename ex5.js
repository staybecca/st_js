function calc() {
    let comp = document.getElementById('comp').value;
    let lg = document.getElementById('lg').value;
    let result = document.getElementById('result');

    let pmtr = 36.00;

    let ar = comp * lg;

    let tt = ar * pmtr;

    result.textContent = `O custo para assentar o piso é de R$ ${tt.toFixed(2)}`;
}
