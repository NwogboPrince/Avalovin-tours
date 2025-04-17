

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









const months = [
    "January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date ();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2025, 2, 26, 11, 33, 0);

const futureDate = new Date(tempYear, tempMonth,tempDay + 25, 11, 40, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Ticket discount ends on ${weekday}, ${date} ${month} ${year} ${hours}: ${minutes}am`;



const futureTime = futureDate.getTime();


function getRemainingTime () {
    const today = new Date().getTime();
    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    //1hr = 60mins
    // 1d = 24hr

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinutes = 60 * 1000;
    // calculate all values 
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinutes);
    let seconds = Math.floor((t % oneMinutes) / 1000);

    //SET VALUES ARRAY 
    const values = [days , hours,minutes,seconds];

    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });
    if(t <0 ) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this discount has expired</h4>`;
    }
}
// countdown
let countdown = setInterval(getRemainingTime,1000);

getRemainingTime ();











document.addEventListener('DOMContentLoaded', function() {  
    const countdownElement = document.getElementById('countdown');  
    const form = document.getElementById('ticketForm');  
    let timeLeft = 90; // Countdown time in seconds  

    // Countdown function  
    const countdown = setInterval(function() {  
        if (timeLeft <= 0) {  
            clearInterval(countdown);  
            countdownElement.innerHTML = "Time's up!";  
            form.querySelector('button').disabled = true; // Disable button  
        } else {  
            countdownElement.innerHTML = `${timeLeft} seconds remaining`;  
        }  
        timeLeft -= 1;  
    }, 1000);  

    // Handle form submission  
    form.onsubmit = function(event) {  
        event.preventDefault(); // Prevent the form from submitting  
        const name = document.getElementById('name').value;  
        const email = document.getElementById('email').value;  

        document.getElementById('message').textContent = `Thank you, ${name}! Your ticket has been registered with the email: ${email}.`;  
        form.reset();  
        countdownElement.innerHTML = ""; // Clear countdown  
    };  
}); 

