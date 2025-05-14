// Save username to localStorage
document.getElementById("saveBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  if (username) {
    localStorage.setItem("name", username);
    showGreeting(username);
  }
});

// Display greeting if name is stored
function showGreeting(name) {
  document.getElementById("greeting").textContent = `Hello, ${name}!`;
}

// On load, check for stored name
window.addEventListener("DOMContentLoaded", () => {
  const storedName = localStorage.getItem("name");
  if (storedName) {
    showGreeting(storedName);
  }
});

// Animate the box
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  box.classList.remove("animate"); // Reset
  void box.offsetWidth; // Trigger reflow
  box.classList.add("animate");
});
