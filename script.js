function changeThemeSaved() {
    const toggleButton = document.getElementById("theme-toggle");
    const LIGHT_MODE = "light";
    const DARK_MODE = "dark";

    let savedTheme = localStorage.getItem("theme");

    if ( savedTheme == DARK_MODE ) {
        localStorage.setItem("theme", LIGHT_MODE);
        toggleButton.innerHTML = "Dark Mode"; 
    } else if ( savedTheme == LIGHT_MODE ) {
        localStorage.setItem("theme", DARK_MODE);
        toggleButton.innerHTML = "Light Mode"; 
    }
}

function setThemeSaved() {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body; 
    const LIGHT_MODE = "light";
    const DARK_MODE = "dark";

    body.classList.add("no-transition");
    body.classList.remove("light-mode");
    body.classList.add("light-mode");
    body.classList.remove("no-transition");

    let savedTheme = localStorage.getItem("theme");

    if ( savedTheme == DARK_MODE ) {
        body.classList.toggle("light-mode");
        toggleButton.innerHTML = "Dark Mode"; 
    } else if ( savedTheme == LIGHT_MODE ) {
        toggleButton.innerHTML = "Light Mode"; 
    } 
}

function themeToggler() { // Toggles light or dark mode accordingly. 
    const body = document.body; 

    body.classList.add("no-transition");
    body.classList.toggle("light-mode"); // Turns on/off if previously off/on. 
    body.classList.remove("no-transition");


    changeThemeSaved();
}

function copyToClipboard() { // Copies value with specific ID to user's clipboard
    var text = document.getElementById("copyText");

    text.select();                    // for computers
    text.setSelectionRange(0, 99999); // for phones

    navigator.clipboard.writeText(text.value);
}
