function cal() {
    let vn1 = document.getElementById("n1").value; 
    let vn2 = document.getElementById("n2").value; 
    let voperator = document.getElementById("operator").value; 
    let vanswer = document.getElementById("answer"); 


    vn1 = parseFloat(vn1);
    vn2 = parseFloat(vn2);

    if (voperator == "+") {
        vanswer.value = vn1 + vn2;
    } 
    else if (voperator == "-") {
        vanswer.value = vn1 - vn2;
    } 
    else if (voperator == "x") {
        vanswer.value = vn1 * vn2;
    } 
    else if (voperator == "/") {
        if (vn2 !== 0) { 
            vanswer.value = vn1 / vn2;
        } else {
            vanswer.value = "Error"; 
        }
    } else {
        vanswer.value = "Invalid operator"; 
    }
}
