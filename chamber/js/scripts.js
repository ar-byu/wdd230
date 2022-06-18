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

// Cards and List Script

const requestURL = 'js/businesses.json';
const cards = document.querySelector('.cards');

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      const business = jsonObject['businesses'];
      business.forEach(displayBusiness);
  })
;

function displayBusiness(business) {
  let card = document.createElement('section');
  let logo = document.createElement('img');
  let name = document.createElement('h3')
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let website = document.createElement('a');

  logo.setAttribute('src', business.image);
  logo.setAttribute('alt', `Logo for ${business.name}`);
  logo.setAttribute('loading', 'lazy');

  name.textContent = `${business.name}`
  address.textContent = `${business.address}`;
  phone.textContent = `${business.phone}`;
  website.textContent = `${business.website}`;
  website.setAttribute('href', business.website);

  card.appendChild(name);
  card.appendChild(logo);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);

  if (document.querySelector('.grid')) {
  document.querySelector('div.grid').appendChild(card);
  }
  else {
    document.querySelector('div.list').appendChild(card);
  }
}

// Grid/List Toggle

const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');
const display = document.querySelector('.grid');

gridButton.addEventListener('click', () => {
  display.removeAttribute('class', 'list');
  display.setAttribute('class', 'grid');

})

listButton.addEventListener('click', () => {
  display.removeAttribute('class', 'grid')
  display.setAttribute('class', 'list')
})