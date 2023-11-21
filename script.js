const text = "Y.Y.A.C.C";
let index = 0;
let speed = 400; // Speed of typing animation in milliseconds

function typeWriter() {
  if (index < text.length) {
    document.querySelector(".typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("entryAnimation").style.display = "none";
    document.querySelector(".password-box").style.display = "block";
  }
}

// Start typing animation when the page loads
window.onload = function() {
  typeWriter();
};

function checkPassword() {
  const enteredPassword = document.getElementById("passwordInput").value;

  if (enteredPassword === "Origins") {
    // Redirect to another site after successful password entry
    window.location.href = "https://your-redirect-site.com";
    // You may load the gif here, but due to security restrictions,
    // loading from GitHub directly may not work without server-side access
  } else {
    document.getElementById("errorMessage").textContent = "Incorrect, contact website owner.";
  }
}
