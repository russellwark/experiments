function getCurrentLocation() {
  if (navigator.geolocation) {
		var timeoutVal = 10 * 1000 * 1000;
		var theLocation = navigator.geolocation.getCurrentPosition(
			displayPosition, 
			displayError,
			{ enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
		);
		return theLocation;
	} else {
		//alert("Geolocation is not supported by this browser");
	}
}

function displayPosition(position) {
  alert("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
}
