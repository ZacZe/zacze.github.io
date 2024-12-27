function themeToggler() { // Toggles light or dark mode accordingly. 
    const themeToggle = document.getElementById("theme-toggle");
    const body = Document.body; 

    themeToggle.addEventListener("click", () => {
        if ( body.classList.toggle("dark-mode") ) { // If dark mode, 
            body.classList.remove("dark-mode");     // remove dark mode, 
            body.classList.add("light-mode")        // add light mode. 
        } else {                                    // Else if light mode, 
            body.classList.remove("light-mode");    // remove light mode, 
            body.classList.add("dark-mode")         // add dark mode. 
        }
    }); 
}

function copyToClipboard(specified_ID) { // Copies value with specific ID to user"s clipboard
    var text = document.getElementById(specified_ID);

    text.select();                    // for computers
    text.setSelectionRange(0, 99999); // for phones

    navigator.clipboard.writeText(text.value);
}