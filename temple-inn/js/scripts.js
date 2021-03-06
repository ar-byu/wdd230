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

document.getElementById("currentYear").innerHTML = year;
document.getElementById("currentYearMedium").innerHTML = year;

const modifiedDate = document.lastModified;
document.getElementById("dateLastModified").innerHTML = modifiedDate;
document.getElementById("dateLastModifiedMedium").innerHTML = modifiedDate;

// Temple Cards Script

const requestURL = 'js/temples.json';
const cards = document.querySelector('.temple-cards');

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      const temple = jsonObject['temples'];
      temple.forEach(displayTemple);
  })
;

function displayTemple(temple) {
  let card = document.createElement('div');
  let name = document.createElement('h2');
  let picture = document.createElement('img');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let services = document.createElement('h4');
  let clothing = document.createElement('p');
  let cafeteria = document.createElement('p');
  let housing = document.createElement('p');
  let distribution = document.createElement('p');
  let history = document.createElement('p');
  let ordinance_sched = document.createElement('p');
  let session_sched = document.createElement('p');
  let closure_sched = document.createElement('p');
  let likeButton = document.createElement('button');

  card.setAttribute('class', 'temple-card');

  picture.setAttribute('src', temple.image);
  picture.setAttribute('alt', `${temple.name}`);
  picture.setAttribute('class', 'temple-image')
  picture.setAttribute('loading', 'lazy');

  likeButton.id = temple.id
  likeButton.setAttribute('class', 'like-button')
  if (localStorage.getItem(likeButton.id) == 'liked' )
  {likeButton.textContent = '???'}
  else {likeButton.textContent = '???'}
  
  likeButton.onclick = (function () {
    likeButton.textContent = '???'
    document.getElementById(likeButton.id).className += 'liked'
    localStorage.setItem(likeButton.id, 'liked')
    console.log(localStorage.getItem(likeButton.id))
  })

  name.textContent = `${temple.name}`
  address.textContent = `Address: ${temple.address}`;
  phone.textContent = `Phone: ${temple.phone}`;
  email.textContent = `Email: ${temple.email}`;
  services.textContent = 'Services:';
  clothing.textContent = `Clothing Rental: ${temple.services[0]}`;
  cafeteria.textContent = `Cafeteria: ${temple.services[1]}`;
  housing.textContent = `Housing: ${temple.services[2]}`;
  distribution.textContent = `Distribution Center: ${temple.services[3]}`;
  history.textContent = `History: ${temple.history}`
  ordinance_sched.textContent = `Monthly Ordinance Schedule: ${temple.ordinance}`;
  session_sched.textContent = `Monthly Session Schedule: ${temple.session}`;
  closure_sched.textContent = `Closure Schedule: ${temple.closure}`;

  card.appendChild(name);
  card.appendChild(picture);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(services);
  card.appendChild(clothing);
  card.appendChild(cafeteria);
  card.appendChild(housing);
  card.appendChild(distribution);
  card.appendChild(history);
  card.appendChild(ordinance_sched);
  card.appendChild(session_sched);
  card.appendChild(closure_sched);
  card.appendChild(likeButton)

  document.querySelector('.temple-cards').appendChild(card);
}

// Weather Box Scripts

const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const weatherDesc = document.getElementById("weather-desc");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const tomorrowTemp = document.getElementById('future-temp-1');
const twoDayTemp = document.getElementById('future-temp-2');
const threeDayTemp = document.getElementById('future-temp-3');
const weatherBanner = document.getElementById('banner');

const url = 'https://api.openweathermap.org/data/2.5/weather?zip=10001,us&units=imperial&appid=ec8c11ef8c5eced3eaf0deb3383c8071';
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.0004&lon=-75.4999&units=imperial&appid=ec8c11ef8c5eced3eaf0deb3383c8071';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
        showBanner(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

apiFetch();

async function apiFetch2() {
  try {
    const response = await fetch(url2);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults2(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch2();

function capitalize(str) {
    const titleCase = str.toLowerCase().split(" ")
    .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

  return titleCase;
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    feelsLike.innerHTML = `${weatherData.main.feels_like.toFixed(0)}`;
    humidity.innerHTML = `${weatherData.main.humidity.toFixed(0)}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = capitalize(desc);
}

function showBanner(weatherData) {
  const weatherCondition = weatherData.weather[0].main;
  console.log(weatherCondition)
      if (weatherCondition === 'Thunderstorm' || weatherCondition === 'Snow') {
        weatherBanner.style.display = 'block';
        console.log("Got to here")
      }
}

function displayResults2(weatherData) {
  tomorrowTemp.innerHTML = `${weatherData.list[7].main.temp.toFixed(0)}`;
  twoDayTemp.innerHTML = `${weatherData.list[16].main.temp.toFixed(0)}`;
  threeDayTemp.innerHTML = `${weatherData.list[22].main.temp.toFixed(0)}`;
}

// Weather Alert

const close = document.querySelector("#close");

close.addEventListener("click", () => {
    banner.style.display = "none";
})

const reserveButton = document.querySelector('#reserve')

reserveButton.addEventListener("click", () => {
  location.href = "reserve.html"
})