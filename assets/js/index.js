let parallax = document.getElementById("pl1");

let images = [
  "01_Mist.png",
  "02_Bushes.png",
  "03_Particles.png",
  "04_Forest.png",
  "05_Particles.png",
  "06_Forest.png",
  "07_Forest.png",
  "08_Forest.png",
  "09_Forest.png",
  "10_Sky.png",
];
let st = "";
images.forEach((image) => {
  st += `url(assets/img/bg/${image}),`;
});
st = st.substring(0, st.length - 2);
parallax.style.backgroundImage = st;

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  let nst = "";
  images.forEach((image) => {
    nst += `${offset * 0.2}px,`;
    offset *= 1.2;
  });
  nst = nst.substring(0, nst.length - 1);
  parallax.style.backgroundPositionY = nst;
});

window.addEventListener("mousemove", (e) => {
  let x = e.clientX / window.innerWidth;
  let nst = "";
  images.forEach((image) => {
    nst += `${x * 1000}px,`;
    x *= 1.1;
  });
  nst = nst.substring(0, nst.length - 1);
  parallax.style.backgroundPositionX = nst;
});

let menu = document.querySelector("#menu");
let nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("closed");
});

let egg = document.querySelector("#easterEggOverlay");
let questD = document.querySelector("#questD");

questD.addEventListener("click", () => {
  egg.style.display = "flex";
});
