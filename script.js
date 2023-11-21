// Entry animation - Typewriter effect
const text = "Y.Y.A.C.C"; // Text to be animated
let charIndex = 0;
const animationText = document.getElementById('animation-text');

function typeWriter() {
  if (charIndex < text.length) {
    animationText.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 200); // Speed of typing animation (adjust as needed)
  } else {
    // Once animation is complete, display password entry
    document.getElementById('password-entry').classList.remove('hidden');
  }
}

// Initiate entry animation
typeWriter();

// Password check
function checkPassword() {
  const password = document.getElementById('passwordInput').value;

  // Set your password here
  const correctPassword = 'Origins'; // Replace with your actual password

  if (password === correctPassword) {
    document.body.style.backgroundColor = '#000'; // Apply background color again
    document.getElementById('password-entry').classList.add('hidden');
    document.getElementById('animation').classList.remove('hidden');

    // Redirection after GIF animation
    const animation = document.getElementById('animation').querySelector('img');
    animation.addEventListener('load', function() {
      window.location.href = 'https://www.redirected-website.com'; // Replace with your desired URL
    });
  } else {
    // Display error message for incorrect password
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = 'Incorrect, contact website owner.';
  }
}
