const load = document.querySelector(".c_load");
const green = document.querySelector(".c_load__green");
const loadText = document.querySelector(".c_load__text");

window.addEventListener("load", () => {
  load.animate(
    {
      visibility: "hidden",
      opacity: [1, 0],
    },
    {
      delay: 1200,
      duration: 1000,
      fill: "forwards",
    }
  );
  green.animate(
    {
      top: ["100vh", "-100vh"],
    },
    {
      delay: 800,
      duration: 2000,
      easing: "ease",
      fill: "forwards",
    }
  );
  loadText.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: 1300,
      fill: "forwards",
    }
  );
});
