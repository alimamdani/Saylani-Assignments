function getNumber(num) {
    var number = document.getElementById("result");
    number.value += num;
}
function clearResult() {
    var number = document.getElementById("result");
    number.value = "";
}
function getResult() {
    var number = document.getElementById("result");
    number.value = eval(number.value);
}