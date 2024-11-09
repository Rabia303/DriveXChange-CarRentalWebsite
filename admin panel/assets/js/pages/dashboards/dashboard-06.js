"use strict";

// Retrieves the theme's color palette to be used in charts.
let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-primary');
let dangerColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-danger');
let successColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-success');
let infoColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-info');
let warningColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-warning');
let bodyColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-body-color');

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
dangerColor = cleanColor(dangerColor);
successColor = cleanColor(successColor);
infoColor = cleanColor(infoColor);
warningColor = cleanColor(warningColor);
bodyColor = cleanColor(bodyColor);


/******************** Chart 26 Start ********************/
const chart26 = document.querySelector("#chart26");
if (chart26) {
	// Chart 26 Config & Data
	const configChart26 = {
		series: [
			{
				name: 'Orders',
				data: [0, 180, 120, 230, 160, 210, 260, 180, 300, 250, 270, 210, 209, 260],
			}
		],
		colors : [primaryColor],
		stroke: {
			curve: 'smooth',
			width: 2,
			lineCap: 'round',
			show: true,
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: 'light',
				shadeIntensity: 0,
				opacityFrom: 0,
				opacityTo: 0,
			}
		},
	  	chart: {
			height: 286,
			foreColor: bodyColor,
			type: 'area',
			toolbar: {
				show: false
			},
		},
		dataLabels: {
			enabled: false
		},
		xaxis: {
			type: 'category',
			categories: ['Apr 9', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 20', 'Apr 21', 'Apr 22'],
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
		},
		yaxis: {
			show: false
		},
		tooltip: {
			x: {
				format: 'dd/MM/yy HH:mm'
			},
		},
		legend: {
			show: false
		},
		grid: {
			borderWidth: 0,
			borderColor: bodyColor,
			strokeDashArray: 5,
		},
	};

	const chart26Init = new ApexCharts(chart26, configChart26);
	chart26Init.render();
}
/********************* Chart 26 End *********************/


/******************** Car Rental Map Start ********************/
function initMap() {
	// Set the coordinates for the locations
	const locations = [
		{ lat: 40.739636, lng: -73.056148, img: '../assets/media/cars/thumbnail-1.jpg' },
		{ lat: 40.740540, lng: -73.050051, img: '../assets/media/cars/thumbnail-2.jpg' },
		{ lat: 40.737744, lng: -73.048591, img: '../assets/media/cars/thumbnail-3.jpg' },
		{ lat: 40.735895, lng: -73.055234, img: '../assets/media/cars/thumbnail-4.jpg' },
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