var searchButton = document.getElementById('search-button');
var searchFormEl = document.querySelector('#search-form');

const cities = localStorage.getItem('cities');

var formSubmitHandler = function (event) {
  event.preventDefault();

  var cityName = document.getElementById("searchBtn").value;
  console.log(cityName)

  var apiKey = "4b46a7690a3185fb5de09f671e285e9a";

// format the github api url
var apiCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&Appid=" + apiKey + "&units=imperial";

var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey + "&units=imperial";

// make a get request to url
fetch(apiUrl).then(function (response) {
  // request was successful
  if (response.ok) {
    // console.log(response);
    response.json().then(function (data) {
      console.log(data);

      var list = data.list[0];
      console.log(list);
      var temp = data.list[0].main.temp;
      console.log(temp);
      var date = data.list[0].dt_txt;
      console.log(date);
      var wind = data.list[0].wind.speed;
      console.log(wind);
      var humidity = data.list[0].main.humidity;
      console.log(humidity);

      var list = data.list[8];
      console.log(list);
      var temp = data.list[8].main.temp;
      console.log(temp);
      var date = data.list[8].dt_txt;
      console.log(date);
      var wind = data.list[8].wind.speed;
      console.log(wind);
      var humidity = data.list[8].main.humidity;
      console.log(humidity);

      var list = data.list[16];
      console.log(list);
      var temp = data.list[16].main.temp;
      console.log(temp);
      var date = data.list[16].dt_txt;
      console.log(date);
      var wind = data.list[16].wind.speed;
      console.log(wind);
      var humidity = data.list[16].main.humidity;
      console.log(humidity);

      var list = data.list[24];
      console.log(list);
      var temp = data.list[24].main.temp;
      console.log(temp);
      var date = data.list[24].dt_txt;
      console.log(date);
      var wind = data.list[24].wind.speed;
      console.log(wind);
      var humidity = data.list[24].main.humidity;
      console.log(humidity);

      var list = data.list[32];
      console.log(list);
      var temp = data.list[32].main.temp;
      console.log(temp);
      var date = data.list[32].dt_txt;
      console.log(date);
      var wind = data.list[32].wind.speed;
      console.log(wind);
      var humidity = data.list[32].main.humidity;
      console.log(humidity);
    });

    fetch(apiCurrent).then(function (response) {
      // request was successful
      if (response.ok) {
        // console.log(response);
        response.json().then(function (data) {
          console.log(data);

      // var main = data.main.temp;
      // console.log(main);
      // var humidity = data.main.humidity;
      // console.log(humidity);
      // var weatherDescriptions = data.weather[0].description;
      // console.log(weatherDescriptions);
      // var windSpeed = data.wind.speed;
      // console.log(windSpeed);

     const currentWeatherEl = document.createElement("div");

     const tempEL = document.createElement("div");
     tempEL.style.textAlign = "center";

     const tempElHeader = document.createElement("h1");
     tempElHeader.textContent = "Temperature";
     tempEL.appendChild(tempElHeader);

     const temp = document.createElement("p");
     temp.textContent = data.main.temp;
     tempEL.appendChild(temp);

     currentWeatherEl.appendChild(tempEL);
     document.querySelector("#target").appendChild(currentWeatherEl);

    });
   }
  });
 }
});
};

searchFormEl.addEventListener('click', formSubmitHandler);
