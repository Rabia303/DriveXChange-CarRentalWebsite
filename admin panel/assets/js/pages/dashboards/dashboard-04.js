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


	/******************** Chart 17 Start ********************/
	const chart17 = document.getElementsByClassName('chart17');
	if (chart17.length > 0) {
		// Chart 17 Data
		const dataChart17 = {
			labels: ['01', '02', '03', '04', '05', '06', '07'],
			datasets: [{
				label: 'Organic Sessions',
				data: [30, 50, 60, 70, 78, 66, 100],
				backgroundColor: [primaryColor],
				borderRadius: 100,
				borderSkipped: false,
				categoryPercentage: 0.5
			}]
		};

		// Chart 17 Config
		const configChart17 = {
			type: 'bar',
			data: dataChart17,
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					tooltip: {
						enabled: false
					},
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
				}
			},
		};

		const myChart17 = new Chart(chart17, configChart17);
	}
	/********************* Chart 17 End *********************/


	/******************** Chart 18 Start ********************/
	const chart18 = document.getElementsByClassName('chart18');
	if (chart18.length > 0) {
		// Chart 18 Data
		const dataChart18 = {
			labels: ['01', '02', '03', '04', '05', '06', '07'],
			datasets: [{
				label: 'External Links',
				data: [90, 80, 100, 78, 66, 60, 52],
				backgroundColor: [infoColor],
				borderRadius: 100,
				borderSkipped: false,
				categoryPercentage: 0.5
			}]
		};

		// Chart 18 Config
		const configChart18 = {
			type: 'bar',
			data: dataChart18,
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					tooltip: {
						enabled: false
					},
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
				}
			},
		};

		const myChart18 = new Chart(chart18, configChart18);
	}
	/********************* Chart 18 End *********************/


	/******************** Chart 19 Start ********************/
	const chart19 = document.getElementsByClassName('chart19');
	if (chart19.length > 0) {
		// Chart 19 Data
		const dataChart19 = {
			labels: ['01', '02', '03', '04', '05', '06', '07'],
			datasets: [{
				label: 'Social Networks',
				data: [60, 70, 56, 50, 72, 78, 90],
				backgroundColor: [primaryColor],
				borderRadius: 100,
				borderSkipped: false,
				categoryPercentage: 0.5
			}]
		};

		// Chart 19 Config
		const configChart19 = {
			type: 'bar',
			data: dataChart19,
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					tooltip: {
						enabled: false
					},
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
				}
			},
		};

		const myChart19 = new Chart(chart19, configChart19);
	}
	/********************* Chart 19 End *********************/


	/******************** Chart 20 Start ********************/
	const chart20 = document.querySelector("#chart20");
	if (chart20) {
		// Chart 20 Config & Data
		const configChart20 = {
			series: [
				{
					name: 'Visitor',
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
					shadeIntensity: 0.5,
					opacityFrom: 0.5,
					opacityTo: 0,
				}
			},
		  	chart: {
				height: 340,
				foreColor: bodyColor,
				type: 'area',
				toolbar: {
					show: false
				},
			},
			dataLabels: {
				enabled: false
			},
			markers: {
				size: 5,
				colors: '#fff',
				strokeColors: primaryColor,
				strokeWidth: 2,
				strokeOpacity: 0.9,
				strokeDashArray: 0,
				fillOpacity: 1,
				discrete: [],
				shape: "circle",
				radius: 2,
				offsetX: 0,
				offsetY: 0,
				onClick: undefined,
				onDblClick: undefined,
				showNullDataPoints: true,
				hover: {
					size: undefined,
					sizeOffset: 3
				}
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

		const chart20Init = new ApexCharts(chart20, configChart20);
		chart20Init.render();
	}
	/********************* Chart 20 End *********************/


	/******************** Map Start ********************/
	const mapSelector = document.querySelector("#map-wrapper");
	if (mapSelector) {
		const map = new jsVectorMap({
			selector: '#map-wrapper',
			map: 'world',
			selectedRegions: ['EG', 'US', 'TR'],
			regionStyle: {
				selected: { fill: primaryColor },
			},	
		});
	}
	/******************** Map End ********************/
})()