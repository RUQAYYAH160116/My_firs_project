//Form
var button= document.querySelector('.icon'); 
var input= document.querySelector('#city-input'); 
//City & weather
var city= document.querySelector('#city'); 
var weather= document.querySelector('#weather');
//Temperature
var currentTemp= document.querySelector('#current');
var minTemp= document.querySelector('#min');
var maxTemp= document.querySelector('#max');
//Info
var wind= document.querySelector('#wind');
var humidity= document.querySelector('#humidity');
var pressure= document.querySelector('#pressure');
var icon= document.querySelector('#weather-icon');

//Open weather API key: 
const apiKey= 'bb6e34479e67700a0884278f90830e98'; 


//Button Event listener 'click' 
button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${bb6e34479e67700a0884278f90830e98}`)
    .then(function(response){ return response.json()})
    .then(function(data){
    console.log(data)
    //Variables
    const city = data.name; 
    const weather= data.weather[0].description;
    const temp= Math.floor(data.main.temp);
    const minTemp= Math.floor(data.main.temp_min);
    const maxTemp= Math.floor(data.main.temp_max);
    const wind= data.wind.speed; 
    const pressure= data.main.pressure; 
    const humidity= data.main.humidity; 
    const icon = data.weather[0].icon;
    const iconSrc= `http://openweathermap.org/img/wn/${icon}@2x.png`;



    //place the value
    window.city.innerHTML= city.name;
    window.weather.innerHTML= weather; 
    window.currentTemp.innerHTML= `${temp}<sup>°</sup>`; 
    window.minTemp.innerHTML= `${minTemp}<sup>°</sup>`
    window.maxTemp.innerHTML= `${maxTemp}<sup>°</sup>`

    window.wind.innerHTML= `<span>Wind: </span> ${wind}<span> m/s</span>`;
    window.humidity.innerHTML= `<span>Humidity: </span> ${humidity}<span> %</span>` ;
    window.pressure.innerHTML= `<span>Pressure: </span>${pressure}<span> hPa</span>`;
    window.icon.src = iconSrc ;  
 
 
})
})
© 2021 GitHub, Inc.