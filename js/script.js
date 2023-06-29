const apiKey = '7e3c171fbb14b7fa94511177d0795a61';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

const searchBtn = document.querySelector('.search button');
const input = document.querySelector('.search input');

async function checkWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await res.json();

    console.log(data);
    let fahrenheit = Math.round((data.main.temp - 273.15) * 9 / 5 + 32);
    let miles = (data.wind.speed / 1.60934);
    miles = parseFloat(miles.toFixed(2));

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = fahrenheit + '&degF'
    document.querySelector(".wind").innerHTML = miles + ' mph';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
}

searchBtn.addEventListener('click', () => {
    checkWeather(input.value);
});


input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      checkWeather(input.value);
    }
  });

