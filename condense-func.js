// https://www.w3schools.com/js/js_comparisons.asp#:~:text=Conditional%20(Ternary)%20Operator

function myFunc() {
    let vote;
    age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        vote = 'enter num';
    } else {
        vote = (age < 18) ? 'young':'old';
    }
    document.getElementById("demo").innerHTML = vote;
}