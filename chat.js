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
    let a = document.getElementById("yesa");
    a.setAttribute("href", "renew.html");
}
function giveops() {
    setTimeout(() => {
        document.getElementById("opts").style.display = "block";  
    },1000)
    document.getElementById("add").style.cursor = "pointer";
    document.getElementById("add").style.transform = "rotate(45deg)";
    document.getElementById("add").style.transition = "1s";
}
function closeops() {
    document.getElementById("opts").style.display = "none";
    document.getElementById("add").style.transform = "";
}
// function backhome() {
//     document.getElementById("back").setAttribute("href", "renew.html");
//     document.getElementById("log").style.display = "none";
//     document.getElementById("sign").style.display = "none";
// }
function styl() {
    let r=document.getElementById("caret");
    // r.style.color = "blueviolet";
    r.setAttribute("placeholder","");
}
