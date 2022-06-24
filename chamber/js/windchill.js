const currentTemp = document.getElementById("current-temp");
const windSpeed = document.getElementById("wind-speed");
const weatherIcon = document.getElementById("weather-icon");
const weatherDesc = document.getElementById("weather-desc");
const feelsLike = document.getElementById("feels-like");

const url = 'https://api.openweathermap.org/data/2.5/weather?q=York&units=imperial&appid=ec8c11ef8c5eced3eaf0deb3383c8071';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

apiFetch();

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
    windSpeed.innerHTML = `${weatherData.wind.speed}`;
    feelsLike.innerHTML = `${weatherData.main.feels_like.toFixed(0)}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = capitalize(desc);
}

let temperature = currentTemp.textContent;
let speed = windSpeed.textContent;

if (temperature <= 50 && speed > 3) {
    let windChill = 35.74 + 0.6215 * temperature - 35.75 * speed ** 0.16 + 0.4275 * temperature * speed ** 0.16;
    document.getElementById("wind-chill").innerHTML = Math.round(windChill);
} else {
    document.getElementById("wind-chill").innerHTML = "N/A";
}