document.addEventListener("DOMContentLoaded", function() {

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
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
