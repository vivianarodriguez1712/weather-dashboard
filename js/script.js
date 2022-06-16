var clickButton = function(event) {
   var weather = event.target.getAttribute("type");

   if (weather) {
       getUpdatedWeather(weather);
    
      // clear old content
    repoContainerEl.textContent = ""; 
   }
}

var getUpdatedWeather = function(weather) [
    // format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}";

    // make a get request to url
  fetch(apiUrl)
   .then(function(response) {
     // request was successful
     if (response.ok) {
       console.log(response);
       response.json().then(function(data) {
        console.log(data);
        // displayRepos(data, user);
      });

]