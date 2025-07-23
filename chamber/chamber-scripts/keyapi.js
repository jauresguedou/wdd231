const API_KEY = 'e60ab6d1f78f49998b81f6d30b5d99a1';
const CITY    = 'Cotonou';        // or any city name
const UNITS   = 'metric';         // 'imperial' for °F

async function loadWeather() {
  try {
    // Construct the URL
    const url = `https://api.openweathermap.org/data/2.5/weather`
              + `?q=${CITY}`
              + `&units=${UNITS}`
              + `&appid=${API_KEY}`;

    // 1) Fetch the data
    const res  = await fetch(url);
    if (!res.ok) throw new Error('Weather fetch failed');
    const data = await res.json();

    // 2) Extract what you need
    const temp        = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconCode    = data.weather[0].icon;     // e.g. "01d"
    const iconUrl     = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // 3) Build your HTML
    const currentEl = document.getElementById('current');
    currentEl.innerHTML = `
      <img src="${iconUrl}" alt="${description}" />
      <span>${temp}°C</span>
      <p style="text-transform: capitalize;">${description}</p>
    `;

    // (Optional) Show a 5-day forecast in #forecast...
  }
  catch (err) {
    console.error(err);
    document.getElementById('current').textContent = 
      'Unable to load weather right now.';
  }
}

// Wait for the DOM to parse
document.addEventListener('DOMContentLoaded', loadWeather);
