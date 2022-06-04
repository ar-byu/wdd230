// Hamburger button script

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
}

const x = document.getElementById("hamburger-button");
x.onclick = toggleMenu;

// Current dates & lastModified script

const d = new Date();
let year = d.getFullYear();
let day = d.getDate();
let dayName = d.toLocaleString('default',{weekday: 'long'});
let month = d.toLocaleString('default',{month:'long'});
let todaysDate = `${dayName}, ${day} ${month} ${year}`;

document.getElementById("currentYear").innerHTML = year;
document.getElementById("currentYearMedium").innerHTML = year;
document.getElementById("currentDate").innerHTML = todaysDate;

const modifiedDate = document.lastModified;
document.getElementById("dateLastModified").innerHTML = modifiedDate;
document.getElementById("dateLastModifiedMedium").innerHTML = modifiedDate;

// Banner script

let today = new Date().getDay();

const banner = document.getElementById("banner");
if (today === 1 || today === 2) {
    banner.style.display = "block";
}

const close = document.querySelector("#close");

close.addEventListener("click", () => {
    banner.style.display = "none";
})

// Lazy Loading Script

const images = document.querySelectorAll("[data-src]");

const imageOptions = {threshold: 0, rootMargin: "0px 0px 50px 0px"};

function preloadImage(img)  {
  const src = img.getAttribute("data-src");
  if (!src) {
    return
  }

  img.src = src;
}
if('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return
      } else {
        preloadImage(entry.target);
        imageObserver.unobserve(entry.target);
      }
    })
  }, imageOptions);

  images.forEach(image => {
    imageObserver.observe(image);
  })
}
else {
  imagesToLoad.forEach((img) => {
    preloadImage(img);
  });
}

// Local Storage

let lastVisited = window.localStorage.getItem("last-visited-date");
let currentVisit = new Date();
window.localStorage.setItem("last-visited-date", currentVisit);

let lastVisitedMessage = "This is your first visit!";

if (lastVisited) {
    let sinceLastVisit = Math.round((currentVisit - new Date(lastVisited)) / (1000 * 60 * 60 * 24));
    lastVisitedMessage = "Days since last visit: " + sinceLastVisit;
}

document.getElementById("last-visited").textContent = lastVisitedMessage;