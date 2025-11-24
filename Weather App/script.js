const apiKey = "YOUR_API_KEY_HERE"; // Replace with your real key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city !== "") {
    getWeather(city);
  }
});

async function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod == "404") {
      document.getElementById("weatherBox").innerHTML = `<p>❌ City not found!</p>`;
      return;
    }

    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temp").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("desc").textContent = data.weather[0].description.toUpperCase();
    document.getElementById("wind").textContent = `Wind: ${data.wind.speed} km/h`;
  } catch (error) {
    document.getElementById("weatherBox").innerHTML = `<p>⚠️ Error fetching data.</p>`;
    console.error("Error:", error);
  }
}