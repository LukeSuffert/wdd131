const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    menu.classList.toggle('change');
});

// Close the menu when a link is clicked (for better UX)
nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        menu.classList.remove('change');
    }
});
