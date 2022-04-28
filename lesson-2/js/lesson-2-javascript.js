const year = {year: "numeric"};
document.querySelector("span").textContent = new Date().getFullYear(year)

var x = document.lastModified;
document.getElementById("datelastmodified").innerHTML = x;