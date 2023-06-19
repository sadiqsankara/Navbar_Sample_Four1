menubar = document.querySelector(".menubar");
menubar.addEventListener("click", () => {
  menu = document.querySelector(".menu");
  menu.classList.toggle("active");
});

menubar = document.querySelector(".dropdown");
menubar.addEventListener("click", () => {
  menu = document.querySelector(".menu3");
  menu.classList.toggle("active");
});
