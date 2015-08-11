
// (function() {

var httpRequest;
var output = document.getElementById("output");
var latitude = '47.6097';
var longitude = '-122.3331';



function geolocate () {
  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    makeRequest('js/Wundergroundkey.json', getKey);
  }
  function error() {
    console.log("unable to retrieve location")
  }
  navigator.geolocation.getCurrentPosition(success,error);
}



function makeRequest(url, behaviorFunction) {
  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) { //IE workaround
    try {
      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(e) {
      try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch(e){};
    }
  }
  if (!httpRequest) {
    output.innerHTML="NOOooooooo";
    return false
  }
  httpRequest.onreadystatechange = behaviorFunction;
  httpRequest.open('GET', url, true);
  httpRequest.send();
}

function alertContents() {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      var response = JSON.parse(httpRequest.responseText);
      output.innerHTML = "Check Console";
      console.log(response);
    }
    else {
      output.innerHTML = "Problem with alert request";
    }
  }
}

function getKey() {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      var response = JSON.parse(httpRequest.responseText);
      var key = response.wundergroundAPIKey;
      WundergroundRequest(key);
    }
    else {
      output.innerHTML = "Problem with API key request";
    }
  }
}

function WundergroundRequest(key) {
  // // //Use API call
  // var url = "http://api.wunderground.com/api/" + key + "/conditions/q/" + latitude + "," + longitude + ".json";

  //Use Example JSON
  var url = "reference/exampleConditions_latlong.json";
  makeRequest(url, parseWeather);
}

function parseWeather() {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      //CODE GOES HERE
      var response = JSON.parse(httpRequest.responseText);
      if(response.current_observation) {
        var weather = response.current_observation;
        output.innerHTML = weather.observation_location.city + " is " + weather.temp_f + " degrees F and " + weather.weather + "."
      }
    }
    else {
      output.innerHTML = "Problem with Weather API request";
    }
  }


}

geolocate();

// makeRequest('js/Wundergroundkey.json', getKey);

// Test url
// http://api.wunderground.com/api/68cb686ffb20da4a/conditions/q/wa/47.6097,-122.3331.json



// }(); //End IIFE
