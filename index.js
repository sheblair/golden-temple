// hide and show panels in cafe accordion menu
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* toggle between hiding and showing the active panel */
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

showSlides();

function showSlides() {
  for (let i = 0; i < slideshowImages.length; i++) {
    slideshowImages[i].classList.remove("fade", "slideshow-active");
  }

  slideIndex++;

  if (slideIndex > slideshowImages.length) {
    slideIndex = 1;
  }

  slideshowImages[slideIndex - 1].classList.add("fade", "slideshow-active");

  setTimeout(showSlides, 3000);
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
