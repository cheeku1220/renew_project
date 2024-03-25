function login() {

    let s = document.getElementById("login");
    s.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        s.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == s) {
            s.style.display = "none";
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

// var mail = ["pvedula1@gitam.in"]; 
// var pass = {
    // "pvedula1@gitam.in": "qwerty123"
// }

function check_log() {
    if (localStorage) {
        var e = document.getElementById("email").value;
        var f = document.getElementById("password").value;
        if (localStorage.getItem(e)) {
            const user = localStorage.getItem(e);
            if (f == user) {
                var g = document.getElementById("sub");
                g.style.border = "2px solid black";
                g.style.borderRadius = "50%";
                g.innerHTML = "&check;";
                var alert = document.getElementById("alert");
                if (alert.style.display == "block") {
                    alert.style.display = "none";
                }
                document.getElementById("disps").innerText = "Login successful !!!";
                setTimeout(() => {
                    document.getElementById("login").style.display = "none";
                    document.getElementById("log").style.display = "none";
                    document.getElementById("sign").style.display = "none";
                }, 2000)
                document.getElementById("tail").setAttribute("href", "tailfolder.html");
                document.getElementById("chats").setAttribute("href", "chat.html");
            }
        }
        else {
            var alert = document.getElementById("alert");
            alert.style.zIndex = 2;
            alert.style.display = "block";
            // var span = document.getElementById("cross");
            // span.onclick = function () {
                // alert.style.display = "none";
            // }  
            setTimeout(() => {
                alert.style.display = "none";
            }, 3000)
        }
    }
    // var e = document.getElementById("email").value;
    // var f = document.getElementById("password").value;
    // if (mail.includes(e) && pass[e] == f) {
        // var g = document.getElementById("sub");
        // g.style.border = "2px solid black";
        // g.style.borderRadius = "50%";
        // g.innerHTML = "&check;";
        // var alert = document.getElementById("alert");
        // if (alert.style.display == "block") {
                // alert.style.display = "none";
        // }
        // document.getElementById("disps").innerText = "Login successful !!!";
        // setTimeout(() => {
            // document.getElementById("login").style.display = "none";
            // document.getElementById("log").style.display = "none";
            // document.getElementById("sign").style.display = "none";
        // }, 1000)
        // document.getElementById("tail").setAttribute("href", "tailfolder.html");
        // document.getElementById("chats").setAttribute("href", "chat.html"); 
    // }
    else {
        var alert = document.getElementById("alert");
        alert.style.zIndex = 2;
        alert.style.display = "block";
        // var span = document.getElementById("cross");
        // span.onclick = function () {
            // alert.style.display = "none";
        // }  
        setTimeout(() => {
            alert.style.display = "none";
        },3000)
    }

}

function check_sig() {
    var e = document.getElementById("emails").value;
    // mail.push(e)
    var f = document.getElementById("passwords").value;
    var g = document.getElementById("passwordss").value;
    if (f == g && f && g) {
        // pass[e] = f;
        var g = document.getElementById("subs");
        g.style.border = "2px solid black";
        g.style.borderRadius = "50%";
        g.innerHTML = "&check;";
        document.getElementById("disp").innerText = "You've signed up as per Gitam database...now Login !!!";
        localStorage.setItem(e,f);
        setTimeout(() => {
            document.getElementById("signup").style.display = "none";
            document.getElementById("sign").style.display = "none";  
        },2000)
    }
    else {
        var alert = document.getElementById("alerts");
        alert.style.zIndex = 2;
        alert.style.display = "block";
        // var span = document.getElementById("cros");
        // span.onclick = function () {
            // alert.style.display = "none";
        // }  
        setTimeout(() => {
            alert.style.display = "none";
        },3000)
    }
}
