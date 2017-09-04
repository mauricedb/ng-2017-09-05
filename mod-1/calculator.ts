var xEl = <HTMLInputElement>document.getElementById("x");
var yEl = <HTMLInputElement>document.getElementById("y");
var result = document.getElementById("result");

document.getElementById("add").addEventListener("click", function() {
  var sum = (+xEl.value) + (+yEl.value);
  result.textContent = sum.toString();
});

document.getElementById("subtract").addEventListener("click", function() {
  var difference = (+xEl.value) - (+yEl.value);
  result.textContent = difference.toString();
});


