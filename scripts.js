document.addEventListener("DOMContentLoaded", function() {
    // Load the common navbar
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Highlight the active menu item
            const currentLocation = location.href;
            const menuItem = document.querySelectorAll('nav ul li a');
            const menuLength = menuItem.length;
            for (let i = 0; i < menuLength; i++) {
                if (menuItem[i].href === currentLocation) {
                    menuItem[i].className = "active";
                }
            }
        });
});
