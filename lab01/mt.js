window.onload = function () {
    display2();
}

/*
function display() {
    const vmother = document.getElementById("mother");
    const v1 = document.getElementById("line1");
    const v2 = document.getElementById("line2");
    const v3 = document.getElementById("line3");
    const v4 = document.getElementById("line4");
    const v5 = document.getElementById("line5");
    const v6 = document.getElementById("line6");
    const v7 = document.getElementById("line7");
    const v8 = document.getElementById("line8");
    const v9 = document.getElementById("line9");
    const v10 = document.getElementById("line10");
    const v11 = document.getElementById("line11");
    const v12 = document.getElementById("line12");

    
    v1.innerText = vmother.value + " x 1 = " + (vmother.value * 1);
    v2.innerText = vmother.value + " x 2 = " + (vmother.value * 2);
    v3.innerText = vmother.value + " x 3 = " + (vmother.value * 3);
    v4.innerText = vmother.value + " x 4 = " + (vmother.value * 4);
    v5.innerText = vmother.value + " x 5 = " + (vmother.value * 5);
    v6.innerText = vmother.value + " x 6 = " + (vmother.value * 6);
    v7.innerText = vmother.value + " x 7 = " + (vmother.value * 7);
    v8.innerText = vmother.value + " x 8 = " + (vmother.value * 8);
    v9.innerText = vmother.value + " x 9 = " + (vmother.value * 9);
    v10.innerText = vmother.value + " x 10 = " + (vmother.value * 10);
    v11.innerText = vmother.value + " x 11 = " + (vmother.value * 11);
    v12.innerText = vmother.value + " x 12 = " + (vmother.value * 12);
}
*/

function display2() {
    const vmother = document.getElementById("mother");
    var v = [];
    v[1] = document.getElementById("line1");
    v[2] = document.getElementById("line2");
    v[3] = document.getElementById("line3");
    v[4] = document.getElementById("line4");
    v[5] = document.getElementById("line5");
    v[6] = document.getElementById("line6");
    v[7] = document.getElementById("line7");
    v[8] = document.getElementById("line8");
    v[9] = document.getElementById("line9");
    v[10] = document.getElementById("line10");
    v[11] = document.getElementById("line11");
    v[12] = document.getElementById("line12");
    
    for (let i = 1; i <= 12; i++) 
    {
        v[i].innerText = vmother.value + " x " + i + " = " + (vmother.value * i);
    }
 
}
