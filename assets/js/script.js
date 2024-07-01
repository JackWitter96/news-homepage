document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.right-header-burger-menu');
    const headerText = document.querySelector('.right-header-text');
    const closeButton = document.querySelector('.header-button');
    const overlay = document.querySelector('.overlay');
    const breakpoint = 736;

    const closeMenu = () => {
        headerText.classList.remove('active');
        overlay.classList.remove('active');
    };

    burgerMenu.addEventListener('click', () => {
        headerText.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    closeButton.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    window.addEventListener('resize', () => {
        if (window.innerWidth >= breakpoint) {
            closeMenu();
        }
    });
});
