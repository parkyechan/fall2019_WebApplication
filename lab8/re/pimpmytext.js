function hello(){
    alert("Hello, world!");
}

 function bigger() {
   var textarea = document.getElementById("text");
   textarea.style.fontSize = "24pt";
     
 }

function bling() {
  var textarea = document.getElementById("text");
  var checkbox = document.getElementById("check1");
  if (checkbox.checked == true) {
    textarea.style.fontWeight = "bold";
    textarea.style.color = "green";
    textarea.style.textDecoration = "underline";
    document.body.style.backgroundImage = "url(https://selab.hanyang.ac.kr/courses/cse326/2019/labs/images/8/hundred.jpg)";
  } else {
    textarea.style.fontWeight = "normal";
    textarea.style.color = "black";
    textarea.style.textDecoration = "none";
    document.body.style.backgroundImage = "none";
  }
}

function snoopify() {
	var text = document.getElementById("text");
	text.value = text.value.toUpperCase();
  text.value = textarea.value.split(".").join("-izzle");
}