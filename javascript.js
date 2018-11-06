
function helloConsole() {
  console.log("Hello, World!");
}

function helloPopup() {
  alert("Hello, World!");
}

function helloBrowser () {
  var p = document.getElementById ("hello");
  p.innerHTML = "Hello, World!";
}

function helloStranger () {
  var person = prompt("Please enter your name");
    if(person != null) {
      alert("Hello " + person + "!");
    }
}
