// hide and show panels in cafe accordion menu
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }

  });
}

// update copyright year to current year
const copyright = document.querySelector(".copyright");
const currentYear = new Date().getFullYear();

copyright.innerHTML = `<p>© ${currentYear} Golden Temple Natural Grocery and Cafe</p>`;


// image slideshows
let slideIndex = 0;
const slideshowImages = document.getElementsByClassName("slideshow-image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (slideshowImages, prevBtn, nextBtn) {
  function showSlides() {
    for (let i = 0; i < slideshowImages.length; i++) {
      slideshowImages[i].classList.remove("fade", "slideshow-active");
    }

    slideIndex++;

    if (slideIndex > slideshowImages.length) {
      slideIndex = 1;
    }

    slideshowImages[slideIndex - 1].classList.add("fade", "slideshow-active");

    setTimeout(showSlides, 5000);
  }

  prevBtn.addEventListener("click", () => {
    slideIndex--;

    if (slideIndex < 1) {
      slideIndex = slideshowImages.length;
    }

    for (let i = 0; i < slideshowImages.length; i++) {
      slideshowImages[i].classList.remove("fade", "slideshow-active");
    }

    slideshowImages[slideIndex - 1].classList.add("fade", "slideshow-active");
  });

  nextBtn.addEventListener("click", () => {
    slideIndex++;

    if (slideIndex > slideshowImages.length) {
      slideIndex = 1;
    }

    for (let i = 0; i < slideshowImages.length; i++) {
      slideshowImages[i].classList.remove("fade", "slideshow-active");
    }

    slideshowImages[slideIndex - 1].classList.add("fade", "slideshow-active");
  });

  showSlides();
}




// MODAL
// Function to open the modal
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Open the modal when the page loads
window.onload = openModal;
