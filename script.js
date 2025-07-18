ScrollReveal().reveal(".hero", {
  duration: 1000,
  origin: "top",
  distance: "50px",
});
ScrollReveal().reveal(".story", {
  duration: 1000,
  origin: "left",
  distance: "50px",
});
ScrollReveal().reveal(".menu", {
  duration: 1000,
  origin: "right",
  distance: "50px",
});
ScrollReveal().reveal(".weekly-promos", {
  duration: 1000,
  origin: "bottom",
  distance: "50px",
});
ScrollReveal().reveal(".events", {
  duration: 1000,
  origin: "bottom",
  distance: "50px",
});
ScrollReveal().reveal(".socials", {
  duration: 1000,
  origin: "bottom",
  distance: "50px",
});

window.addEventListener("scroll", function () {
  const btn = document.querySelector(".btn-ws-float");
  if (window.scrollY > 100) {
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
  } else {
    btn.style.opacity = "0";
    btn.style.pointerEvents = "none";
  }
});

