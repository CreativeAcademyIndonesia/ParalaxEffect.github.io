// Tangkap Element Menggunakan DOM

let LastImg = document.getElementsByClassName("last-img")[0];
let MidImg = document.getElementsByClassName("mid-img")[0];
let BirdImg = document.getElementsByClassName("bird-img")[0];
let FocusImg = document.getElementsByClassName("focus-img")[0];
let LeafImg = document.getElementsByClassName("leaf-img")[0];
let Traveling = document.querySelector("#landing h1");
let btn = document.querySelector('.btn');

// console.log(Traveling);
// Coba Console apa yang di tangkap
// Apa yang di hasilkan class

// Tambahkan Events, 
// Merubah position secara perlahan dengan kecepatan yang berbeda.
window.addEventListener('scroll', function () {
    // Ambil scrtoll y
    let value = window.scrollY;
    // Lalu console

    // Ubah position
    BirdImg.style.left = value * 0.9 + 'px';
    BirdImg.style.top = value * 0.7 + 'px';

    LastImg.style.top = value * 0.75 + 'px';
    MidImg.style.top = value * 0.3 + 'px';

    FocusImg.style.top = value * 0 + 'px';

    LeafImg.style.left = value * 1 + 'px';
    Traveling.style.right = value * 0.5 + 'px';
    btn.style.marginTop = value * 0.1 + 'px';

})