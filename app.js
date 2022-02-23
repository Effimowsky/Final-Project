let slide = [
  "images/slider-image1.png",
  "images/slider-image2.png",
  "images/slider-image3.png",
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
