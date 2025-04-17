
              const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const hamBuger = document.querySelector(".hamburger");
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

hamBuger.addEventListener("click", function (){
   const containerHeight = linksContainer.getBoundingClientRect().height;
   const linksHeight = links.getBoundingClientRect().height;

   if (containerHeight === 0) {
      linksContainer.style.height = `${linksHeight}px`;
   } else {
      linkContainer.style.height = 0;
   }
});



              // *** set date *****
              const date = document.getElementById('date');
              date.innerHTML = new Date().getFullYear();
             


              