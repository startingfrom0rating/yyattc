const text = "Y.Y.A.C.C";
let index = 0;
let speed = 100; // Speed of typing animation in milliseconds

function typeWriter() {
  if (index < text.length) {
    document.querySelector(".typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("entryAnimation").style.display = "none";
    document.querySelector(".password-box").style.display = "block";

    // Display the GIF after the typing animation completes
    const gif = document.createElement("img");
    gif.src = "ezgif-4-378bee2568.gif"; // Replace with the local path of your GIF
    gif.style.width = "200px"; // Adjust width if needed
    gif.style.height = "200px"; // Adjust height if needed
    document.body.appendChild(gif);

    // Redirect after a delay following the GIF display
    setTimeout(function() {
      const enteredPassword = document.getElementById("passwordInput").value;
      if (enteredPassword === "Origins") {
        window.location.href = "https://docs.google.com/document/d/1CvLDK8cSuxz-Gv8-FjUjNHgIzv5Hhyuqz4PE1R7MqNk/edit";
      } else {
        document.getElementById("errorMessage").textContent = "Incorrect, contact website owner.";
      }
    }, 5000); // Redirect after 5 seconds (adjust as needed)
  }
}

// Start typing animation when the page loads
window.onload = function() {
  typeWriter();
};
