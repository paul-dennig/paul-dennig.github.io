// Check if localStorage is available
if (typeof(Storage) !== "undefined") {
    // Retrieve the user's preference from localStorage if available
    const preference = localStorage.getItem("preference");
    if (preference === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  
    // Add an event listener to the toggle button
    const toggleButton = document.querySelector("#toggle");
    if (toggleButton) {
      toggleButton.addEventListener("click", function() {
        // Toggle the theme
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        // Save the user's preference to localStorage
        localStorage.setItem("preference", newTheme);
      });
    } else {
      console.error("Toggle button not found");
    }
  } else {
    console.error("LocalStorage not supported");
  }
  