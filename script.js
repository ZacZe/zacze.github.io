const themeToggle = document.getElementById('theme-toggle');
const body = Document.body; 

toggleButton.addEventListener('click', () => {
    if ( body.classList.toggle('dark-mode') ) { // if dark mode
        body.classList.toggle('light-mode')
    } else {
        body.classList.toggle('dark-mode')
    }
}); 