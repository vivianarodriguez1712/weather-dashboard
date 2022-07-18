var searchButton = document.getElementById('search-button');
var searchFormEl = document.querySelector('#search-form');

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
    });

    fetch(apiCurrent).then(function (response) {
      // request was successful
      if (response.ok) {
        // console.log(response);
        response.json().then(function (data) {
          console.log(data);

      var main = data.main.temp;
      console.log(main);
      var humidity = data.main.humidity;
      console.log(humidity);
      var weatherDescriptions = data.weather[0].description;
      console.log(weatherDescriptions);
      var windSpeed = data.wind.speed;
      console.log(windSpeed);

      var searchHistory = function(){
        for(var i = 0; i < cities.length; i++){
            var searchButton = $('<button value= "'+cities[i]+'">'+cities[i]+'</button>');
            $("#search").append(searchButton);
    
        }
    }

   searchHistory();

   $("form").on("click", "button", function(event) {
     event.preventDefault();

   cityName= $("input").val().trim();

   if(cityName === ""){
      alert("input is empty")        
      return;
    }
   
    else{
     $("input").val('');
    
    var lowerCity = city.map(element => {
        return element.toLowerCase();
    });
    var cityNameLow = cityName.toLowerCase();

    if(lowerCity.includes(cityNameLow)){
        alert("This city has been serched before")
    }
    else{
       
        getCityLocation(cityName);

        var newButton = $('<button value= "'+cityName+'">'+ cityName +'</button>');
        $("#search").append(newButton); 

        saveSearch();
     }
    }
   });
  });
 };
});
};
});
};


searchFormEl.addEventListener('click', formSubmitHandler);
