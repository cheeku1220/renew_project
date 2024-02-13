function login() {
    let d = document.getElementById("login");
    d.style.display = "block";
    // d.style.zIndex = "1";
    d.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        d.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == d) {
            d.style.display = "none";
        }
    }
}
function lookup(id) {
    var p = document.getElementsByTagName("pg");
    p[id].style.textTransform = "uppercase";
    p[id].style.textDecoration = "solid underline 2px blueviolet";
}
function below(id) {
    var p = document.getElementsByTagName("pg");
    p[id].style.textTransform = "lowercase";
    p[id].style.textDecoration = "none";
}
function signup() {
    let d = document.getElementById("signup");
    d.style.display = "block";
    var span = document.getElementsByClassName("close2")[0];
    span.onclick = function () {
        d.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == d) {
            d.style.display = "none";
        }
    }
}
