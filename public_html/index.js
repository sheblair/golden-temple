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

document.addEventListener("DOMContentLoaded", function() {
  const homePage = document.getElementById('home-main');
  const birminghamPage = document.getElementById('birmingham-main');
  const trussvillePage = document.getElementById('trussville-main');
  const birminghamUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.0547922301544!2d-86.79986522425439!3d33.4999515466908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891bc365991115%3A0xc73b2be574c6b1e7!2sGolden%20Temple%20Health%20Foods!5e0!3m2!1sen!2sus!4v1681848927634!5m2!1sen!2sus";
  const trussvilleUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.725932929193!2d-86.6175542242493!3d33.63834753947183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88890c8cb318129d%3A0xea89191ecd949d7!2sGolden%20Temple%20Trussville%20Health%20Foods%20%26%20Boutique!5e0!3m2!1sen!2sus!4v1681848990062!5m2!1sen!2sus";
  const mapContainer = document.querySelector('.map-container');
  let iframeLoaded = false;
  let iframe = document.createElement("iframe");
  iframe.setAttribute("src", "about:blank"); // Set a blank source initially


  if (birminghamPage || trussvillePage) {
     // Function to load the Google Maps iframe
      function loadGoogleMap() {
        if(!iframeLoaded) { // If there is no iframe loaded
          iframe.setAttribute("src", `${birminghamPage ? birminghamUrl : trussvilleUrl}`);
          iframe.setAttribute("width", "400");
          iframe.setAttribute("height", "300");
          iframe.setAttribute("style", "border:0;");
          iframe.setAttribute("allowfullscreen", "");
          iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

          mapContainer.appendChild(iframe);
          iframeLoaded = true; // Set flag to true after loading
        }
      }

      // Function to check if the map container is visible
      function isMapContainerVisible() {
        var rect = mapContainer.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      // Load the map when it becomes visible
      function lazyLoadMap() {
        if (isMapContainerVisible()) {
          loadGoogleMap();
          if (iframeLoaded) {
            // If the iframe is already loaded, remove the scroll event listener
            window.removeEventListener("scroll", lazyLoadMap);
          }
        }
      }

      // Attach lazy loading to scroll, resize, and orientation change events
      window.addEventListener("scroll", lazyLoadMap);
      window.addEventListener("resize", lazyLoadMap);
      window.addEventListener("orientationchange", lazyLoadMap);

      // Initial check on page load
      lazyLoadMap();
  }

  if (homePage) {
    const mapContainers = document.querySelectorAll(".map-container");
    const mapUrls = [
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.0547922301544!2d-86.79986522425439!3d33.4999515466908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891bc365991115%3A0xc73b2be574c6b1e7!2sGolden%20Temple%20Health%20Foods!5e0!3m2!1sen!2sus!4v1681848927634!5m2!1sen!2sus",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.725932929193!2d-86.6175542242493!3d33.63834753947183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88890c8cb318129d%3A0xea89191ecd949d7!2sGolden%20Temple%20Trussville%20Health%20Foods%20%26%20Boutique!5e0!3m2!1sen!2sus!4v1681848990062!5m2!1sen!2sus"
    ];
    const iframesLoaded = [false, false]; // Track whether iframes are loaded
    const iframes = [];


    // Initialize each iframe and attach lazy loading to scroll, resize, and orientation change events
    for (let i = 0; i < mapContainers.length; i++) {
      const iframe = document.createElement("iframe");
      iframe.setAttribute("src", "about:blank"); // Set a blank source initially
      iframes.push(iframe);

      window.addEventListener("scroll", lazyLoadMap.bind(null, i));
      window.addEventListener("resize", lazyLoadMap.bind(null, i));
      window.addEventListener("orientationchange", lazyLoadMap.bind(null, i));

      lazyLoadMap(i);
    }

    // Function to load a Google Maps iframe
    function loadGoogleMap(index) {
      if(!iframesLoaded[index]) { // If there is no iframe loaded
        iframes[index].setAttribute("src", mapUrls[index]);
        iframes[index].setAttribute("width", "400");
        iframes[index].setAttribute("height", "300");
        iframes[index].setAttribute("style", "border:0;");
        iframes[index].setAttribute("allowfullscreen", "");
        iframes[index].setAttribute("referrerpolicy", "no-referrer-when-downgrade");

        mapContainers[index].appendChild(iframes[index]);
        iframesLoaded[index] = true; // Set flag to true after loading
      }
    }

     // Function to check if a map container is visible
     function isMapContainerVisible(index) {
      const rect = mapContainers[index].getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to lazy load the map when it becomes visible
    function lazyLoadMap(index) {
      if (isMapContainerVisible(index)) {
        loadGoogleMap(index);
        if (iframesLoaded[index]) {
          // If the iframe is already loaded, remove the scroll event listener
          window.removeEventListener("scroll", lazyLoadMap.bind(null, index));
        }
      }
    }
  }


});
