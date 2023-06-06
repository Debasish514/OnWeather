 const apiKey = "8b594d9d2faabff08b241a53c954a5e7";
 const apiKey2 = "863242cfb2b1d357e6093d9a4df19a4b";


 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search button");

 const weatherIcon = document.querySelector(".weather-icon");

 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


 async function checkWeather(city){
    const response  = await fetch(apiUrl + city + `&appid=${apiKey2}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/hr";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}


 searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
 })