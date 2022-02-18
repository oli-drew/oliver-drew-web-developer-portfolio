// Function to switch between light and dark mode
let currentMode = "dark";
const modeSwitch = document.querySelector("#modeSwitch");
const modeSelector = () => {
  if (currentMode === "dark") {
    currentMode = "light";
    modeDisplay(currentMode);
  } else {
    currentMode = "dark";
    modeDisplay(currentMode);
  }
};
// Function to change elements based on the mode
const modeDisplay = () => {
  console.log(`Mode: ${currentMode}`);
};

// Event listener for the mode switch button
modeSwitch.addEventListener("change", modeSelector);
