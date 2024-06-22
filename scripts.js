document.addEventListener("DOMContentLoaded", function() {
    // Load the common navbar
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        });
});
