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

// Weather script

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');