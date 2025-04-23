let loc = document.querySelector(".location");
let temp = document.querySelector(".temp");
let rain = document.querySelector(".rain");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".press");
let visibility = document.querySelector(".visi");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn1");
let data;

const key = "677459cdbd562c8917725e3a3fe502f9";

btn.addEventListener('click', async () => {
    let city = input.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    try {
        let response = await fetch(url);
            data = await response.json();
        
        if (data.cod === 200) {
            loc.innerText = data.name;
            temp.innerText = `${data.main.temp} °C`;
            rain.innerText = `${data.weather[0].main}`;
            wind.innerText = `${data.wind.speed} m/s`;
            humidity.innerText = `${data.main.humidity}%`;
            ans = (data.main.pressure)/1013.25;
            ans = ans.toFixed(4);
            pressure.innerText = `${ans} atm`;
            visibility.innerText = `${(data.visibility)/1000} km`;
        } else {
            alert("City not found!");
        }
    } catch (err) {
        console.log(err);
    }
});

