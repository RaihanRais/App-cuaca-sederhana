function getWeather() {
    const cityInput = document.getElementById("city");
    const cityName = cityInput.value;
    const apiKey = "1a11a21859b1bf7f3cf7ed649d0ffad9";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${1a11a21859b1bf7f3cf7ed649d0ffad9}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
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
        `;
        weatherResult.innerHTML = html;
    }
}
