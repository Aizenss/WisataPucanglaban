const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const navLinksLiA = document.querySelectorAll('.nav-links li a');
const sections = document.querySelectorAll('section');

function changeActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 60 < sections[index].offsetTop) {
    }

    navLinksLiA.forEach((link) => link.classList.remove('active'));
    navLinksLiA[index].classList.add('active');
}

window.addEventListener('scroll', changeActiveLink);
