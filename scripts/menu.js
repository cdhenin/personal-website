const NAVBAR_HEIGHT = 62;

function toggleMenu() {
    document.querySelector("nav > ul").classList.toggle('visible');
    document.querySelector('nav').classList.add('scroll');
}

function toggleNavbarScrollClass() {
    const nav = document.querySelector('nav');

    (window.scrollY >= NAVBAR_HEIGHT) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
}

function setActiveClassOnMenuItems() {
    const fromTop = Math.ceil(window.scrollY);
    if (fromTop >= window.scrollMaxY) {
        document.querySelector(`a[href='#contact']`).parentElement.classList.add('active');
        document.querySelectorAll('nav ul li a:not([href=\'#contact\'])').forEach((section) => {
            section.parentElement.classList.remove('active')
        })
        return;
    }
    document.querySelectorAll('nav ul li a').forEach((link) => {
        const anchor = document.querySelector(link.hash);
        if (anchor) {
            const section = anchor.offsetParent;
            const visualOffset = parseInt(anchor.dataset.extraSpace || 0, 10) + NAVBAR_HEIGHT;
            const currentPositionTop = fromTop + visualOffset;
            const currentPositionBottom = section.offsetTop + section.offsetHeight - visualOffset;

            if (section.offsetTop <= currentPositionTop && currentPositionBottom > fromTop) {
                return link.parentElement.classList.add('active');
            }
            link.parentElement.classList.remove('active');
        }
    });
}

function hideMobileMenu() {
    document.querySelector('nav > ul').classList.remove('visible');
}

window.addEventListener('scroll', toggleNavbarScrollClass);
window.addEventListener('scroll', setActiveClassOnMenuItems);
window.addEventListener('scroll', hideMobileMenu);
document.getElementById('toggleMenuButton').addEventListener('click', toggleMenu);
