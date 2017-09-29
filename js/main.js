// On document ready.
document.addEventListener("DOMContentLoaded", function(event) {
  // Get query params as string.
  var searchParams = new URLSearchParams(window.location.search);

  // Check if form param exists.
  if (searchParams.get("form") !== null) {

    // Get message element and add show class.
    const message = document.getElementById('message');
    if (message) {
      message.classList.add('show');

      // Remove show class after 5 seconds.
      setTimeout(function() {
        message.classList.remove('show');
      }, 5000);
    }
  }
});
