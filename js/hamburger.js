const hamburger = document.getElementById("hamburger");

const navButton = document.getElementById("navButton");

const headerNav = document.getElementById("headerNav");

hamburger.addEventListener(
  "click",
  () => {
    const expanded = hamburger.getAttribute("aria-expanded");
    if (expanded === "true") {
      hamburger.setAttribute("aria-expanded", "false");
      navButton.setAttribute("aria-expanded", "true");
      headerNav.setAttribute("aria-hidden", "true");
    }
  },
  false
);

navButton.addEventListener(
  "click",
  () => {
    const navButtonExpanded = navButton.getAttribute("aria-expanded");
    if (navButtonExpanded === "true") {
      hamburger.setAttribute("aria-expanded", "true");
      navButton.setAttribute("aria-expanded", "false");
      headerNav.setAttribute("aria-hidden", "false");
    }
  },
  false
);
