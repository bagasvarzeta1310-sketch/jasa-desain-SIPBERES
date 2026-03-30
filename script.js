// 1. Navbar Efek Scroll (Berubah warna saat di-scroll ke bawah)
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Mobile Menu Toggle (Buka tutup menu di HP)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu saat link diklik (khusus mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 3. Modern Scroll Reveal Animation menggunakan Intersection Observer
// Ini jauh lebih ringan dan mulus daripada menggunakan event listener 'scroll' biasa
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15, // Elemen akan muncul ketika 15% bagiannya terlihat di layar
    rootMargin: "0px 0px -50px 0px" // Trigger sedikit lebih cepat sebelum benar-benar masuk layar penuh
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target); // Berhenti mengobservasi setelah animasi selesai agar ringan
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
