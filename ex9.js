
function calcular() {
    let numeros = document.getElementById("nums").value.split(',').map(Number);
   
  
    document.getElementById("resultado").innerHTML = `${numeros}`;
}


function calcm() {
    let nums = document.getElementById("nums").value.split(',').map(Number);
    
    let ma = parseInt(nums[0])

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > ma) { ma = nums[i]; }

        document.getElementById("result").innerHTML = `${ma} `;
    }
}

function calcmi() {
    let nums = document.getElementById("nums").value.split(',').map(Number);
    let mi = parseInt(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < mi) { mi = nums[i]; }

        document.getElementById("resul").innerHTML = `${mi} `;
    }
}