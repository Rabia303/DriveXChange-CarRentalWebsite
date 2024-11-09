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


	/******************** Chart 1 Start ********************/
	const chart1 = document.getElementsByClassName('chart1');
	if (chart1.length > 0) {
		// Chart 1 Data
		const dataChart1 = {
			labels: ['1', '2', '3', '4', '5', '6', '7'],
			datasets: [{
				label: 'Dataset 1',
				data: [1, 3, 3, 2, 3, 5, 4],
				borderColor: primaryColor,
				cubicInterpolationMode: 'cubic-bezier(1, 1, 1, 1)',
			}]
		};

		// Chart 1 Config
		const configChart1 = {
			type: 'line',
			data: dataChart1,
			options: {
				responsive: true,
				radius: 0,
				borderWidth: 2,
				borderCapStyle: 'round',
				borderJoinStyle: 'round',
				tension: 0.4,
				scales: {
					y: {
						display: false // Hide Y axis labels
					},
					x: {
						display: false // Hide X axis labels
					}
				},
				layout: {
					padding: 3
				},			
				plugins: {
					legend: {
						display: false
					},
					title: {
						display: false,
					},
					tooltip: {
						enabled: false,
					}
				}
			},
		};

		const myChart1 = new Chart(chart1, configChart1);
	}
	/********************* Chart 1 End *********************/


	/******************** Chart 2 Start ********************/
	const chart2 = document.getElementsByClassName('chart2');
	if (chart2.length > 0) {
		// Chart 2 Data
		const dataChart2 = {
			labels: ['1', '2', '3', '4', '5', '6', '7'],
			datasets: [{
				label: 'Dataset 2',
				data: [5, 2, 3, 4, 3, 1, 2],
				borderColor: dangerColor,
				cubicInterpolationMode: 'cubic-bezier(1, 1, 1, 1)',
			}]
		};

		// Chart 2 Config
		const configChart2 = {
			type: 'line',
			data: dataChart2,
			options: {
				responsive: true,
				radius: 0,
				borderWidth: 2,
				borderCapStyle: 'round',
				borderJoinStyle: 'round',
				tension: 0.4,
				scales: {
					y: {
						display: false // Hide Y axis labels
					},
					x: {
						display: false // Hide X axis labels
					}
				},
				layout: {
					padding: 3
				},			
				plugins: {
					legend: {
						display: false
					},
					title: {
						display: false,
					},
					tooltip: {
						enabled: false,
					}
				}
			},
		};

		const myChart2 = new Chart(chart2, configChart2);
	}
	/********************* Chart 2 End *********************/


	/******************** Chart 3 Start ********************/
	const chart3 = document.getElementsByClassName('chart3');
	if (chart3.length > 0) {
		// Chart 3 Data
		const dataChart3 = {
			labels: ['1', '2', '3', '4', '5', '6', '7'],
			datasets: [{
				label: 'Dataset 3',
				data: [1, 3, 2, 4, 2, 4, 5],
				borderColor: successColor,
				cubicInterpolationMode: 'cubic-bezier(1, 1, 1, 1)',
			}]
		};

		// Chart 3 Config
		const configChart3 = {
			type: 'line',
			data: dataChart3,
			options: {
				responsive: true,
				radius: 0,
				borderWidth: 2,
				borderCapStyle: 'round',
				borderJoinStyle: 'round',
				tension: 0.4,
				scales: {
					y: {
						display: false // Hide Y axis labels
					},
					x: {
						display: false // Hide X axis labels
					}
				},
				layout: {
					padding: 3
				},			
				plugins: {
					legend: {
						display: false
					},
					title: {
						display: false,
					},
					tooltip: {
						enabled: false,
					}
				}
			},
		};

		const myChart3 = new Chart(chart3, configChart3);
	}
	/********************* Chart 3 End *********************/


	/******************** Chart 4 Start ********************/
	const chart4 = document.querySelector("#chart");
	if (chart4) {
		// Chart 4 Config & Data
		const configChart4 = {
			series: [
				{
					name: 'Gained',
					data: [71, 80, 48, 91, 62, 109, 100, 51, 60, 48, 71, 62, 109, 100],
				},
				{
					name: 'Lost',
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
					shadeIntensity: 0.5,
					opacityFrom: 0.5,
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

		const chart4Init = new ApexCharts(chart4, configChart4);
		chart4Init.render();
	}
	/********************* Chart 4 End *********************/


	/******************** Chart 5 Start ********************/
	const chart5 = document.querySelector("#chart5");
	if (chart5) {
		// Chart 5 Config & Data
		const configChart5 = {
			series: [30],
			chart: {
				height: 150,
				type: 'radialBar',
			},
			colors : [primaryColor],
			plotOptions: {
				radialBar: {		
					hollow: {
						margin: 0,
		              	size: '55%',
					},
					dataLabels: {
						show: false
					},
				},
			},
			labels: ['Chart 1'],
			stroke: {
				lineCap: "round",
			},
		};

		const chart5Init = new ApexCharts(chart5, configChart5);
		chart5Init.render();
	}
	/********************* Chart 5 End *********************/


	/******************** Chart 6 Start ********************/
	const chart6 = document.querySelector("#chart6");
	if (chart6) {
		// Chart 6 Config & Data
		const configChart6 = {
			series: [70],
			chart: {
				height: 150,
				type: 'radialBar',
			},
			colors : [infoColor],
			plotOptions: {
				radialBar: {		
					hollow: {
						margin: 0,
		              	size: '55%',
					},
					dataLabels: {
						show: false
					},
				},
			},
			labels: ['Chart 2'],
			stroke: {
				lineCap: "round",
			},
		};

		const chart6Init = new ApexCharts(chart6, configChart6);
		chart6Init.render();
	}
	/********************* Chart 6 End *********************/


	/******************** Chart 7 Start ********************/
	const chart7 = document.querySelector("#chart7");
	if (chart7) {
		// Chart 7 Config & Data
		const configChart7 = {
			series: [57],
			chart: {
				height: 150,
				type: 'radialBar',
			},
			colors : [dangerColor],
			plotOptions: {
				radialBar: {		
					hollow: {
						margin: 0,
		              	size: '55%',
					},
					dataLabels: {
						show: false
					},
				},
			},
			labels: ['Chart 3'],
			stroke: {
				lineCap: "round",
			},
		};

		const chart7Init = new ApexCharts(chart7, configChart7);
		chart7Init.render();
	}
	/********************* Chart 7 End *********************/


	/******************** Chart 8 Start ********************/
	const chart8 = document.querySelector("#chart8");
	if (chart8) {
		// Chart 8 Config & Data
		const configChart8 = {
			series: [42],
			chart: {
				height: 150,
				type: 'radialBar',
			},
			colors : [warningColor],
			plotOptions: {
				radialBar: {		
					hollow: {
						margin: 0,
		              	size: '55%',
					},
					dataLabels: {
						show: false
					},
				},
			},
			labels: ['Chart 4'],
			stroke: {
				lineCap: "round",
			},
		};

		const chart8Init = new ApexCharts(chart8, configChart8);
		chart8Init.render();
	}
	/********************* Chart 8 End *********************/


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
})()