if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showLocation);
} else {
  alert("Geolocation is not supported by this browser.");
}

function showLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  alert("Your current location is:\nLatitude: " + latitude + "\nLongitude: " + longitude);
}

