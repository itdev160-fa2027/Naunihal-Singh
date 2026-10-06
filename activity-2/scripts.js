// Activity 2: Age Checker Application

// Function to check age and display result
function checkAge() {
  // Get the input value
  const ageInput = document.getElementById("ageInput");
  const resultDiv = document.getElementById("result");
  const inputValue = ageInput.value.trim();

  console.log(`User input: "${inputValue}"`);

  // Clear previous styling
  resultDiv.className = "";

  // Check if input is empty
  if (inputValue === "") {
    resultDiv.textContent = "Please enter your age";
    resultDiv.className = "invalid";
    console.log("Result: Empty input");
    return;
  }

  // Convert to number
  const age = Number(inputValue);

  // Check if input is a valid number
  if (isNaN(age)) {
    resultDiv.textContent = "Invalid age - please enter a number";
    resultDiv.className = "invalid";
    console.log("Result: Not a number");
    return;
  }

  // Check for realistic age range
  if (age < 0 || age > 150) {
    resultDiv.textContent =
      "Invalid age - please enter a realistic age (0-150)";
    resultDiv.className = "invalid";
    console.log("Result: Age out of range");
    return;
  }

  // Determine if adult or minor
  if (age >= 18) {
    resultDiv.textContent = `You are ${age} years old - You are an adult`;
    resultDiv.className = "adult";
    console.log(`Result: Adult (age: ${age})`);
  } else {
    resultDiv.textContent = `You are ${age} years old - You are a minor`;
    resultDiv.className = "minor";
    console.log(`Result: Minor (age: ${age})`);
  }
}