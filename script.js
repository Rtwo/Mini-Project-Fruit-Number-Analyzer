// Get DOM elements
const fruitInput = document.getElementById('fruitInput');
const numberInput = document.getElementById('numberInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const resultDiv = document.getElementById('result');

// Analysis function
function analyzeFruitAndNumber() {
  const fruit = fruitInput.value.trim().toLowerCase();
  const number = parseInt(numberInput.value);

  if (!fruit) {
    resultDiv.textContent = "Please enter a fruit.";
    return;
  }

  if (isNaN(number)) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  let fruitMessage = "";
  // Basic fruit check
  switch (fruit) {
    case "apple":
      fruitMessage = "Apples are great for health!";
      break;
    case "banana":
      fruitMessage = "Bananas provide quick energy.";
      break;
    case "orange":
      fruitMessage = "Oranges are rich in Vitamin C.";
      break;
    default:
      fruitMessage = `You entered ${fruit}, interesting choice!`;
  }

  // Number analysis
  let numberMessage = "";
  if (number % 2 === 0) {
    numberMessage = `The number ${number} is even.`;
  } else {
    numberMessage = `The number ${number} is odd.`;
  }

  if (number > 10) {
    numberMessage += " It's greater than 10.";
  } else {
    numberMessage += " It's 10 or less.";
  }

  // Show combined result
  resultDiv.textContent = `${fruitMessage} ${numberMessage}`;
}

// Event listener
analyzeBtn.addEventListener('click', analyzeFruitAndNumber);
