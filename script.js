const menu = document.getElementById('menu');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Mencegah klik pada tombol menutup menu
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        // Mengubah ikon menjadi hamburger saat menu disembunyikan
        toggleBtn.innerHTML = `
                <i class="fa-solid fa-bars text-lg text-black"></i>
                `;
    } else {
        // Mengubah ikon menjadi silang saat menu ditampilkan
        toggleBtn.innerHTML = `
                <i class="fa-solid fa-xmark text-lg text-black"></i>
                `;
    }
});

// Menutup menu saat mengklik di luar menu
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
        menu.classList.add('hidden');
        toggleBtn.innerHTML = `
                <i class="fa-solid fa-bars text-lg text-black"></i>
                `;
    }
});

// Mencegah event click pada menu itu sendiri menutup menu
menu.addEventListener('click', (event) => {
    event.stopPropagation();
});
