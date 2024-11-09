"use strict";

/******************** Car Rental Map Start ********************/
function initMap() {
	// Set the coordinates for the locations
	const locations = [
		{ lat: 40.737544, lng: -73.051551, img: '../assets/media/cars/thumbnail-1.jpg' },
	];

	// Create the map
	const map = new google.maps.Map(document.getElementById('car-map'), {
		zoom: 16,
		center: new google.maps.LatLng(40.737958, -73.051820),
	});

	// Add markers and images to the map
	for (let i = 0; i < locations.length; i++) {
		const marker = new google.maps.Marker({
			position: locations[i],
			map: map,
			icon: {
				url: locations[i].img,
				scaledSize: new google.maps.Size(52, 33),
			},
			label: {
				text: ' ',
				className: 'car-rental-marker'
			}
		});
	}
}
const carMap = document.querySelector("#car-map");
if(carMap) {
	window.onload = function() {
		// Load Google Maps API
		const script = document.createElement('script');
		document.head.appendChild(script);
	};
}
/******************** Car Rental Map End ********************/


/******************** Calendar Start ********************/
const calenderContainer = document.getElementsByClassName('calendar-container');
if (calenderContainer.length > 0) {
	// Start Date
	const startMonth = '2023-05-01';

	// Marked days and class
	const markedDays = [
		['2023-04-04', 'bg-warning-subtle text-warning'],
		['2023-04-05', 'bg-warning-subtle text-warning'],
		['2023-04-06', 'bg-warning-subtle text-warning'],
		['2023-04-07', 'bg-warning-subtle text-warning'],
		['2023-04-16', 'bg-primary-subtle text-primary'],
		['2023-04-19', 'bg-success-subtle text-success'],
		['2023-04-24', 'bg-info-subtle text-info'],
		['2023-04-25', 'bg-info-subtle text-info'],
		['2023-05-04', 'bg-warning-subtle text-warning'],
		['2023-05-05', 'bg-warning-subtle text-warning'],
		['2023-05-06', 'bg-warning-subtle text-warning'],
		['2023-05-07', 'bg-warning-subtle text-warning'],
		['2023-05-16', 'bg-primary-subtle text-primary'],
		['2023-05-19', 'bg-success-subtle text-success'],
		['2023-05-24', 'bg-info-subtle text-info'],
		['2023-05-25', 'bg-info-subtle text-info'],
		['2023-06-04', 'bg-warning-subtle text-warning'],
		['2023-06-05', 'bg-warning-subtle text-warning'],
		['2023-06-06', 'bg-warning-subtle text-warning'],
		['2023-06-07', 'bg-warning-subtle text-warning'],
		['2023-06-16', 'bg-primary-subtle text-primary'],
		['2023-06-19', 'bg-success-subtle text-success'],
		['2023-06-24', 'bg-info-subtle text-info'],
		['2023-06-25', 'bg-info-subtle text-info'],
	];

	// Month names
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	// Week names
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	// Init Calendar
	const myCalendar = new Calendar(startMonth, markedDays, months, days);
}
/******************** Calendar End ********************/