const toggle = document.getElementById("themeToggle");

// Page load par saved theme check
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️";
}

// Button click
toggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️";
    } 
    else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙";
    }
});