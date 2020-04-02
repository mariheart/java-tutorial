
let firstNumber = Math.round(Math.random(0, 100));
let secondNumber = Math.round(Math.random(0, 100));

function equalNumbers (firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        alert(firstNumber + " is higher than " + secondNumber);
    } else if (firstNumber < secondNumber) {
        alert(firstNumber + " is lower than " + secondNumber);
    } else {
        alert(firstNumber + " is equal to " + secondNumber);
    }
}

equalNumbers (firstNumber, secondNumber);