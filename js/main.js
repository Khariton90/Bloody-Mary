const menuDropdown = document.querySelector(".nav-menu__dropdown");
const navMenu = document.querySelector(".nav-menu__list");
const headerNav = document.querySelector(".nav");
const headerBurger = document.querySelector(".header__burger");
const header = document.querySelector(".header");
const progressList = document.querySelector(".progress-list");
const progressItems = document.querySelectorAll(".progress-item");

const SCROLL_DISTANCE = 120;

const changeHeaderBg = () => {
  let scrollDistance = window.scrollY;
  scrollDistance > SCROLL_DISTANCE ? header.classList.add("active") : header.classList.remove("active");
}
document.addEventListener("scroll", changeHeaderBg);

const toggleDropdown = ({target}) => {
  target.classList.toggle('active');
  navMenu.classList.toggle('active');
};

menuDropdown.addEventListener('click', toggleDropdown);

const toggleMobileMenu = () => {
  if (headerNav.classList.contains('active')) {
    headerNav.classList.remove('active');
  } else {
    headerNav.classList.add('active');
  }
};

headerBurger.addEventListener('click', toggleMobileMenu);