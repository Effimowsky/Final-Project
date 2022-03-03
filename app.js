// header slider
let slide = [
  "Images/slider-image1.png",
  "Images/slider-image2.png",
  "Images/slider-image3.png",
];
let index = 0;
function changeImg() {
  let myslide = document.querySelector(".my-img-slider");
  myslide.src = slide[index];

  if (index < slide.length - 1) {
    index++;
  } else {
    index = 0;
  }

  setTimeout("changeImg()", 5000);
}
window.onload = changeImg;

// Progresssbar
const skillSection = document.getElementById("skills-section");
const progressBars = document.querySelectorAll(".progress-bar");

function showProgress() {
  progressBars.forEach(progressBar => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}
function hideProgress() {
  progressBars.forEach(progressBar => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 0;
    progressBar.style.width = 0;
  });
}
window.addEventListener("scroll", () => {
  const sectionPos = skillSection.getBoundingClientRect();
  const screenPos = window.innerHeight / 1.8;
  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});

// Recomendations
{
  var slideIndex = 1;
  showSlide(slideIndex);

  function currentSlide(n) {
    showSlide((slideIndex = n));
  }

  function showSlide(n) {
    var i;
    var slide = document.getElementsByClassName("recomendation-content");
    var dots = document.getElementsByClassName("recomendation-btn");
    if (n > slide.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slide.length;
    }
    for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slide[slideIndex - 1].style.display = "block";
    slide[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
  }
}
