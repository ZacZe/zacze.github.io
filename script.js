function themeToggler() { // Toggles light or dark mode accordingly. 
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body; 
    body.classList.add("light-mode");

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("light-mode"); // Turns on/off depending if off/on.

        if ( body.classList.contains("light-mode") ) {
            toggleButton.innerHTML = "Dark Mode"; 
        } else {
            toggleButton.innerHTML = "Light Mode"; 
        }
    }); 
}

function copyToClipboard() { // Copies value with specific ID to user"s clipboard
    var text = document.getElementById("copyText");

    text.select();                    // for computers
    text.setSelectionRange(0, 99999); // for phones

    navigator.clipboard.writeText(text.value);
}
