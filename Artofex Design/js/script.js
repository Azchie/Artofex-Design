window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-main');
    if (window.scrollY > 10) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
