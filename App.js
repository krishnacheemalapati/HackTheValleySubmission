document.addEventListener("DOMContentLoaded", () => {
  var id = null;
  const car = document.getElementById("car");
  const btn = document.getElementById("journeybtn");
  btn.addEventListener("click", moveCar);
});

function moveCar(id) {
    geocode();
    const t1 = document.getElementById("t1");
    const t2 = document.getElementById("t2");
    const t3 = document.getElementById("t3");
    const t4 = document.getElementById("t4");
    const t5 = document.getElementById("t5");
    const t6 = document.getElementById("t6");
    const t7 = document.getElementById("t7");
    const t8 = document.getElementById("t8");
    const t9 = document.getElementById("t9");
    const t10 = document.getElementById("t10");
    t1.classList.add('pause');
    t1.style.content = "url(./assets/live_tree.png)";
    t1.classList.remove('dead');
    t1.classList.add('live');
    t2.classList.add('pause');
    t2.style.content = "url(./assets/live_tree.png)";
    t2.classList.remove('dead');
    t2.classList.add('live');
    t3.classList.add('pause');
    t3.style.content = "url(./assets/live_tree.png)";
    t3.classList.remove('dead');
    t3.classList.add('live');
    t4.classList.add('pause');
    t4.style.content = "url(./assets/live_tree.png)";
    t4.classList.remove('dead');
    t4.classList.add('live');
    t5.classList.add('pause');
    t5.style.content = "url(./assets/live_tree.png)";
    t5.classList.remove('dead');
    t5.classList.add('live');
    t6.classList.add('pause');
    t6.style.content = "url(./assets/live_tree.png)";
    t6.classList.remove('dead');
    t6.classList.add('live');
    t7.classList.add('pause');
    t7.style.content = "url(./assets/live_tree.png)";
    t7.classList.remove('dead');
    t7.classList.add('live');
    t8.classList.add('pause');
    t8.style.content = "url(./assets/live_tree.png)";
    t8.classList.remove('dead');
    t8.classList.add('live');
    t9.classList.add('pause');
    t9.style.content = "url(./assets/live_tree.png)";
    t9.classList.remove('dead');
    t9.classList.add('live');
    t10.classList.add('pause');
    t10.style.content = "url(./assets/live_tree.png)";
    t10.classList.remove('dead');
    t10.classList.add('live');
    var pos = 30;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 1300) {
        clearInterval(id);
      } else {
        pos++;
        car.style.left = pos + "px";
      }
      if (pos == 31) {
         t1.classList.remove('pause');
      }
      if (pos == 141) {
        t2.classList.remove('pause');
     }
     if (pos == 251) {
        t3.classList.remove('pause');
        t1.style.content = "url(./assets/dead_tree.png)";
        t1.classList.remove('live');
        t1.classList.add('dead');
     }
     if (pos == 361) {
        t4.classList.remove('pause');
        t2.style.content = "url(./assets/dead_tree.png)";
        t2.classList.remove('live');
        t2.classList.add('dead');
     }
     if (pos == 470) {
        t5.classList.remove('pause');
        t3.style.content = "url(./assets/dead_tree.png)";
        t3.classList.remove('live');
        t3.classList.add('dead');
     }
     if (pos == 580) {
        t6.classList.remove('pause');
        t4.style.content = "url(./assets/dead_tree.png)";
        t4.classList.remove('live');
        t4.classList.add('dead');
     }
     if (pos == 690) {
        t7.classList.remove('pause');
        t5.style.content = "url(./assets/dead_tree.png)";
        t5.classList.remove('live');
        t5.classList.add('dead');
     }
     if (pos == 800) {
        t8.classList.remove('pause');
        t6.style.content = "url(./assets/dead_tree.png)";
        t6.classList.remove('live');
        t6.classList.add('dead');
     }
     if (pos == 910) {
        t9.classList.remove('pause');
        t7.style.content = "url(./assets/dead_tree.png)";
        t7.classList.remove('live');
        t7.classList.add('dead');
     }
     if (pos == 1020) {
        t10.classList.remove('pause');
        t8.style.content = "url(./assets/dead_tree.png)";
        t8.classList.remove('live');
        t8.classList.add('dead');
     }
     if (pos == 1130) {
        t9.style.content = "url(./assets/dead_tree.png)";
        t9.classList.remove('live');
        t9.classList.add('dead');
     }
     if (pos == 1240) {
        t10.classList.remove('pause');
        t10.style.content = "url(./assets/dead_tree.png)";
        t10.classList.remove('live');
        t10.classList.add('dead');
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