function themeToggler() { // Toggles light or dark mode accordingly. 
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body; 

    const LIGHT_MODE = "light";
    const DARK_MODE = "dark";

    body.classList.toggle("light-mode"); // Turns on/off depending if off/on.

    changeTheme();
}

function changeTheme() {
    let savedTheme = localStorage.getItem("theme");

    if ( savedTheme == DARK_MODE ) {
        localStorage.setItem("theme", LIGHT_MODE);
        toggleButton.innerHTML = "Dark Mode"; 
    } else {
        localStorage.setItem("theme", DARK_MODE);
        toggleButton.innerHTML = "Light Mode"; 
    }
}

function copyToClipboard() { // Copies value with specific ID to user's clipboard
    var text = document.getElementById("copyText");

    text.select();                    // for computers
    text.setSelectionRange(0, 99999); // for phones

    navigator.clipboard.writeText(text.value);
}
