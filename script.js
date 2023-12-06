// ELEMENTS
const container = document.getElementById("container");
const play = document.getElementById("play");
const cursor = document.getElementById("cursor");
const images = document.querySelectorAll(".page4 .img-container");

// LOCOMOTIVE JS CODE

// LOADING ANIMATION
const loadAnimation = () => {
  const tl = gsap.timeline();

  tl.from("header", {
    y: -150,
    duration: 0.5,
  });

  tl.from(".page1 h1", {
    y: 150,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
  });

  tl.from(".page1 #container", {
    scale: 0.9,
    opacity: 0,
    duration: 0.5,
  });
};
loadAnimation();

// NAVBAR ANIMATION
const navAnim = () => {
  gsap.to(".logo svg", {
    transform: "translateY(-124%)",
    scrollTrigger: {
      trigger: ".page1",
      scroller: "body",
      start: "top 0",
      end: "top -8%",
      scrub: true,
    },
  });

  gsap.from(".logo svg", {
    transform: "translateY(-124%)",
    scrollTrigger: {
      trigger: ".page6",
      scroller: "body",
      start: "top 0",
      end: "top -8%",
      scrub: true,
    },
  });

  gsap.to("nav .links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: ".page1",
      scroller: "body",
      start: "top 0",
      end: "top -10%",
      scrub: true,
    },
  });
};
navAnim();

// PLAY BUTTON ANIMATION
const playAnimation = () => {
  document.addEventListener("mousemove", (det) => {
    gsap.to(play, {
      left: det.x,
      top: det.y,
    });
  });

  container.addEventListener("mouseenter", function () {
    gsap.to(play, {
      transform: "scale(1) translate(-50%, -50%)",
    });
  });

  container.addEventListener("mouseleave", function () {
    gsap.to(play, {
      transform: "scale(0)",
    });
  });
};
if (window.innerWidth > 600) playAnimation();

// CURSOR ANIMATION
const moveCursor = () => {
  document.addEventListener("mousemove", dets => {
    gsap.to(cursor, {
      left: dets.x,
      top: dets.y,
    });
  });

  images.forEach((img) => {
    img.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        transform: "scale(1) translate(-50%, -50%)",
      });
    });

    img.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        transform: "scale(0)",
      });
    });
  });
};
moveCursor();
