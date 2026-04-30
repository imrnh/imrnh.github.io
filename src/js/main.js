(function () {
  const hamburger = document.getElementById("nav-hamburger");
  const navLinks = document.getElementById("nav-links");
  
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      const isOpen = hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", isOpen);
      hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Open menu");
      });
    });
  }
})();

(function () {
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("theme");
  
  // Default to dark mode strongly, regardless of system preference, unless previously changed by user
  if (storedTheme) {
    root.setAttribute("data-theme", storedTheme);
  } else {
    root.setAttribute("data-theme", "dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const newTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      themeToggle.textContent = newTheme === "dark" ? "☀" : "☾";
    });

    // Set initial icon
    themeToggle.textContent = root.getAttribute("data-theme") === "dark" ? "☀" : "☾";
  }
})();
