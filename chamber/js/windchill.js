let currentTemp = document.getElementById("temperature").textContent;
let windSpeed = document.getElementById("wind-speed").textContent;


if (currentTemp <= 50 && windSpeed > 3) {
    let windChill = 35.74 + 0.6215 * currentTemp - 35.75 * windSpeed ** 0.16 + 0.4275 * currentTemp * windSpeed ** 0.16;
    document.getElementById("wind-chill").innerHTML = Math.round(windChill);
} else {
    document.getElementById("wind-chill").innerHTML = "No wind chill today";
}