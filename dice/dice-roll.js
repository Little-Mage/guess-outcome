min = 1;
max = 7;

function dice() {
    return document.getElementById("demo").innerHTML =
    Math.floor(Math.random()* (max - min)) + min;
}