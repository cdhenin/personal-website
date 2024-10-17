const OFFSET = 150;

function revealDecorationElements() {
    document.querySelectorAll(".title, .subtitle, .icon, .toggle").forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = OFFSET;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        } else if (element.classList.contains('toggle')) {
            element.classList.remove("active");
        }
    });

}
window.addEventListener("scroll", revealDecorationElements);

// To check the scroll position on page load
revealDecorationElements();
