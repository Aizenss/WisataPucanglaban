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




var map = L.map('map').setView([-8.30703107541783, 112.02404839684093], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 50,
}).addTo(map);

// pantai pacar
var pantaiPacar  = L.marker([-8.30703107541783, 112.02404839684093]).addTo(map);
pantaiPacar.on('click', function(e) {
    L.popup()
        .setLatLng(e.latlng)
        .setContent('<div class="detail-maps"><img src="asset/pantai_pacar.jpeg" style="width: 300px; height:150px; border-radius:10px; object-fit:cover;" alt=""><div class="information-maps"><h3>Pantai pacar</h3><p>Area Perkebunan Dan P, Pucanglaban, Kec. Pucanglaban, Kabupaten Tulungagung, Jawa Timur.</p><a target="_blank" href="https://maps.app.goo.gl/3BgY34o3A53L55JA7" style="text-decoration:none; font-size: 15px; font-weight: 500; none; color: #618070;">Rute</a></div></div>')
        .openOn(map);
})

// pantai kelinci
var pantaiKelinci  = L.marker([-8.302046111891446, 112.01661199907831]).addTo(map);
pantaiKelinci.on('click', function(e) {
    L.popup()
        .setLatLng(e.latlng)
        .setContent('<div class="detail-maps"><img src="asset/pantai_kelinci.jpg" style="width: 300px; height:150px; border-radius:10px; object-fit:cover;" alt=""><div class="information-maps"><h3>Pantai Kelinci</h3><p>Area Perkebunan Dan P, Kabupaten, Kec. Pucanglaban, Kabupaten Tulungagung, Jawa Timur.</p><a target="_blank" href="https://maps.app.goo.gl/n79kR1emSDE19Djg8" style="text-decoration:none; font-size: 15px; font-weight: 500; color: #618070;">Rute</a></div></div>')
        .openOn(map);
});

// pantai glogok / salapan
var pantaiGlogok  = L.marker([-8.300384302586036, 112.00868982711545]).addTo(map);
pantaiGlogok.on('click', function(e) {
    L.popup()
        .setLatLng(e.latlng)
        .setContent('<div class="detail-maps"><img src="asset/pantai_glogok_salapan.jpg" style="width: 300px; height:150px; border-radius:10px; object-fit:cover;" alt=""><div class="information-maps"><h3>Pantai Glogok / Salapan</h3><p>Area Perkebunan Dan P, Pucanglaban, Kec. Pucanglaban, Kabupaten Tulungagung, Jawa Timur.</p><a target="_blank" href="https://maps.app.goo.gl/7Y7taAP8JCWQjbFs9" style="text-decoration:none; font-size: 15px; font-weight: 500; color: #618070;">Rute</a></div></div>')
        .openOn(map);
});

// pantai kedungtumpang
var pantaiKedungtumpang  = L.marker([-8.303329558365027, 112.01022936800912]).addTo(map);
pantaiKedungtumpang.on('click', function(e) {
    L.popup()
        .setLatLng(e.latlng)
        .setContent('<div class="detail-maps"><img src="asset/pantai_kedungtumpang.jpeg" style="width: 300px; height:150px; border-radius:10px; object-fit:cover;" alt=""><div class="information-maps"><h3>Pantai Kedungtumpang</h3><p>Area Perkebunan Dan P, Pucanglaban, Kec. Pucanglaban, Kabupaten Tulungagung, Jawa Timur.</p><a target="_blank" href="https://maps.app.goo.gl/wcvhZ2dBRrENbBRY6" style="text-decoration:none; font-size: 15px; font-weight: 500; color: #618070;">Rute</a></div></div>')
        .openOn(map);
});

// pantai arakan
var pantaiArakan  = L.marker([-8.31082818847693, 112.02596210848667]).addTo(map);
pantaiArakan.on('click', function(e) {
    L.popup()
        .setLatLng(e.latlng)
        .setContent('<div class="detail-maps"><img src="asset/pantai_arakan.jpg" style="width: 300px; height:150px; border-radius:10px; object-fit:cover;" alt=""><div class="information-maps"><h3>Pantai Arakan</h3><p>Area Perkebunan Dan P, Pucanglaban, Kec. Pucanglaban, Kabupaten Tulungagung, Jawa Timur.</p><a target="_blank" href="https://maps.app.goo.gl/84yxLmn19F7j8Ryb6" style="text-decoration:none; font-size: 15px; font-weight: 500; color: #618070;">Rute</a></div></div>')
        .openOn(map);
});

// pantai molang
var pantaiMolang  = L.marker([-8.312072969178386, 112.02790436880852]).addTo(map);
pantaiMolang.on('click', function(e) {
    L.popup()
        .setLatLng(e.latlng)
        .setContent('<div class="detail-maps"><img src="asset/pantai_molang.jpeg" style="width: 300px; height:150px; border-radius:10px; object-fit:cover;" alt=""><div class="information-maps"><h3>Pantai Molang</h3><p>Area Perkebunan Dan P, Pucanglaban, Kec. Pucanglaban, Kabupaten Tulungagung, Jawa Timur.</p><a target="_blank" href="https://maps.app.goo.gl/MPVyzk7ZXUHDsdV77" style="text-decoration:none; font-size: 15px; font-weight: 500; color: #618070;">Rute</a></div></div>')
        .openOn(map);
});

// pantai lumbung
var pantaiLumbung  = L.marker([-8.303782797873858, 112.02038111024528]).addTo(map);
pantaiLumbung.on('click', function(e) {
    L.popup()
        .setLatLng(e.latlng)
        .setContent('<div class="detail-maps"><img src="asset/pantai_lumbung.jpg" style="width: 300px; height:150px; border-radius:10px; object-fit:cover;" alt=""><div class="information-maps"><h3>Pantai Lumbung</h3><p>Pucanglaban, Kec. Pucanglaban, Kab. Tulungagung, Jawa Timur.</p><a target="_blank" href="https://maps.app.goo.gl/wUnxvVke3Mq7xwjF9" style="text-decoration:none; font-size: 15px; font-weight: 500; color: #618070;">Rute</a></div></div>')
        .openOn(map);
});
