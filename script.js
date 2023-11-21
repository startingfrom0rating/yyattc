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

    function handleCorrectPassword() {
      const enteredPassword = document.getElementById("passwordInput").value;
      if (enteredPassword === "Origins") {
        document.getElementById("passwordInput").style.display = "none";

        const grantedMessage = document.createElement("span");
        grantedMessage.textContent = "Access Granted.";
        grantedMessage.style.color = "green";
        grantedMessage.style.fontFamily = "Times New Roman, Times, serif";
        grantedMessage.style.fontSize = "24px";
        grantedMessage.style.animation = "flash-green 0.5s infinite";
        document.body.appendChild(grantedMessage);

        const redirectMessage = document.createElement("span");
        redirectMessage.textContent = "Redirecting to document...";
        redirectMessage.style.color = "green";
        redirectMessage.style.fontFamily = "Times New Roman, Times, serif";
        redirectMessage.style.fontSize = "24px";
        redirectMessage.style.animation = "flash-green 0.5s infinite";
        redirectMessage.style.marginTop = "10px";
        document.body.appendChild(redirectMessage);

        setTimeout(function() {
          grantedMessage.remove();
          redirectMessage.remove();
          const gif = document.createElement("img");
          gif.src = "ezgif-4-378bee2568.gif"; // Replace with the local path of your GIF
          gif.style.width = "200px"; // Adjust width if needed
          gif.style.height = "200px"; // Adjust height if needed
          document.body.appendChild(gif);

          setTimeout(function() {
            window.location.href = "https://docs.google.com/document/d/1CvLDK8cSuxz-Gv8-FjUjNHgIzv5Hhyuqz4PE1R7MqNk/edit";
          }, 5000); // Redirect after 5 seconds (adjust as needed)
        }, 500); // Wait 0.5 seconds before showing GIF and redirect messages
      } else {
        document.getElementById("errorMessage").textContent = "Incorrect, contact website owner.";
      }
    }

    document.getElementById("passwordInput").addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        handleCorrectPassword();
      }
    });

    document.querySelector("button").onclick = handleCorrectPassword;
  }
}

// Start typing animation when the page loads
window.onload = function() {
  typeWriter();
};
