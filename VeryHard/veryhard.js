const number1 = parseFloat(prompt("Enter your first number"));
const operator = prompt("Choose your operator (+, -, *, /) ");
const number2 = parseFloat(prompt("Enter your second number"));

let result;

if (operator === "+") {
    result = number1 + number2;
}
else if (operator === "-") {
    result = number1 - number2;
}
else if (operator === "*") {
    result = number1 * number2;
}
else if (operator === "/") {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);