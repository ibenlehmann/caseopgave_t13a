const burger = document.querySelector(".burger");
const nav = document.querySelector("header nav");

burger.addEventListener("click", burgerClick);

function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");

  const isOpen = nav.classList.contains("active");
  burger.setAttribute("aria-expanded", isOpen);
}
