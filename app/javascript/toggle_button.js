document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.openbtn');
  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }
});