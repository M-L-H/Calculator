

function appendToInput(value) {
  const inputField = document.getElementById('inputField');
  inputField.value += value;
}

function calculateResult() {
  const inputField = document.getElementById('inputField');
  const resultField = document.getElementById('resultField');
  
  resultField.value = eval(inputField.value);
}

function clearFields() {
  const inputField = document.getElementById('inputField');
  const resultField = document.getElementById('resultField');
  
  inputField.value = '';
  resultField.value = '';
}

