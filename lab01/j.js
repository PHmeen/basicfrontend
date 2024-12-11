
function ShowName() {
    const x = document.getElementById("demo");
    x.innerText = "Phatit Nudam";
    x.style.fontSize = "20px";
    x.style.color = "blue";
}

function Thai() {
    const x = document.getElementsByTagName("li");
    x[0].innerText = "วิทยาศาสตร์";
    x[1].innerText = "พยาบาล";
    x[2].innerText = "วิศวกรรมศาสตร์";
    x[0].style.color = "Gold";
    x[1].style.color = "orange";
    x[2].style.color = "DarkRed ";
}