correct = 0;
incorrect = 0;

function correct_count() {
    correct += 1
    document.getElementById('correct').innerHTML = 'Correct: ' + correct
    document.getElementById('rolls').innerHTML = 'Dice rolls: ' + (correct + incorrect)
    correct_p = Math.round((correct / (correct + incorrect)) * 100)
    document.getElementById('correct percent').innerHTML = 'Correct percent: ' + correct_p + '%';
}

function incorrect_count() {
    incorrect += 1
    document.getElementById('incorrect').innerHTML = 'Incorrect: ' + incorrect
    document.getElementById('rolls').innerHTML = 'Dice rolls: ' + (correct + incorrect)
    correct_p = Math.round((correct / (correct + incorrect)) * 100)
    document.getElementById('correct percent').innerHTML = 'Correct percent: ' + correct_p + '%';
}