const nuuFocus = document.querySelectorAll(".nuu");

const nuuUnder = (entries) => {
  entries.forEach((entry) => {
    const keyframe = {
      opacity: [0, 1],
      translate: ["0 150px", 0],
    };

    if (entry.isIntersecting) {
      entry.target.animate(keyframe, 1000);
      nuuObserver.unobserve(entry.target);
    }
  });
};

const nuuObserver = new IntersectionObserver(nuuUnder);

nuuFocus.forEach((nuuFocu) => {
  nuuObserver.observe(nuuFocu);
});
