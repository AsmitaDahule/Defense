// YOUR API KEY IS PLACED HERE
const API_KEY = 'c6a60c45b2314907a7f123333250510'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-btn');
const weatherDisplay = document.getElementById('weather-display');
const errorMessage = document.getElementById('error-message');

searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        displayError('Please enter a city name to search.');
    }
});

async function fetchWeather(city) {
    // 'units=metric' provides temperature in Celsius
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    
    // Clear previous results and errors
    weatherDisplay.style.display = 'none';
    errorMessage.style.display = 'none';
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            // Check for city not found (404)
            if (response.status === 404) {
                throw new Error(`Weather data not found for "${city}".`);
            }
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        displayWeather(data);
        
    } catch (error) {
        console.error('Fetch error:', error);
        displayError(error.message || 'Failed to connect to the weather service.');
    }
}

function displayWeather(data) {
    // Extract necessary data
    const { name, main, weather, wind } = data;
    const temperature = main.temp.toFixed(1); // Round to 1 decimal place
    const description = weather[0].description;
    const humidity = main.humidity;
    const windSpeed = wind.speed;
    const iconCode = weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`; // OpenWeatherMap icon URL

    // Update the DOM elements
    document.getElementById('city-name').textContent = name;
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('description').textContent = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('humidity').textContent = `${humidity}%`;
    document.getElementById('wind-speed').textContent = `${windSpeed} m/s`;
    
    // Update and show the weather icon
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = iconUrl;
    weatherIcon.style.display = 'inline';

    weatherDisplay.style.display = 'block';
}

function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    weatherDisplay.style.display = 'none'; 
}