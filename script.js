function themeToggler() { // toggles the theme 
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body; 
    const LIGHT_MODE = "light";
    const DARK_MODE = "dark";

    let savedTheme = localStorage.getItem("theme")

    if ( savedTheme == LIGHT_MODE ) { // if saved as dark mode 
        body.classList.remove("light-mode");
        localStorage.setItem("theme", DARK_MODE);
        toggleButton.innerHTML = "Dark Mode"; 
    } else { // if saved as light mode or modified 
        body.classList.add("light-mode");
        localStorage.setItem("theme", LIGHT_MODE);
        toggleButton.innerHTML = "Light Mode"; 
    } 
}

function setThemeOnLoad() { // sets theme depending on the saved theme
    document.addEventListener("DOMContentLoaded", () => {
        const toggleButton = document.getElementById("theme-toggle");
        const body = document.body; 
        const LIGHT_MODE = "light";
        const DARK_MODE = "dark";

        body.classList.add("no-transition");

        let savedTheme = localStorage.getItem("theme");

        if ( savedTheme == LIGHT_MODE ) {
            body.classList.add("light-mode");
            toggleButton.innerHTML = "Dark Mode"; 
        } else {
            body.classList.remove("light-mode");
            toggleButton.innerHTML = "Light Mode"; 
        } 

        body.classList.remove("no-transition");

        setTimeout(() => body.classList.remove("no-transition"), 100);
    });
}

function copyToClipboard() { // Copies value with specific ID to user's clipboard
    var text = document.getElementById("copyText");

    text.select();                    // for computers
    text.setSelectionRange(0, 99999); // for phones

    navigator.clipboard.writeText(text.value);
}
