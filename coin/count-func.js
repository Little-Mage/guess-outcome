correct = 0;
incorrect = 0;
coin_toss = 0;

function correct_count() {
    correct += 1
    coin_toss += 1
    correct_p = Math.round((correct / (correct + incorrect)) * 100)
    expected = (coin_toss/2).toFixed(1)
    document.getElementById('correct').innerHTML = 'Correct: ' + correct
    document.getElementById('toss').innerHTML = 'Coin toss: ' + coin_toss    
    document.getElementById('correct percent').innerHTML = 'Correct percent: ' + correct_p + ' %'
    document.getElementById('expected').innerHTML = 'Expected correct: ' + expected;
}

function incorrect_count() {
    incorrect += 1
    coin_toss += 1
    correct_p = Math.round((correct / (correct + incorrect)) * 100)
    expected = (coin_toss/2).toFixed(1)
    document.getElementById('incorrect').innerHTML = 'Incorrect: ' + incorrect
    document.getElementById('toss').innerHTML = 'Coin toss: ' + coin_toss    
    document.getElementById('correct percent').innerHTML = 'Correct percent: ' + correct_p + ' %'
    document.getElementById('expected').innerHTML = 'Expected correct: ' + expected;
}