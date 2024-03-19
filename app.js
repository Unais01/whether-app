const cityElement = document.querySelector('.city-name');
const temprature = document.querySelector('.temprature');
const icon = document.querySelector('.icon');
const search = document.querySelector(".search-box input");
const searchBtn = document.querySelector('.btn');
const whetherIcon = document.querySelector('.Whether-icon img');
const displayInitializer=document.querySelector('.initializer');





const apikey = 'c03433e9efec4daab8771707241903&q';
// const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=c03433e9efec4daab8771707241903&q=London'
const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=c03433e9efec4daab8771707241903&q=';


async function checkWhether(cityname) {
    // displayInitializer.style.display = 'block';
    const response = await fetch(apiUrl + cityname);
    const data = await response.json();
    cityElement.innerHTML = data.location.name;
    const realtimeTemp = data.current.temp_c;
    temprature.innerHTML = realtimeTemp + " °C";
    if (realtimeTemp > 30) {
        icon.src = "images/clear.png";
    }
    else if (realtimeTemp > 10 && realtimeTemp < 25) {
        icon.src = "images/rain.png";
    } else if (realtimeTemp < 10) {
        icon.src = 'images/snow.png';
    }


}

searchBtn.addEventListener('click', () => {
    checkWhether(search.value);

})