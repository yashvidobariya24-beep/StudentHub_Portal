// =========================
// WEATHER API
// =========================

/*async function getWeather() {

    // Vadodara coordinates
    const latitude = 22.3072;
    const longitude = 73.1812;

    try {

        // API se data lena
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
        );

        // JSON ko JavaScript object mein convert karna
        const data = await response.json();

        console.log(data);


        // Temperature nikalna
        const temperature = data.current.temperature_2m;

        // Weather code nikalna
        const weatherCode = data.current.weather_code;


        // HTML mein temperature show karna
        document.getElementById("temperature").innerText =
            temperature + "°C";


        // City
        document.getElementById("weatherCity").innerText =
            "Vadodara";


        // Weather condition
        let condition = "";
        let icon = "";


        if (weatherCode === 0) {

            condition = "Clear Sky";
            icon = "☀️";

        }

        else if (weatherCode <= 3) {

            condition = "Cloudy";
            icon = "⛅";

        }

        else if (weatherCode >= 51 && weatherCode <= 67) {

            condition = "Rain";
            icon = "🌧️";

        }

        else if (weatherCode >= 80 && weatherCode <= 82) {

            condition = "Rain Showers";
            icon = "🌦️";

        }

        else if (weatherCode >= 95) {

            condition = "Thunderstorm";
            icon = "⛈️";

        }

        else {

            condition = "Weather Update";
            icon = "🌤️";

        }


        // HTML mein condition show karna
        document.getElementById("weatherCondition").innerText =
            condition;


        // HTML mein icon show karna
        document.getElementById("weatherIcon").innerText =
            icon;

    }

    catch (error) {

        console.log("Weather Error:", error);

        document.getElementById("weatherCondition").innerText =
            "Unable to load";

    }
}


// Function call
getWeather();*/