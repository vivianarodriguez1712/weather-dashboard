
var searchButton = document.getElementById('search-button');
var searchFormEl = document.querySelector('#search-form');
var apiKey = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={4b46a7690a3185fb5de09f671e285e9a}`;

var formSubmitHandler = function (event) {
  event.preventDefault();

  if (cityName) {
    getUpdatedWeather(cityName);

    // clear old content
    repoContainerEl.textContent = '';
  } else {
    alert('Please enter the name of a city.');
  }
};
// format the github api url
var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={4b46a7690a3185fb5de09f671e285e9a}`;

// make a get request to url
fetch(apiUrl).then(function (response) {
  // request was successful
  if (response.ok) {
    console.log(response);
    response.json().then(function (data) {
      console.log(data);
      // displayRepos(data, user);
    });
  }
});

searchFormEl.addEventListener('submit', formSubmitHandler);

