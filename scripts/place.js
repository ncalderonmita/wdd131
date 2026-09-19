// Footer dates
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").textContent = document.lastModified;

// Weather elements
const temperature_str = document.querySelector("#temperature");
const windSpeed_str = document.querySelector("#wind-speed");
const windChill = document.querySelector("#wind-chill");

// Extract values cleanly using parseFloat directly on textContent
const temperature_number = parseFloat(temperature_str.textContent);
const windSpeed_number = parseFloat(windSpeed_str.textContent);

// One-liner wind chill calculation for °C and km/h
const calculateWindChill = (temp, wind) => 
  13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));

// Viability check & DOM update
if (temperature_number <= 10 && windSpeed_number > 4.8) {
  const windChillValue = calculateWindChill(temperature_number, windSpeed_number);
  windChill.textContent = `${windChillValue.toFixed(1)} °C`;
} else {
  windChill.textContent = "N/A";
}