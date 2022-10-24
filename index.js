// Initialize and add the map
var geocoder;
var map;
function addMarker(name,address) {
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              title: name,
              map: map,
              position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
}
function initMap() {
    geocoder = new google.maps.Geocoder();
    const houston = { lat: 29.820, lng: -95.467 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: houston,
      });

    // The location of Houston
    addMarker("Harris County Courthouse","301 Fannin St. Houston, TX 77002");
  }
  
  window.initMap = initMap;