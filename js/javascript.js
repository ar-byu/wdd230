//const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
//document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

const year = {year: "numeric"};
document.querySelector("span").textContent = new Date().getFullYear(year)

//document.getElementById("datelastmodified").textContent = new Date(document.lastModified);
var x = document.lastModified;
document.getElementById("datelastmodified").innerHTML = x;