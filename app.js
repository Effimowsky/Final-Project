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
