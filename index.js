const display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function updateDisplay() {
  display.value = currentNumber;
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operation = null;
  updateDisplay();
}

function chooseOperation(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') calculate();
  operation = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  if (previousNumber === '' || currentNumber === '' || !operation) return;
  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current === 0 ? 'Erro' : prev / current;
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  operation = null;
  previousNumber = '';
  updateDisplay();
}