(() => {
	'use strict'

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

	/******************** Chart 9 Start ********************/
	const chart9 = document.querySelector("#chart9");
	if (chart9) {
		// Chart 9 Config & Data
		const configChart9 = {
			series: [
				{
					name: 'Orders',
					data: [71, 80, 48, 91, 62, 109, 100, 51, 60, 48, 71, 62, 109, 100],
				},
				{
					name: 'Revenue',
					data: [80, 32, 62, 32, 34, 52, 41, 32, 82, 76, 122, 110, 120, 73]
				}
			],
			colors : [primaryColor, infoColor],
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
				height: 250,
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

		const chart9Init = new ApexCharts(chart9, configChart9);
		chart9Init.render();
	}
	/********************* Chart 9 End *********************/


	/******************** Chart 10 Start ********************/
	const chart10 = document.getElementsByClassName('chart10');
	if (chart10.length > 0) {
		// Chart 10 Data
		const dataChart10 = {
			labels: ['Toys & Video Games', 'Jewelry & Accessories', 'Computer Components',],
			datasets: [{
				label: 'Sales',
				data: [60, 70, 30],
				backgroundColor: [primaryColor, infoColor, successColor],
			}]
		};

		// Chart 10 Config
		const configChart10 = {
			type: 'doughnut',
			data: dataChart10,
			options: {
				responsive: true,
				borderWidth: 0,
				cutout: 80,
				plugins: {
					legend: {
						display: false
					},
					title: {
						display: false,
					}
				}
			},
		};

		const myChart10 = new Chart(chart10, configChart10);
	}
	/********************* Chart 10 End *********************/


	/******************** Chart 11 Start ********************/
	const chart11 = document.getElementsByClassName('chart11');
	if (chart11.length > 0) {
		// Chart 11 Data
		const dataChart11 = {
			labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'],
			datasets: [{
				label: 'Visitors',
				data: [56, 28, 52, 72, 60, 32, 78, 56, 30, 70, 77, 66, 48, 67, 42],
				backgroundColor: [primaryColor],
				borderRadius: 100,
				borderSkipped: false,
				categoryPercentage: 0.5
			}]
		};

		// Chart 11 Config
		const configChart11 = {
			type: 'bar',
			data: dataChart11,
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false
					},
					title: {
						display: false,
					}
				},
				scales: {
					y: {
						ticks: {
							display: false,
						},
						grid: {
							display: false
						},
						border: {
							display: false
						}
					},
					x: {
						grid: {
							display: false
						},
						border: {
							display: false
						}
					},
				}
			},
		};

		const myChart11 = new Chart(chart11, configChart11);
	}
	/********************* Chart 11 End *********************/
})()