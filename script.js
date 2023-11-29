const text = "Y.Y.A.C.C";
let index = 0;
let speed = 500; // Speed of typing animation in milliseconds

function typeWriter() {
  if (index < text.length) {
    document.querySelector(".typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("entryAnimation").style.display = "none";
    document.querySelector(".password-box").style.display = "block";

    // Redirect after confirming the password
    function redirectAfterPasswordConfirmation() {
      const enteredPassword = document.getElementById("passwordInput").value;
      if (enteredPassword === "Origins") {
        const gif = document.createElement("img");
        gif.src = "ezgif-4-378bee2568.gif"; // Replace with the local path of your GIF
        gif.style.width = "200px"; // Adjust width if needed
        gif.style.height = "200px"; // Adjust height if needed
        document.body.appendChild(gif);

        setTimeout(function() {
          window.location.href = "bit.ly/3N0VJL9";
        }, 2000); // Redirect after 5 seconds (adjust as needed)
      } else {
        document.getElementById("errorMessage").textContent = "Incorrect, contact website owner.";
      }
    }

    // Redirect after password check when Enter button is clicked
    document.getElementById("passwordInput").addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        redirectAfterPasswordConfirmation();
      }
    });

    document.querySelector("button").onclick = redirectAfterPasswordConfirmation;
  }
}

// Start typing animation when the page loads
window.onload = function() {
  typeWriter();
};
// this is a message
