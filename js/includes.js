function loadHTML(id, url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Could not load ${url}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
}

// Load external HTML parts
document.addEventListener("DOMContentLoaded", function() {
  loadHTML("header-placeholder", "header.html");
  loadHTML("contact-placeholder", "contact.html");
  loadHTML("footer-placeholder", "footer.html");
});
