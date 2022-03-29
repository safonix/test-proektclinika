// Burger - menu
const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');
const body = document.body;
const menuItems = menu.querySelectorAll('a'); 

burger.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger.classList.toggle('burger--active');
    menu.classList.toggle('menu--visible');
});

menuItems.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        burger.classList.remove('burger--active');
        menu.classList.remove('menu--visible');
    });
}); 
