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

// ALL PROJECT FUNCTIONS 

/* 
document.addEventListener("readMoreLess", function(){
    var text = document.getElementsByClassName("projectDetails");

    for (let i = 0; i < text.length; i++) {
        text[i].addEventListener("click", function() {
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    }
}); */

document.addEventListener("DOMContentLoaded", function() { // Shows and hides project content depending on title clicks 
    const titles = document.getElementsByClassName("projectTitle");

    for (let i = 0; i < titles.length; i++) {
        titles[i].addEventListener("click", function() {
            var content = this.nextElementSibling;
            if (content.style.maxHeight === content.scrollHeight + "px") {
                content.style.maxHeight = "0px"; 
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; 
            } 
        });
    }
});

function projectFilterStatus() { // Changes project filter, so displays specific projects. Depends on element ID. 
    const filterArr = ["all","completed","wip"]; 
    const filterButton = document.getElementById("filter-button"); 
    const projectSection = document.getElementById("project-section");

    filterButton.disabled = true; 
    projectSection.style.opacity = 0; 
    filterButton.style.opacity = 0; 
    console.log("Changing project filter...");

    setTimeout(() => { 
        if ( filterButton.value === filterArr[0] ) { // ALL --> COMPLETED
            // change value and text to COMPLETED
            filterButton.value = filterArr[1];
            filterButton.textContent = "Completed";

            // hide all but completed
            const hideSelected = document.querySelectorAll(".projectWIP")
            const showSelected = document.querySelectorAll(".projectC")

            hideSelected.forEach((projectWIP) => {
                projectWIP.style.display = "none"; 
            });

            showSelected.forEach((projectC) => {
                projectC.style.display = "block";
            }); 

            console.log("Displaying " + filterArr[1] + " projects! "); 
        } else if ( filterButton.value === filterArr[1] ) { // COMPLETED --> WIP 
            // change value and text to WIP
            filterButton.value = filterArr[2];
            filterButton.textContent = "Work In Progress";

            // hide all but WIPs
            const hideSelected = document.querySelectorAll(".projectC")
            const showSelected = document.querySelectorAll(".projectWIP")

            hideSelected.forEach((projectC) => {
                projectC.style.display = "none"; 
            });

            showSelected.forEach((projectWIP) => {
                projectWIP.style.display = "block";
            }); 

            console.log("Displaying " + filterArr[2] + " projects! "); 
        } else if ( filterButton.value === filterArr[2] ) { // WIP --> ALL
            // change value and text to ALL
            filterButton.value = filterArr[0];
            filterButton.textContent = "All";

            // hide nothing
            const showSelected = document.querySelectorAll(".projectWIP, .projectC")

            showSelected.forEach((projectAll) => {
                projectAll.style.display = "block"; 
            });

            console.log("Displaying " + filterArr[0] + " projects!"); 
        } else { // if invalid filter somehow 
            console.error("Invalid initial filter (somehow?!). Defaulting to " + filterArr[0] + ". ");
            filterButton.value = filterArr[0];
            filterButton.textContent = "All";

            // hide nothing
            const showSelected = document.querySelectorAll(".projectWIP, .projectC")

            showSelected.forEach((projectAll) => {
                projectAll.style.display = "block"; 
            });
            
            console.log("Displaying all projects!"); 
        }

        projectSection.style.opacity = 1; 
        filterButton.style.opacity = 1; 
    }, 500);

    filterButton.disabled = false; 
}

/*
function projectFilterType() { // Changes project filter, so displays specific projects. Depends on element ID. 
    const filterArr = ["all","hardware","software"]; 
    const filterButton = document.getElementById("filter-type"); 
    const projectSection = document.getElementById("project-section");

    projectSection.style.opacity = 0; 
    filterButton.style.opacity = 0; 
    console.log("Changing project filter...");

    setTimeout(() => { 
        if ( filterButton.value === filterArr[0] ) { // ALL --> HARDWARE
            // change value and text to HARDWARE
            filterButton.value = filterArr[1];
            filterButton.textContent = "Hardware";

            // hide all but hardware
            const hideSelected = document.querySelectorAll(".projectSW")
            const showSelected = document.querySelectorAll(".projectHW")

            hideSelected.forEach((projectSW) => {
                projectSW.style.display = "none"; 
            });

            showSelected.forEach((projectHW) => {
                projectHW.style.display = "block";
            }); 

            console.log("Displaying " + filterArr[1] + " projects! "); 
        } else if ( filterButton.value === filterArr[1] ) { // HARDWARE --> SOFTWARE 
            // change value and text to SOFTWARE
            filterButton.value = filterArr[2];
            filterButton.textContent = "Software";

            // hide all but software
            const hideSelected = document.querySelectorAll(".projectHW")
            const showSelected = document.querySelectorAll(".projectSW")

            hideSelected.forEach((projectHW) => {
                projectHW.style.display = "none"; 
            });

            showSelected.forEach((projectSW) => {
                projectSW.style.display = "block";
            }); 

            console.log("Displaying " + filterArr[2] + " projects! "); 
        } else if ( filterButton.value === filterArr[2] ) { // SOFTWARE --> ALL
            // change value and text to ALL
            filterButton.value = filterArr[0];
            filterButton.textContent = "All";

            // hide nothing
            const showSelected = document.querySelectorAll(".projectSW, .projectHW")

            showSelected.forEach((projectAll) => {
                projectAll.style.display = "block"; 
            });

            console.log("Displaying " + filterArr[0] + " projects!"); 
        } else { // if invalid filter somehow 
            console.error("Invalid initial filter (somehow?!). Defaulting to " + filterArr[0] + ". ");

            // change value and text to ALL
            filterButton.value = filterArr[0];
            filterButton.textContent = "All";

            // hide nothing
            const showSelected = document.querySelectorAll(".projectSW, .projectHW")

            showSelected.forEach((projectAll) => {
                projectAll.style.display = "block"; 
            });

            console.log("Displaying " + filterArr[0] + " projects!"); 
        }

        projectSection.style.opacity = 1; 
        filterButton.style.opacity = 1; 
    }, 500);
} */

// ALL OPTIONAL FUNCTIONS 

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

// ALL FADE FUNCTIONS 

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