function themeToggler() { // Toggles light or dark mode accordingly. 
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body; 

    let savedTheme = localStorage.getItem("theme");
    body.classList.toggle("light-mode"); // Turns on/off depending if off/on.

    if ( savedTheme == "dark" ) {
        localStorage.setItem("theme", "light");
        toggleButton.innerHTML = "Dark Mode"; 
    } else {
        localStorage.setItem("theme", "dark");
        toggleButton.innerHTML = "Light Mode"; 
    }
}

function copyToClipboard() { // Copies value with specific ID to user's clipboard
    var text = document.getElementById("copyText");

    text.select();                    // for computers
    text.setSelectionRange(0, 99999); // for phones

    navigator.clipboard.writeText(text.value);
}
