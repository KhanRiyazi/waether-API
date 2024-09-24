function showData() {
    let city = document.getElementById('city-input').value;
    let output = document.querySelector('.output-wrapper');

    const key = "a0e78d3b449db7059df0a38abd3952f8";  // Replace with your valid API key

    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.cod === 200) {  // Check if the response status is OK
                    output.style.visibility = "visible";

                    output.innerHTML = `
                        <div class="temp">
                            <span id="temp">${data.main.temp} °C</span>
                            <p class="desc">${data.weather[0].description}</p>
                        </div>
                        <div class="details-container">
                            <div class="details">
                                <span id="temp_min">Min: ${data.main.temp_min} °C</span>
                                <span id="temp_max">Max: ${data.main.temp_max} °C</span>
                            </div>
                            <div class="details">
                                <span id="humidity">Humidity: ${data.main.humidity} %</span>
                                <span id="wind">Wind: ${data.wind.speed} km/hr</span>
                            </div>
                        </div>`;
                } else {
                    output.style.visibility = "hidden";
                    alert("City Data Not Found!");  // In case city is invalid or not found
                }
            })
            .catch((error) => {
                output.style.visibility = "hidden";
                console.error("Error fetching data:", error);  // Handle any potential errors
                alert("Failed to retrieve data. Please try again.");
            });
    } else {
        alert("Please enter a city!");
    }
}
