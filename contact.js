const hamburger = document.querySelector(".hamburger");  
const navMenu = document.querySelector(".nav-menu");  

hamburger.addEventListener("click", mobileMenu);  

function mobileMenu() {  
    hamburger.classList.toggle("active");  
    navMenu.classList.toggle("active");  

    // Here we also handle the height of the links  
    const linkContainer = document.querySelector(".links-container"); // Ensure this is selected correctly  
    const links = document.querySelector(".links");  

    const containerHeight = linkContainer.getBoundingClientRect().height; // Fix variable name  
    const linksHeight = links.getBoundingClientRect().height;  

    if (containerHeight === 0) {  
        linkContainer.style.height = `${linksHeight}px`; // Open the menu  
    } else {  
        linkContainer.style.height = 0; // Close the menu  
    }  
}  

// When we click on a nav link, it should also close the menu  
const navLink = document.querySelectorAll(".nav-link");  

navLink.forEach(n => n.addEventListener("click", closeMenu));  

function closeMenu() {  
    hamburger.classList.remove("active");  
    navMenu.classList.remove("active");  
    
    const linkContainer = document.querySelector(".links-container");  
    linkContainer.style.height = 0; // Close the menu  
}  







const items = [...document.querySelectorAll(".number")];  

const updatecount = (el) => {  
    const value = parseInt(el.dataset.value);  
    const increment = Math.ceil(value / 1000); // Change this if you need a different increment value  
    let initialValue = 0;  

    const increaseCount = setInterval(() => {  
        initialValue += increment;  

        if (initialValue >= value) {  
            el.textContent = `${value}+`;  
            clearInterval(increaseCount);  
            return;  
        }  

        el.textContent = `${initialValue}+`;  
    }, 1); // 1 millisecond interval, adjust as needed  
};  

items.forEach((item) => {  
    updatecount(item);  
});  





  
              





              



              
              
              
              document.addEventListener('DOMContentLoaded', function() {  
                  const form = document.getElementById('contactForm');  
              
                  form.addEventListener('submit', function(event) {  
                      event.preventDefault(); // Prevent the default form submission  
              
                      const name = form.name.value;  
                      const email = form.email.value;  
                      const message = form.message.value;  
              
                      // Basic form validation: Check if all fields are filled  
                      if (!name || !email || !message) {  
                          alert("Please fill all fields.");  
                          return;  
                      }  
              
                      // Create a FormData object from the form element  
                      const formData = new FormData(form);  
                      
                      // Use Fetch API to send the form data  
                      fetch('contact.php', {  
                          method: 'POST', // Send a POST request  
                          body: formData, // Attach the FormData object to the request  
                      })  
                      .then(response => {  
                          if (!response.ok) {  
                              throw new Error('Network response was not ok');  
                          }  
                          return response.text();  
                      })  
                      .then(data => {  
                          alert("Message sent successfully!"); // Notify user of success  
                          form.reset(); // Reset form fields  
                      })  
                      .catch(error => {  
                          console.error('Error:', error);  
                          alert("There was an error sending your message."); // Notify user of error  
                      });  
                  });  
              });
              