const apiKey = "404a95bb0feb54627bba56ea0d933ebd";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let img = document.querySelector("#weathericon");

async function checkWeather(city) {
    const response = await fetch(url + city + `&appid=${apiKey}`);
    if (!response.ok) {
        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".tempe").innerHTML = "0";
        document.querySelector(".humidi").innerHTML = "0";
        document.querySelector(".wind").innerHTML = "0";
        img.src = "picture/stars.jpg"; 
        return; // Exit the function
    }

    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tempe").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidi").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main=="Clouds"){
                img.src = "picture/clouds.png";
        
            }
            else if(data.weather[0].main=="Clear"){
                img.src = "picture/clear.png"
            }
            else if(data.weather[0].main=="Rain"){
                img.src = "picture/rainy.png"
            }
    
    
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});




