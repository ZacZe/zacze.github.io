function themeToggler() { // toggles the theme 
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body; 
    const LIGHT_MODE = "light";
    const DARK_MODE = "dark";

    let savedTheme = localStorage.getItem("theme")

    console.log("Changing theme...");

    if ( savedTheme == LIGHT_MODE ) { // if saved as dark mode 
        body.classList.remove("light-mode");
        localStorage.setItem("theme", DARK_MODE);
        toggleButton.innerHTML = "Dark Mode"; 
    } else if (savedTheme == DARK_MODE ) { // if saved as light mode
        body.classList.add("light-mode");
        localStorage.setItem("theme", LIGHT_MODE);
        toggleButton.innerHTML = "Light Mode"; 
    } else { // if nothing valid saved 
        console.error("No theme saved. Defaulting to dark mode."); 
        body.classList.remove("light-mode");
        localStorage.setItem("theme", DARK_MODE);
        toggleButton.innerHTML = "Dark Mode";
    }

    console.log("Theme changed!"); 
}

function setThemeOnLoad() { // sets theme depending on the saved theme
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body; 
    const LIGHT_MODE = "light";
    const DARK_MODE = "dark";

    console.log("Applying saved theme...");
    body.style.transition = "none";

    let savedTheme = localStorage.getItem("theme");

    if ( savedTheme === LIGHT_MODE ) {
        body.classList.add("light-mode");
        toggleButton.innerHTML = "Dark Mode"; 
    } else if ( savedTheme === DARK_MODE ) {
        body.classList.remove("light-mode");
        toggleButton.innerHTML = "Light Mode"; 
    } else {
        console.error("No theme saved. Defaulting to dark mode."); 
        body.classList.remove("light-mode");
        localStorage.setItem("theme", DARK_MODE);
    }

    body.classList.remove("no-transition");

    setTimeout(() => { 
        body.style.transition = "";
    });

    console.log("Theme applied!");
}

function copyToClipboard() { // Copies value with specific ID to user's clipboard
    var text = document.getElementById("copyText");

    text.select();                    // for computers
    text.setSelectionRange(0, 99999); // for phones

    navigator.clipboard.writeText(text.value);
}
