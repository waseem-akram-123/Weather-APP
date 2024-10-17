const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "d104a1a9127bf2fa64cbb9ad964621d1";

let searchinput = document.querySelector ("#search input");
let searchBtn = document.querySelector ("#search-icon button");
let image = document.querySelector ("#img");
let type = document.querySelector ("#type");


const checkWeather = async (city)=> {

    console.log ("getting data .....");
// 1st response
let response = await fetch(apiUrl +city+ `&appid=${apiKey}`);

// 2nd response
let data = await response.json();
console.log (data);

let name = document.querySelector ("#name");
name.innerHTML = data.name;

let temp = document.querySelector ("#temp");
temp.innerHTML = Math.round(data.main.temp - 273.15) + " °C";
 
let humidity = document.querySelector ("#h-id");
humidity.innerHTML = data.main.humidity + " %";

let windspeed = document.querySelector ("#w-id");
windspeed.innerHTML = data.wind.speed + " km/h";

if (data.weather[0].main == "Clouds"){
    type.innerHTML = "Weather is Cloudy";
}
else if (data.weather[0].main == "Clear"){
    type.innerHTML = "Weather is Clear";
}
else if (data.weather[0].main == "Rain"){
    type.innerHTML = "Weather is Rainy";
}
else if (data.weather[0].main == "Drizzle"){
    type.innerHTML = "Weather is Drizzle";
}
else if (data.weather[0].main == "Mist"){
    type.innerHTML = "Weather is Misty";
}
else if (data.weather[0].main == "Snow"){
    type.innerHTML = "Weather is Snowy";
}

if (data.weather[0].main == "Clouds"){
    image.style.backgroundImage = "url('clouds.png')";
}
else if (data.weather[0].main == "Clear"){
    image.style.backgroundImage = "url('clear.png')";
    image.style.backgroundSize = "cover";
}
else if (data.weather[0].main == "Rain"){
    image.style.backgroundImage = "url('rain.png')";
}
else if (data.weather[0].main == "Drizzle"){
    image.style.backgroundImage = "url('drizzle.png')";
}
else if (data.weather[0].main == "Mist"){
    image.style.backgroundImage = "url('mist.png')";
}
else if (data.weather[0].main == "Snow"){
    image.style.backgroundImage = "url('snow.png')";
}

};
searchBtn.addEventListener ("click", ()=>{
    checkWeather(searchinput.value);
});



