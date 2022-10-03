const toggleBtn = document.querySelector('.hmg');
const navbar = document.querySelector('.navlinks');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
});
window.addEventListener('scroll', () => navbar.classList.remove('show-nav'));