let search = document.querySelector('.search');
let searchIcon = document.getElementById('search-icon');

searchIcon.onclick = () => {
    search.classList.toggle('active');
}



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu li a");

window.addEventListener("scroll", () => {
    let current = null; 

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; 
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (current && link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});




const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let count = parseInt(localStorage.getItem('cartCount')) || 0;
cartCount.textContent = count;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++; 
        cartCount.textContent = count;
        localStorage.setItem('cartCount', count);
    });
});
