var xEl = document.getElementById("x");
var yEl = document.getElementById("y");
var result = document.getElementById("result");
document.getElementById("add").addEventListener("click", function () {
    var sum = (+xEl.value) + (+yEl.value);
    result.textContent = sum.toString();
});
document.getElementById("subtract").addEventListener("click", function () {
    var difference = (+xEl.value) - (+yEl.value);
    result.textContent = difference.toString();
});
function print2(person) {
    console.log(person.name);
}
