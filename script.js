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
["click", "touchstart"].forEach((evt) =>
  document.addEventListener(evt, function (e) {
    const touch = e.touches ? e.touches[0] : e;
    const circle = document.createElement("div");
    circle.classList.add("touch-circle");

    // ✅ Usamos pageX y pageY para que funcione con scroll
    circle.style.left = `${touch.pageX - 40}px`;
    circle.style.top = `${touch.pageY - 40}px`;

    const colors = ["#85a840", "#0cc0df", "#fcb045", "#ff6bcb"];
    circle.style.background = `radial-gradient(circle, ${
      colors[Math.floor(Math.random() * colors.length)]
    }88, transparent)`;

    document.body.appendChild(circle);
    setTimeout(() => circle.remove(), 800);
  })
);
