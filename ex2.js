function ctemp() {
    let temp = document.getElementById('temp').value;
    let st = document.getElementById('st').value;
    let result = document.getElementById('result');
    let contemp;

    if (st === 'ce') {
    
        contemp = (temp * 1.8) + 32;
        result.textContent = `${temp}°C é igual a ${contemp.toFixed(2)}°F`;
    } else {

        contemp = (temp - 32)/ 1.8;
        result.textContent = `${temp}°F é igual a ${contemp.toFixed(2)}°C`;
    }
}
