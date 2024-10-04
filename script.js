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




var map = L.map('map').setView([-8.253474758878037, 112.01291617847129], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
}).addTo(map);

var marker = L.marker([-8.26258374208626, 112.0164036604159]).addTo(map);