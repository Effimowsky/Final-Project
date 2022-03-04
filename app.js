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

// Latest Project
const generateFilters = () => {
  const filterItems = [...document.querySelectorAll(".latest-projects-nav li")];
  const projectItems = [...document.querySelectorAll(".project-item")];

  filterItems.forEach(filterItem => {
    filterItem.addEventListener("click", () => {
      const filterItemId = filterItem.id;
      if (filterItemId === "all") {
        projectItems.forEach(projItem => {
          projItem.classList.remove("hidden2");
        });
      } else {
        projectItems.forEach(projItem => {
          projItem.classList.add("hidden2");
          if (projItem.dataset.filter === filterItemId) {
            projItem.classList.remove("hidden2");
          }
        });
      }
    });
  });
};
generateFilters();

// contact us

var modal = document.getElementById("user-notification");

const btn = document.querySelector(".sendbutton");

var span = document.getElementsByClassName("modal-close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const form = document.getElementById("contact-info-form");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const website = document.querySelector("#website");
const message = document.querySelector("#message");

form.addEventListener("submit", e => {
  e.preventDefault();
  const userData = {
    nameVal: userName.value,
    emailVal: email.value,
    websiteVal: website.value,
    messageVal: message.value,
  };

  sendMessage(userData)
    .then(result => {
      if (!result || result.status !== "ok") {
        alert("something went wrong on the server");
      } else {
        Object.keys(userData).forEach(idkey => {
          const element = document.getElementById(idkey);
          element.innerText = userData[idkey];
        });
        modal.style.display = "flex";
      }
    })
    .catch(error => console.log(error));
});
function sendMessage(userData) {
  return new Promise((resolve, reject) => {
    const createUserRequest = fetch(
      "http://api.kesho.me/v1/user-test/contact",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    createUserRequest
      .then(response => {
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}
