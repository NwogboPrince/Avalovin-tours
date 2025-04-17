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


function selectDestination(destination, price) {  
    document.getElementById('selected-destination').textContent = `You have selected ${destination} for $${price}.`;  
    document.getElementById('registration-form').style.display = 'block';  
}  

function processPayment(event) {  
    event.preventDefault(); // Prevent form submission  
    document.getElementById('registration-form').style.display = 'none'; // Hide form  
    document.getElementById('congratulations').style.display = 'block'; // Show congratulatory message  
} 

// SELECT ITEMS   
const alert = document.querySelector(".alert");  
const form = document.querySelector(".grocery-form");  
const grocery = document.getElementById("grocery"); // Corrected  
const submitBtn = document.querySelector(".submit-btn");  
const container = document.querySelector(".grocery-container");  
const list = document.querySelector(".grocery-list");  
const clearBtn = document.querySelector(".clear-btn");  

// edit option  
let editElement;  
let editFlag = false;  
let editID = "";  

//***********EVENT LISTENERS */  
// SUBMIT FORM  
form.addEventListener("submit", addItem);  
// clear items  
clearBtn.addEventListener("click", clearItems);  
// load items  
window.addEventListener("DOMContentLoaded", setupItems);  

// FUNCTIONS****  
function addItem(e) {  
    e.preventDefault();  
    const value = grocery.value;  

    const id = new Date().getTime().toString(); // Corrected  
    if (value && !editFlag) {  
        createlistItem(id, value);  
      
        // display alert   
        displayAlert("item added to the list", "success"); // Corrected  
        // show container  
        container.classList.add("show-container");  
        // add to local storage   
        addToLocalStorage(id, value);  
        // set back to default   
        setBackToDefault();  

    } else if (value && editFlag) {  
        editElement.innerHTML = value;  
        displayAlert("value changed", "success"); // Corrected  
        // edit local storage  
        editLocalStorage(editID, value);  
        setBackToDefault();  

    } else {  
        displayAlert("Please Enter Value", "danger");  
    }  
}  

// display alert   
function displayAlert(text, action) {  
    alert.textContent = text;  
    alert.classList.add(`alert-${action}`);  

    // remove alert  
    setTimeout(function() {  
        alert.textContent = '';  
        alert.classList.remove(`alert-${action}`);  
    }, 1000);  
}  

// clear items  
function clearItems() {  
    const items = document.querySelectorAll(".grocery-item");  

    if (items.length > 0) {  
        items.forEach(function(item) {  
            list.removeChild(item);  
        });  
    }  
    container.classList.remove("show-container");  
    displayAlert("empty list", "danger");  
    setBackToDefault();  
    localStorage.removeItem("list");  
}  

// delete function  
function deleteItem(e) {  
    const element = e.currentTarget.parentElement.parentElement;  
    const id = element.dataset.id;  
    list.removeChild(element);  
    if (list.children.length === 0) {  
        container.classList.remove("show-container");  
    }  
    displayAlert("item removed", "danger");  
    setBackToDefault();  
    // remove from local storage  
    removeFromLocalStorage(id);  
}  

// edit function   
function editItem(e) {  
    const element = e.currentTarget.parentElement.parentElement;  
    // set edit item  
    editElement = e.currentTarget.parentElement.previousElementSibling;  
    // set form value   
    grocery.value = editElement.innerHTML;  
    editFlag = true;  
    editID = element.dataset.id;  
    submitBtn.textContent = "edit";  
}  

// set back to default   
function setBackToDefault() {  
    grocery.value = "";  
    editFlag = false;  
    editID = "";  
    submitBtn.textContent = "submit";  
}  

// LOCAL STORAGE *******  
function addToLocalStorage(id, value) {  
    const groceryItem = { id: id, value: value }; // Renamed variable to avoid confusion  
    let items = getLocalStorage();  

    items.push(groceryItem);  
    localStorage.setItem("list", JSON.stringify(items));  
}  

function removeFromLocalStorage(id) {  
    let items = getLocalStorage();  

    items = items.filter(function(item) {  
        if (item.id !== id) {  
            return item;   
        }  
    });  
    localStorage.setItem("list", JSON.stringify(items));  
}  

function editLocalStorage(id, value) {  
    let items = getLocalStorage();  
    items = items.map(function(item) {  
        if (item.id === id) {  
            item.value = value;  
        }  
        return item;  
    });  
    localStorage.setItem("list", JSON.stringify(items));  
}  

function getLocalStorage() {  
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];  
}  

// ****** SETUP ITEMS  
function setupItems() {  
    let items = getLocalStorage();  
    if (items.length > 0) {  
        items.forEach(function(item) {  
            createlistItem(item.id, item.value);  
        });  
        container.classList.add("show-container");  
    }  
}  

function createlistItem(id, value) {  
    const element = document.createElement("article");  
    // add class  
    element.classList.add("grocery-item");  
    // add id   
    element.setAttribute("data-id", id); // Corrected  
    element.innerHTML = `<p class="title">${value}</p>  
                <div class="btn-container">  
                    <button type="button" class="edit-btn">  
                        <i class="fas fa-edit"></i>  
                    </button>  
                    <button type="button" class="delete-btn">  
                        <i class="fas fa-trash"></i>  
                    </button>  
                </div>`;  
    const deleteBtn = element.querySelector(".delete-btn");  
    const editBtn = element.querySelector(".edit-btn");  
    deleteBtn.addEventListener("click", deleteItem);  
    editBtn.addEventListener("click", editItem);  

    // append child  
    list.appendChild(element);  
} 








function getElement(selection) {  
    const element = document.querySelector(selection);  
    if (element) {  
        return element;  
    }  
    throw new Error(`please check "${selection}" selector, no such element exist`);  
}  

function Gallery(element) {  
    this.list = [...element.querySelectorAll(".img")];  
    this.modal = getElement(".modal");  
    this.modalImg = getElement(".main-img");  
    this.imageName = getElement(".image-name");  
    this.modalImages = getElement(".modal-images"); // Fixed here  
    this.closeBtn = getElement(".close-btn");  
    this.nextBtn = getElement(".next-btn");  
    this.prevBtn = getElement(".prev-btn");  

    // Bind functions to maintain context  
    this.openModal = this.openModal.bind(this);  
    this.closeModal = this.closeModal.bind(this);  
    this.nextImage = this.nextImage.bind(this);  
    this.prevImage = this.prevImage.bind(this);  
    this.chooseImage = this.chooseImage.bind(this);  

    // Container event  
    element.addEventListener("click", (e) => {  
        if (e.target.classList.contains("img")) {  
            this.openModal(e.target, this.list);  
        }  
    });  
}  

Gallery.prototype.openModal = function (selectedImage, list) {  
    this.setMainImage(selectedImage);  
    this.modalImages.innerHTML = list.map(function (image) {  
        return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id}" class=${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}/>`;  
    }).join('');  

    this.modal.classList.add("open");  
    this.closeBtn.addEventListener("click", this.closeModal);  
    this.nextBtn.addEventListener("click", this.nextImage);  
    this.prevBtn.addEventListener("click", this.prevImage);  
    this.modalImages.addEventListener("click", this.chooseImage);  
};  

Gallery.prototype.setMainImage = function (selectedImage) {  
    this.modalImg.src = selectedImage.src;  
    this.imageName.textContent = selectedImage.title;  
};  

Gallery.prototype.closeModal = function () {  
    this.modal.classList.remove("open");  
    this.closeBtn.removeEventListener("click", this.closeModal);  
    this.nextBtn.removeEventListener("click", this.nextImage);  
    this.prevBtn.removeEventListener("click", this.prevImage);  
    this.modalImages.removeEventListener("click", this.chooseImage);  
};  

Gallery.prototype.nextImage = function () {  
    const selected = this.modalImages.querySelector(".selected");  
    const next = selected.nextElementSibling || this.modalImages.firstElementChild;  
    selected.classList.remove("selected");  
    next.classList.add("selected");  
    this.setMainImage(next);  
};  

Gallery.prototype.prevImage = function () {  
    const selected = this.modalImages.querySelector(".selected");  
    const prev = selected.previousElementSibling || this.modalImages.lastElementChild;  
    selected.classList.remove("selected");  
    prev.classList.add("selected");  
    this.setMainImage(prev);  
};  

Gallery.prototype.chooseImage = function (e) {  
    if (e.target.classList.contains("modal-img")) { // Fixed here  
        const selected = this.modalImages.querySelector(".selected");  
        selected.classList.remove("selected");  
        this.setMainImage(e.target);  
        e.target.classList.add("selected");  
    }  
};  

const nature = new Gallery(getElement(".nature"));  
const city = new Gallery(getElement(".city"));  