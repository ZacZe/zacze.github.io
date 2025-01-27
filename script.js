function themeToggler() { // toggles the theme 
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body; 
    const LIGHT_MODE = "light";
    const DARK_MODE = "dark";

    let savedTheme = localStorage.getItem("theme")

    console.log("Changing theme...");

    if ( savedTheme === LIGHT_MODE ) { // if saved as light mode 
        body.classList.remove("light-mode");
        localStorage.setItem("theme", DARK_MODE);
        toggleButton.textContent = "Light Mode"; 
    } else if (savedTheme === DARK_MODE ) { // if saved as dark mode
        body.classList.add("light-mode");
        localStorage.setItem("theme", LIGHT_MODE);
        toggleButton.textContent = "Dark Mode"; 
    } else { // if nothing valid saved 
        console.error("No theme saved. Defaulting to dark mode."); 
        body.classList.remove("light-mode");
        localStorage.setItem("theme", DARK_MODE);
        toggleButton.textContent = "Dark Mode";
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
    body.classList.add("no-transition");

    let savedTheme = localStorage.getItem("theme");

    if ( savedTheme === LIGHT_MODE ) {
        body.classList.add("light-mode");
        toggleButton.textContent = "Dark Mode"; 
    } else if ( savedTheme === DARK_MODE ) {
        body.classList.remove("light-mode");
        toggleButton.textContent = "Light Mode"; 
    } else {
        console.error("No theme saved. Defaulting to dark mode."); 
        body.classList.remove("light-mode");
        localStorage.setItem("theme", DARK_MODE);
    }

    body.offsetHeight; // Flush changes
    body.classList.remove("no-transition");

    setTimeout(() => { 
        body.style.transition = "";
        body.classList.remove("no-transition"), 1
    });

    console.log("Theme applied!");
}

function copyToClipboard(val) { // Copies value with specific ID to user's clipboard
    var tmp1 = document.createElement("temp"); 
    tmp1.setAttribute('id', 'toCopy'); 
    tmp1.value = val; 

    tmp2 = document.getElementById('toCopy'); 

    tmp2.select();                    // for computers
    tmp2.setSelectionRange(0, 99999); // for phones

    navigator.clipboard.writeText(tmp2.value); 

    tmp1.remove(); 
}

function fadeout(url) { // Fades out the page and redirects to the URL
    const body = document.body; 

    console.log("Fading out now... ");
    body.style.transition = "opacity 0.1s ease";
    body.style.opacity = 0;

    setTimeout(() => {
        console.log("Redirecting to " + url); 
        window.location.href = url;
    }, 100);
}

function fadein() {
    const body = document.body; 

    console.log("Fading in now... ");
    body.style.transition = "opacity 0.1s ease";

    setTimeout(() => {
        body.style.opacity = 1
    }, 100);
}

function fadeAndThemeSet() {
    setThemeOnLoad(); 
    fadein(); 
}