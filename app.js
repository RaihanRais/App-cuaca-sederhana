async function getWeather() {
    try {
        const cityInput = document.getElementById("city");
        const cityName = cityInput.value;
        const apiKey = '1a11a21859b1bf7f3cf7ed649d0ffad9';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        displayError();
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById("weatherResult");

    if (data.cod === "404") {
        weatherResult.innerHTML = "<p>City not found. Please try again.</p>";
    } else {
        const html = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
        `;
        weatherResult.innerHTML = html;
    }
}

function displayError() {
    const weatherResult = document.getElementById("weatherResult");
    weatherResult.innerHTML = "<p>Failed to fetch weather data. Please try again later.</p>";
}
