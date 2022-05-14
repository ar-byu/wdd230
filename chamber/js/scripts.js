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