// ALL THEME FUNCTIONS 

function themeToggler() { // toggles the theme 
    //const toggleButton = document.getElementById("theme-toggle");
    const toggleIcon = document.getElementById("theme-icon"); 
    const body = document.body; 
    const LIGHT_MODE = "light";
    const DARK_MODE = "dark";
    var randomNum = Math.floor( Math.random() * 100) + 1;
    console.log(randomNum);

    let savedTheme = localStorage.getItem("theme")

    console.log("Changing theme...");

    toggleIcon.opacity = 0;

    if ( randomNum === 69 ) { // funny easter egg thing (1% chance or sumthn?) 
        body.classList.remove("light-mode");
        body.classList.add("crazy-mode");
        toggleIcon.src="images/linkedin-logo.png";
        toggleIcon.alt="??? Mode"; 
        //toggleButton.textContent = "??? Mode";
        console.log("???"); 
    } else {
        body.classList.remove("crazy-mode");
        
        if ( savedTheme === LIGHT_MODE ) { // if saved as light mode 
            body.classList.remove("light-mode");
            localStorage.setItem("theme", DARK_MODE);
            toggleIcon.src="images/sun.png";
            toggleIcon.alt="Light Mode"; 
            //toggleButton.textContent = "Light Mode"; 
        } else if (savedTheme === DARK_MODE ) { // if saved as dark mode
            body.classList.add("light-mode");
            localStorage.setItem("theme", LIGHT_MODE);
            toggleIcon.src="images/moon.png";
            toggleIcon.alt="Dark Mode"; 
            //toggleButton.textContent = "Dark Mode"; 
        } else { // if nothing valid saved 
            console.error("No theme saved. Defaulting to dark mode."); 
            body.classList.remove("light-mode");
            localStorage.setItem("theme", DARK_MODE);
            toggleIcon.src="images/sun.png";
            toggleIcon.alt="Light Mode"; 
            //toggleButton.textContent = "Dark Mode";
        }
    }

    toggleIcon.opacity = 1; 

    console.log("Theme changed!"); 
}

function setThemeOnLoad() { // sets theme depending on the saved theme
    //const toggleButton = document.getElementById("theme-toggle");
    const toggleIcon = document.getElementById("theme-icon"); 
    const body = document.body; 
    const LIGHT_MODE = "light";
    const DARK_MODE = "dark";

    console.log("Applying saved theme...");
    body.style.transition = "none";
    body.classList.add("no-transition");

    let savedTheme = localStorage.getItem("theme");

    if ( savedTheme === LIGHT_MODE ) {
        body.classList.add("light-mode");
        toggleIcon.opacity = 0;
        toggleIcon.src="images/moon.png"; 
        toggleIcon.alt="Dark Mode"; 
        toggleIcon.opacity = 1; 
        //toggleButton.textContent = "Dark Mode"; 
    } else if ( savedTheme === DARK_MODE ) {
        body.classList.remove("light-mode");
        toggleIcon.opacity = 0;
        toggleIcon.src="images/sun.png";
        toggleIcon.alt="Light Mode"; 
        toggleIcon.opacity = 1; 
        //toggleButton.textContent = "Light Mode"; 
    } else {
        console.error("No theme saved. Defaulting to dark mode."); 
        body.classList.remove("light-mode");
        toggleIcon.opacity = 0;
        toggleIcon.src="images/sun.png";
        toggleIcon.alt="Light Mode"; 
        toggleIcon.opacity = 1; 
        localStorage.setItem("theme", DARK_MODE);
    }

    body.offsetHeight; // Flush changes
    body.classList.remove("no-transition");

    setTimeout(() => { 
        toggleIcon.opacity = 1;
        body.style.transition = "";
        body.classList.remove("no-transition"), 1
    });

    console.log("Theme applied!");
}

// ALL PROJECT FILTER FUNCTIONS 

function projectFilter() { // Changes project filter, so displays specific projects. Depends on element ID. 
    const filterArr = ["all","completed","wip"]; 
    const filterButton = document.getElementById("filter-button"); 
    const projectSection = document.getElementById("project-section");

    projectSection.style.opacity = 0; 
    filterButton.style.opacity = 0; 
    console.log("Changing project filter...");

    setTimeout(() => { 
        if ( filterButton.value === filterArr[0] ) { // ALL
            // change value and text to COMPLETED
            filterButton.value = filterArr[1];
            filterButton.textContent = "Completed";

            // hide all but completed
            document.getElementById("projectWIP").style.display = "none";
            document.getElementById("projectC").style.display = "block";

            console.log("Displaying " + filterArr[1] + " projects! "); 
        } else if ( filterButton.value === filterArr[1] ) { // COMPLETED
            // change value and text to WIP
            filterButton.value = filterArr[2];
            filterButton.textContent = "Work In Progress";

            // hide all but WIPs
            document.getElementById("projectC").style.display = "none";
            document.getElementById("projectWIP").style.display = "block";

            console.log("Displaying " + filterArr[2] + " projects! "); 
        } else if ( filterButton.value === filterArr[2] ) { // WIP 
            // change value and text to ALL
            filterButton.value = filterArr[0];
            filterButton.textContent = "All";

            // hide nothing
            document.getElementById("projectWIP").style.display = "block";
            document.getElementById("projectC").style.display = "block";

            console.log("Displaying " + filterArr[0] + " projects!"); 
        } else { // if invalid filter somehow 
            console.error("Invalid initial filter (somehow?!). Defaulting to " + filterArr[0] + ". ");
            filterButton.value = filterArr[0];
            filterButton.textContent = "All";

            // hide nothing
            document.getElementById("projectWIP").style.display = "block";
            document.getElementById("projectC").style.display = "block";
            
            console.log("Displaying all projects!"); 
        }

        projectSection.style.opacity = 1; 
        filterButton.style.opacity = 1; 
    }, 500);
}

function copyToClipboard(val) { // Copies value with specific ID to user's clipboard [NOT WORKNG RN]
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