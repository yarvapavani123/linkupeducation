document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const mainContent = document.getElementById("mainContent");
  
    startButton.addEventListener("click", () => {
      // Hide the welcome screen
      welcomeScreen.style.display = "none";
  
      // Show the main content
      mainContent.style.display = "block";
    });
  });
  let slideIndex = 0;
const slides = document.querySelectorAll(".slider-container img");
const dots = document.querySelectorAll(".dot");

function showSlides(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === slideIndex);
    });
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}

function currentSlide(index) {
    slideIndex = index - 1;
    showSlides(slideIndex);
}

setInterval(nextSlide, 2000); // Change slide every 2 seconds
showSlides(slideIndex);
