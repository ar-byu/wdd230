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
const cards = document.querySelector('.cards');

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
  let card = document.createElement('section');
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
  let ordinance_sched = document.createElement('p');
  let session_sched = document.createElement('p');
  let closure_sched = document.createElement('p');

  picture.setAttribute('src', temple.image);
  picture.setAttribute('alt', `${temple.name}`);
  picture.setAttribute('loading', 'lazy');

  name.textContent = `${temple.name}`
  address.textContent = `${temple.address}`;
  phone.textContent = `${temple.phone}`;
  email.textContent = `${temple.email}`;
  services.textContent = 'Services:';
  clothing.textContent = `${temple.services[0]}`;
  cafeteria.textContent = `${temple.services[1]}`;
  housing.textContent = `${temple.services[2]}`;
  distribution.textContent = `${temple.services[3]}`;
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
  card.appendChild(ordinance_sched);
  card.appendChild(session_sched);
  card.appendChild(closure_sched);

  document.querySelector('.temple-cards').appendChild(card);
}