console.log("Hi how can i help u dude???????");
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};
console.log("What u want?");
window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #37E2D5}";
    document.body.appendChild(css);
};

magic = document.querySelector(".magic");
magic.onclick = function(){
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");

    line1 = document.querySelector(".line1");
    line1.classList.toggle("touch");
    line2 = document.querySelector(".line2");
    line2.classList.toggle("touch");
    line3 = document.querySelector(".line3");
    line3.classList.toggle("touch");
}

setInterval(() =>{

    // CLOCKs
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    //DATE
    
    const d = new Date();
    let text = d.toLocaleDateString();
    document.getElementById("demo").innerHTML = text;
    })

  