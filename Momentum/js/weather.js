const API_KEY = "13469f0e678ec744bc9d7be9a83b9a5e";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(res => res.json()).then(data => {
        const weather = document.querySelector("#weather span");

        weather.innerText = `${data.main.temp}°C @ ${data.name}`;

    });

}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);