// ===============================
// Part 2: Functions with Scope
// ===============================

// Global variable
let multiplier = 5;

// Function with parameter + return value
function multiply(num) {
  // Local scope: num only exists inside this function
  return num * multiplier; 
}

// Function demonstrating local vs global
function updateMultiplier(newVal) {
  let localMultiplier = newVal; // local scope
  return localMultiplier * 2; // just to show local usage
}

document.getElementById("calcBtn").addEventListener("click", () => {
  const result = multiply(8); // uses global multiplier (5 × 8)
  document.getElementById("calcResult").textContent = `Result: ${result}`;
});

// ===============================
// Part 3: Combining CSS + JS
// ===============================

// Animate Box
const jsBox = document.getElementById("jsBox");
document.getElementById("animateBoxBtn").addEventListener("click", () => {
  jsBox.classList.toggle("animate");
});

// Card Flip
const flipCard = document.getElementById("flipCard");
flipCard.addEventListener("click", () => {
  flipCard.classList.toggle("flipped");
});

// Modal
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 50);
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 500);
});
