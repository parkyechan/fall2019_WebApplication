//window.onload = function() {
//    $("textbox").observe("mouseout", booyah);   // bound to text box here
//    $("submit").observe("click", booyah);       // bound to submit button here
//};
//
//function booyah() {           // booyah knows what object it was called on
//    this.value = "booyah";
//}
//
//function swapText() {
//    var span = document.getElementById("output2");
//    var textBox = document.getElementById("textbox2");
//    var temp = span.innerHTML;
//    span.innerHTML = textBox.value;
//    textBox.value = temp;
//}
//window.onload = function() {
//    document.getElementById("clickme").onclick = changeColor;
//};
//function changeColor() {
//    var clickMe = document.getElementById("clickme");
//    clickMe.style.color = "red";
//}
//element.onevent = function;
//var okButton = document.getElementById("ok");
//okButton.onclick = okayClick;
//function okayClick() {
//    alert("booyah");
//}

// called when page loads; sets up event handlers
//function pageLoad() {
//    document.getElementById("ok").onclick = okayClick;
//}
//
//function okayClick() {
//    alert("booyah");
//}
//
//window.onload = pageLoad;  // global code
//
//window.onload = function() {
//    var okButton = document.getElementById("ok");
//    okButton.onclick = okayClick;
//};
//
//function okayClick() {
//    alert("booyah");
//}
//
//var allParas = document.querySelectorAll("p");
//for (var i = 0; i < allParas.length; i++) {
//    allParas[i].style.backgroundColor = "yellow";
//}
//
//window.onload = function() {
//    $("ok").onclick = biggerFont1;
//    
//    $("clickme").onclick = biggerFont;
//};
//function biggerFont1() {
//    alert("hi");
//}
////
////window.onload = function() {
////};
//function biggerFont() {
//    var size = parseInt($("clickme").getStyle("font-size"));
//    $("clickme").style.fontSize = (size + 4) + "pt";
//}

//window.onload = function() {
//    $("target").observe("mousemove", showCoords);
//};
//
//function showCoords(event) {
//    $("target").innerHTML =  "pointer: (" + event.pointerX() + ", " + event.pointerY() + ")\n" + "screen : (" + event.screenX + ", " + event.screenY + ")\n" + "client : (" + event.clientX + ", " + event.clientY + ")";
//}

window.onload = function() {
    $("textbox").observe("mouseout", booyah);   // bound to text box here
    $("submit").observe("click", booyah);       // bound to submit button here
};

function booyah() {           // booyah knows what object it was called on
    this.value = "booyah";
}
function processDucks() {
    if ($("huey").checked) {
        alert("Huey is checked!");
    } else if ($("dewey").checked) {
        alert("Dewey is checked!");
    } else {
        alert("Louie is checked!");
    }
//    alert(this.value + " is checked!");
}

function delayMsg() {
    setTimeout(booyah, 5000);
    document.getElementById("output").innerHTML = "Wait for it...";
}

function booyah() {   // called when the timer goes off
    document.getElementById("output").innerHTML = "BOOYAH!";
}