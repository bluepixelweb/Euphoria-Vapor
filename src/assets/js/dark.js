

//
//    The Dark Mode System
//

/* Body and Toggle */
var body = document.querySelector("body");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// Get Status of Dark Mode
let darkMode = sessionStorage.getItem("darkMode");

// Enable Dark Mode
const enableDarkMode = () => {
  body.classList.add("dark-mode");
}

// Disable Dark mode
const disableDarkMode = () => {
  body.classList.remove("dark-mode");
}

// Check the state of dark mode in session storage
if (darkMode == "enabled") {
  enableDarkMode();
} else {
    disableDarkMode();
}

const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
darkModePreference.addEventListener("change", function(event) {
  if (event.matches) {
    enableDarkMode();
    sessionStorage.setItem("darkMode", "enabled")
  } else {
    disableDarkMode();
    sessionStorage.setItem("darkMode", null)
  }
});

// Add event listener to the dark mode button toggle
darkModeToggle.addEventListener('click', () => {
  darkMode = sessionStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    sessionStorage.setItem("darkMode", "enabled")
  } else {
    disableDarkMode();
    sessionStorage.setItem("darkMode", null)
  }
});

darkModePreference.removeEventListener("change", function(event){});
