// const vari = {
    // first: "Nelson",
    // sec: "Mandela",
    // movie: 'ADIPURUSH',
    // year:2023,
    // fullname: function () {
        // console.log(this);
        // console.log(`fullname is ${this.first} ${this.sec}`);
    // }
// }
// 
// 
// function disp({ movie, score, year }) {
    // console.log(`The movie ${movie} released in the year ${year}, has a rating ${score} out of 5!`);
// }
// 
// const re = ["saie", 'miab', 'mero','kali','loki'];
// var [gold, silver, ...remains] = re;

// function res({ movie, score, ...arguments }) {
    // console.log(arguments);
    // console.log(movie);
    // console.log(score);
    // console.log(...movie);
// }
// 
// function tryi(dog, cat = "dog") {
    // console.log(dog);
    // console.log(cat);
// }
// 
// const {rating=3.45 } = vari;
// 
// const tea = vari.map(({first, sec}) => {
    // return `${first} ${sec}`;
// })
// 
// var p=re.map(r => r.toUpperCase());

function dialog(ide) {
    // const sub_decode = {
        // EEI471: "Robotics and Automation",
        // ECS445: "Adhoc and Sensor Networks",
        // ECS445P:"Adhoc and Sensor Networks Lab",
        // ECS493: "Internship",
        // ECS431: "Embedded Systems",
        // ECS431P: "Embedded Systems Lab",
        // ECS457: "Cyber Forensics",
        // ECS457P: "Cyber Forensics Lab",
        // ECS495: "Comprehensive Skill Development VI",
        // ECS491: "Project Phase I",
        // EHS403:"Organisational Behavior"
    // }

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var content = document.getElementById("lookforit");
    if (ide === "rba") {
        content.innerHTML = "Course: Robotics and Automation<br><br>Faculty: Md Waliuddin<br><br>Room: ICT-608B";
    }
    else if (ide === "ads") {
        content.innerHTML = "Course: Adhoc and Sensor Networks<br><br>Faculty: Sapna<br><br>Room: ICT-603A";
    }
    else if (ide === "adslab") {
        content.innerHTML = "Course: Adhoc and Sensor Networks Lab<br><br>Faculty: Sapna<br><br>Room: ICT-310-Grady Booch Case Tools Lab";
    }
    else if (ide === "intern") {
        content.innerHTML = "Internship<br><br>Faculty: Malarselvi S<br><br>Room: ICT-516";
    }
    else if (ide === "cyb") {
        content.innerHTML = "Course:Cyber Forensics<br><br>Faculty: Amanapu Yaswanth<br><br>Room: ICT-603A";
    }
    else if (ide === "cyblab") {
        content.innerHTML = "Course:Cyber Forensics Lab<br><br>Faculty: Amanapu Yaswanth<br><br>Room: ICT-309";
    }
    else if (ide === "embd") {
        content.innerHTML = "Course: Embedded Systems<br><br>Faculty: Grace Mercy Matta<br><br>Room: ICT-515";
    }
    else if (ide === "embdlab") {
        content.innerHTML = "Course: Embedded Systems Lab<br><br>Faculty: Grace Mercy Matta<br><br>Room: ICT-310-Grady Booch Case Tools Lab";
    }
    else if (ide === "proj") {
        content.innerHTML = "Project Phase I<br><br>Faculty: Dr. Konala Thammi Reddy<br><br>Room: ICT-517";
    }
    else if (ide === "org") {
        content.innerHTML = "Course: Organisational Behavior<br><br>Faculty: Munukurthi Rama Surya Satyanarayana<br><br>Room: ICT-515";
    }
    else {
        content.innerHTML="Comprehensive Skill Development VI<br><br>Faculty: Gantla Santoshi Kumari<br><br>Room: ICT-516"
    }

    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
