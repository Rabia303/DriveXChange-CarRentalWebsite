"use strict";

// Retrieves the theme's color palette to be used in charts.
let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-primary');

// Helper function to clean up color values
function cleanColor(color) {
	// remove any leading or trailing whitespace
	color = color.trim();
	// remove any leading # characters
	color = color.replace(/^#+/, '');
	// ensure the color string is exactly 6 characters long
	if (color.length < 6) {
		color = color.padStart(6, '0');
	} else if (color.length > 6) {
		color = color.slice(0, 6);
	}
	// add a leading # character
	color = '#' + color;
	return color;
}

// Clean up color values
primaryColor = cleanColor(primaryColor);


/******************** Google Map Start ********************/
function initMap() {
	// Enter the coordinates for the first location
	const location1 = {lat: 37.687707, lng: -97.366734};

	// Enter the coordinates for the second location
	const location2 = {lat: 37.708098, lng: -97.310408};

	const mapOptions = {
		center: location1,
		zoom: 10
	};

	const map = new google.maps.Map(document.getElementById("map"), mapOptions);

	// Add pin to first location
	const marker1 = new google.maps.Marker({
		position: location1,
		map: map,
		title: "Location 1",
		icon: {
			url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
			scaledSize: new google.maps.Size(0, 0)
		},
		label: {
			text: ' ',
			className: 'first-marker'
		}
	});

	// Add a pin to the second location
	const marker2 = new google.maps.Marker({
		position: location2,
		map: map,
		title: "Location 2",
		icon: {
			url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
			scaledSize: new google.maps.Size(0, 0)
		},
		label: {
			text: ' ',
			className: 'second-marker'
		}
	});

	const directionsService = new google.maps.DirectionsService();

	// Build line renderer to draw path between two locations
	const directionsRenderer = new google.maps.DirectionsRenderer({
		map: map,
		suppressMarkers: true,
		polylineOptions: {
			strokeColor: primaryColor,
			strokeOpacity: 1.0,
			strokeWeight: 3
		}
	});

	// Ask for directions
	const request = {
		origin: location1,
		destination: location2,
		travelMode: google.maps.TravelMode.DRIVING // It can also be on foot, by bike or in transit. [DRIVING, WALKING or TRANSIT]
	};

	directionsService.route(request, (result, status) => {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsRenderer.setDirections(result);
		}
	});
}

window.onload = function() {
	// Load Google Maps API
	const script = document.createElement('script');
	document.head.appendChild(script);
};
/******************** Google Map End ********************/