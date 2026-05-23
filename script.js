document.addEventListener("DOMContentLoaded", function() {
    console.log("Selamat datang di Website Portofolio TIK - Radithya Javas Nararya (XI A4 / 17)");
    
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            console.log("Navigasi internal dipicu menuju halaman detail project.");
        });
    });

    const headerTitle = document.querySelector("header h1");
    if(headerTitle) {
        headerTitle.style.cursor = "pointer";
        headerTitle.addEventListener("click", function() {
            alert("Halo! Terima kasih sudah mengunjungi Portofolio TIK Radithya Javas Nararya Kelas XI A4.");
        });
    }
});