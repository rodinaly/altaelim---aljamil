 
        function toggleMenu() {  
            const menu = document.querySelector('.list');  
            const menuBtn = document.querySelector('.menu-btn');  
            menu.classList.toggle('active'); 
            menuBtn.classList.toggle('active');  
}
      



// الحصول على الزر
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// إظهار الزر عند التمرير للأسفل
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// إعادة الصفحة إلى الأعلى عند النقر على الزر
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
