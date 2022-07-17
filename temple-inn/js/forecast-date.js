// Forecast Date Script
const today = new Date();
const tomorrow = today;
tomorrow.setDate(today.getDate() + 1);
tomorrowMonth = tomorrow.toLocaleString('default', {month:'long'});
tomorrowDay = tomorrow.getDate()

const twoDays = today;
twoDays.setDate(today.getDate() + 1);
twoDaysMonth = twoDays.toLocaleString('default', {month:'long'})
twoDaysDay = twoDays.getDate()

const threeDays = today;
threeDays.setDate(today.getDate() + 1);
threeDaysMonth = threeDays.toLocaleString('default', {month:'long'})
threeDaysDay = threeDays.getDate()

let tomorrowDate = document.getElementById("tomorrow");
let twoDaysDate = document.getElementById("two-days");
let threeDaysDate = document.getElementById("three-days");

tomorrowDate.textContent = `${tomorrowMonth} ${tomorrowDay}`;
twoDaysDate.textContent = `${twoDaysMonth} ${twoDaysDay}`;
threeDaysDate.textContent = `${threeDaysMonth} ${threeDaysDay}`;