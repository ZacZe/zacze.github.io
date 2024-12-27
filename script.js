function themeToggler() { // Toggles light or dark mode accordingly. 
    const themeToggle = document.getElementById("theme-toggle");
    const body = Document.body; 

    themeToggle.addEventListener("click", () => {
        if ( body.classList.toggle("dark-mode") ) { // If dark mode, 
            body.classList.toggle("light-mode")     // turn to light mode.
        } else {                                    // Else if light mode, 
            body.classList.toggle("dark-mode")      // turn to dark mode.
        }
    }); 
}

function copyToClipboard(specified_ID) { // Copies value with specific ID to user"s clipboard
    var text = document.getElementById(specified_ID);

    text.select();                    // for computers
    text.setSelectionRange(0, 99999); // for phones

    navigator.clipboard.writeText(text.value);
}