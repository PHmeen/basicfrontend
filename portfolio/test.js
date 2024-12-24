function cal() {

    let vn1 = parseFloat(document.getElementById("n1").value);
    let vn2 = parseFloat(document.getElementById("n2").value);
    let voperation = document.getElementById("operator").value;
    let vanswer = document.getElementById("answer");

    let result;

    if (voperation == "+") {
        result = vn1 + vn2;
    }

    if (voperation == "-") {
        result = vn1 - vn2;
    }

    if (voperation == "x") {
        result = vn1 * vn2;
    }

    if (voperation == "/") {
        if (vn2 == 0) {
            result = "ไม่สามารถหารด้วย 0 ได้";
        }
        else {
            result = vn1 / vn2;
        }
    }

    vanswer.value = result;
}
