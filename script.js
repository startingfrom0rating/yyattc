// Entry animation
const text = "Y.Y.A.C.C"; // Replace with your desired text
let charIndex = 0;
const animationText = document.getElementById('animation-text');

function typeWriter() {
  if (charIndex < text.length) {
    animationText.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 200); // Speed of typing animation (adjust as needed)
  } else {
    document.getElementById('password-entry').classList.remove('hidden');
  }
}

typeWriter();

// Password check
function checkPassword() {
  const password = document.getElementById('passwordInput').value;

  // Set your password here
  const correctPassword = 'Origins'; // Replace with your actual password

  if (password === correctPassword) {
    document.getElementById('password-entry').classList.add('hidden');
    document.getElementById('animation').classList.remove('hidden');

    // Redirection after GIF animation
    const animation = document.getElementById('animation').querySelector('img');
    animation.addEventListener('animationend', function() {
      window.location.href = 'hhttps://docs.google.com/document/d/1CvLDK8cSuxz-Gv8-FjUjNHgIzv5Hhyuqz4PE1R7MqNk/edit?usp=sharing'; // Replace with your desired URL
    });
  } else {
    // Display error message for incorrect password
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = 'Incorrect password. Try again.';
  }
}

