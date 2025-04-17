const hamburger = document.querySelector(".hamburger");  
const navMenu = document.querySelector(".nav-menu");  

hamburger.addEventListener("click", mobileMenu);  

function mobileMenu() {  
    hamburger.classList.toggle("active");  
    navMenu.classList.toggle("active");  
}  

// When we click on hamburger icon, it closes  
const navLink = document.querySelectorAll(".nav-link");  
navLink.forEach(n => n.addEventListener("click", closeMenu));  

function closeMenu() {  
    hamburger.classList.remove("active");  
    navMenu.classList.remove("active");  
}  

const hamBuger = document.querySelector(".hamburger");  
const linkContainer = document.querySelector(".links-container");  
const links = document.querySelector(".links");  

hamBuger.addEventListener("click", function () {  
   const containerHeight = linkContainer.getBoundingClientRect().height; // Fixed here  
   const linksHeight = links.getBoundingClientRect().height;  

   if (containerHeight === 0) {  
      linkContainer.style.height = `${linksHeight}px`;  
   } else {  
      linkContainer.style.height = 0;  
   }  
});  

const btns = document.querySelectorAll(".tab-btn");  
const about = document.querySelector(".about");  
const articles = document.querySelectorAll(".content");  

about.addEventListener("click", function (e) {  
    const id = e.target.dataset.id;  
    if (id) {  
        btns.forEach(function (btn) {  
            btn.classList.remove("active");  
        });  
        e.target.classList.add("active");   

        articles.forEach(function (article) {  
            article.classList.remove("active");  
        });  
        
        const element = document.getElementById(id);  
        if (element) {   
            element.classList.add("active");  
        }  
    }  
});  
