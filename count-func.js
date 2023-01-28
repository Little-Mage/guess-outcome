correct = 0;
incorrect = 0;
dice_rolls = 0;

function correct_count() {
    correct += 1
    dice_rolls += 1
    correct_p = Math.round((correct / (correct + incorrect)) * 100)
    rolls = document.getElementById('rolls').value
    expected = dice_rolls/6
    document.getElementById('correct').innerHTML = 'Correct: ' + correct
    document.getElementById('rolls').innerHTML = 'Dice rolls: ' + dice_rolls    
    document.getElementById('correct percent').innerHTML = 'Correct percent: ' + correct_p + ' %'
    document.getElementById('expected').innerHTML = 'Expected correct: ' + expected.toFixed(1);
}

function incorrect_count() {
    incorrect += 1
    dice_rolls += 1
    correct_p = Math.round((correct / (correct + incorrect)) * 100)
    rolls = document.getElementById('rolls').value
    expected = dice_rolls/6
    document.getElementById('incorrect').innerHTML = 'Incorrect: ' + incorrect
    document.getElementById('rolls').innerHTML = 'Dice rolls: ' + dice_rolls    
    document.getElementById('correct percent').innerHTML = 'Correct percent: ' + correct_p + ' %'
    document.getElementById('expected').innerHTML = 'Expected correct: ' + expected.toFixed(1);
}