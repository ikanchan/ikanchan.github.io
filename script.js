document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("formMsg").textContent = "Please fill all fields.";
    return;
  }

  document.getElementById("formMsg").textContent = "Message sent! Thanks for connecting.";

  // Reset form (you can also integrate Formspree or EmailJS to send real emails)
  this.reset();
});
