const menuDropdown = document.querySelector(".nav-menu__dropdown");
const navMenu = document.querySelector(".nav-menu__list");

const toggleDropdown = ({target}) => {
  target.classList.toggle('active');
  navMenu.classList.toggle('active');
}

menuDropdown.addEventListener('click', toggleDropdown);