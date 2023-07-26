const OFFSET = 150;

function revealHiddenElements() {
    document.querySelectorAll(".reveal").forEach((element) => {
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
window.addEventListener("scroll", revealHiddenElements);

// To check the scroll position on page load
revealHiddenElements();
