document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks, Favour will get back to you shortly!");
  this.reset();
});