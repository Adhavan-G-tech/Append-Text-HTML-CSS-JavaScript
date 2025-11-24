function calculate(operator) {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const totalElement = document.getElementById("tot");

  if (isNaN(num1) || isNaN(num2)) {
    totalElement.innerHTML = "Please enter valid numbers!";
    return;
  }

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero!";
      break;
  }

  totalElement.innerHTML = `Total: ${result}`;
}
