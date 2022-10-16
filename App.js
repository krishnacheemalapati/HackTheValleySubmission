document.addEventListener("DOMContentLoaded", () => {
  var id = null;
  const car = document.getElementById("car");
  const btn = document.getElementById("journeybtn");
  btn.addEventListener("click", moveCar);
});

function moveCar(id) {
    geocode();
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 1300) {
        clearInterval(id);
      } else {
        pos++;
        car.style.left = pos + "px";
      }
    }
  }


function initMap(latA, lngA, latB, lngB) {
  // The map, centered on Central Park
  const center = {lat: 40.774102, lng: -73.971734};
  const options = {zoom: 15, scaleControl: true, center: center};
  var map;
  map = new google.maps.Map(
      document.getElementById('map'), options);
  // Locations of landmarks
  const locationA = {lat: latA, lng: lngA};
  const locationB = {lat: latB, lng: lngB};
  let directionsService = new google.maps.DirectionsService();
  let directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map); // Existing map object displays directions
  // Create route from existing points used for markers
  const route = {
      origin: locationA,
      destination: locationB,
      travelMode: 'DRIVING'
  }

  directionsService.route(route,
    function(response, status) { // anonymous function to capture directions
      if (status !== 'OK') {
        window.alert('Directions request failed due to ' + status);
        return;
      } else {
        directionsRenderer.setDirections(response); // Add route to the map
        var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
        if (!directionsData) {
          window.alert('Directions request failed');
          return;
        }
        else {
          kilometers = directionsData.distance.text;
          if(kilometers.slice(kilometers.length - 3, kilometers.length) == " mi"){
            kilometers = kilometers.slice(0, kilometers.length - 3) * 1.609;
            document.getElementById('kilometers').innerHTML = kilometers.toFixed(2) + " km";
          } else {
            document.getElementById('kilometers').innerHTML = kilometers;
          }    
        }
      }
    });

}

function geocode() {
  var cityA = document.getElementById('cityA').value;
  var cityB = document.getElementById('cityB').value;
  // var cityA = "923 5th Ave, New York, NY 10021, USA";
  // var cityB = "The Dakota, 1 W 72nd St, New York, NY 10023, USA";
  axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params: {
      address: cityA,
      key: 'AIzaSyCK7YlYluQaB4KCwzX0xAoh4GqNPHG_cE4'
    }
  })
  .then(function(response) {
    var latA = response.data.results[0].geometry.location.lat;
    var lngA = response.data.results[0].geometry.location.lng;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: cityB,
        key: 'AIzaSyCK7YlYluQaB4KCwzX0xAoh4GqNPHG_cE4'
      }
    })
    .then(function(response2) {
      var latB = response2.data.results[0].geometry.location.lat;
      var lngB = response2.data.results[0].geometry.location.lng;
      initMap(latA, lngA, latB, lngB);
    })
    .catch(function() {
      console.log("hello");
    })
  })
  .catch(function() {
    console.log("hi");
  });
}