// let d = document.getElementById("no").value;
function glow() {
    let d = document.getElementById("inp").value.toLowerCase();
    if (d) {
        document.getElementById(d).style.backgroundColor = "purple";

    }
    setTimeout(() => {
        document.getElementById(d).style.backgroundColor = "";
    },1000)
}

function choice() {
    let g = document.getElementById("hid");
    g.style.display = "block";
    document.body.backgroundColor="rgba(0, 0, 0, 0.6)"
}
function back() {
    let g = document.getElementById("hid");
    g.style.display = "none";
}
function exit() {
    let f = document.getElementById("yes");
    f.style.border = "2px solid black";
    f.style.borderRadius = "50%";
    let a = document.getElementById("yesa");
    a.setAttribute("href", "index.html");
}
