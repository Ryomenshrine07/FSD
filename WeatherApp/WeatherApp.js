let inputBox = document.querySelector('#CityName');
let searchBtn = document.querySelector('#SearchButton');
let apiKey = "da184aeede569ed5bc5b3ddf72ed09f3";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function getWeatherDetails(cityName)
{
    let response = await fetch(apiUrl + cityName + `&appid=${apiKey}`)
    let data = await response.json();
    console.log(data);
    if(response.status == 404)
    {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
        document.querySelector('.weather-details').style.display = "none";
    }
    else
    {
        document.querySelector('.error').style.display = "none";
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.weather-details').style.display = "flex";
        document.querySelector('.weather h1').innerText = data.name;
        document.querySelector('.weather h2').innerText = Math.round(data.main.temp) + "°c";
        document.querySelector('.weather h3').innerText = "(" + data.weather[0].main + ")";
        if(data.weather[0].main == 'Clear')
        {
            document.querySelector('.weather img').src = "Images/Clear.png";
        }
        else if(data.weather[0].main == 'Clouds')
        {
            document.querySelector('.weather img').src = "Images/Cloudy.png";
        }
        else if(data.weather[0].main == 'Rain')
        {
            document.querySelector('.weather img').src = "Images/Rain.png";
        }
        else if(data.weather[0].main == 'Snow')
        {
            document.querySelector('.weather img').src = "Images/Snow.png";
        }
        else if(data.weather[0].main == 'Hail')
        {
            document.querySelector('.weather img').src = "Images/Hail.png";
        }
        else if(data.weather[0].main == 'Haze')
        {
            document.querySelector('.weather img').src = "Images/Haze.png";
        }
        document.querySelector('.humidity p').innerText = data.main.humidity;
        document.querySelector('.wind-speed p').innerText = data.wind.speed + " km/h";
    }
}
searchBtn.addEventListener('click',()=>{
    let cityName = inputBox.value;
    inputBox.value = "";
    getWeatherDetails(cityName);
})