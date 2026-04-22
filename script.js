document.addEventListener("DOMContentLoaded", function() {

    // --- FITUR NAVBAR SCROLL ---
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function() {
        // Jika layar di-scroll lebih dari 50 pixel ke bawah
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            // Jika kembali ke paling atas
            navbar.classList.remove("scrolled");
        }
    });
    
    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            
            filterBtns.forEach(b => b.classList.remove("active"));
            
            this.classList.add("active");
        });
    });
});