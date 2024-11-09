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


	/******************** Chart 21 Start ********************/
	const chart21 = document.getElementsByClassName('chart21');
	if (chart21.length > 0) {
		// Chart 21 Data
		const dataChart21 = {
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
			datasets: [{
				label: 'Dataset 1',
				data: [0, 25, 0, 25, 50, 75, 50, 50, 25, 50, 50, 75, 100, 75, 100],
				borderColor: primaryColor,
			}]
		};

		// Chart 21 Config
		const configChart21 = {
			type: 'line',
			data: dataChart21,
			options: {
				responsive: true,
				radius: 0,
				borderWidth: 2,
				borderCapStyle: 'round',
				borderJoinStyle: 'round',
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

		const myChart21 = new Chart(chart21, configChart21);
	}
	/********************* Chart 21 End *********************/


	/******************** Chart 22 Start ********************/
	const chart22 = document.getElementsByClassName('chart22');
	if (chart22.length > 0) {
		// Chart 22 Data
		const dataChart22 = {
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
			datasets: [{
				label: 'Dataset 1',
				data: [50, 25, 50, 75, 75, 100, 75, 100, 75, 50, 25, 50, 25, 0],
				borderColor: infoColor,
			}]
		};

		// Chart 22 Config
		const configChart22 = {
			type: 'line',
			data: dataChart22,
			options: {
				responsive: true,
				radius: 0,
				borderWidth: 2,
				borderCapStyle: 'round',
				borderJoinStyle: 'round',
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

		const myChart22 = new Chart(chart22, configChart22);
	}
	/********************* Chart 22 End *********************/


	/******************** Chart 23 Start ********************/
	const chart23 = document.getElementsByClassName('chart23');
	if (chart23.length > 0) {
		// Chart 23 Data
		const dataChart23 = {
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
			datasets: [{
				label: 'Dataset 1',
				data: [0, 25, 0, 0, 30, 30, 50, 65, 50, 30, 30, 50, 60, 60, 100],
				borderColor: primaryColor,
			}]
		};

		// Chart 23 Config
		const configChart23 = {
			type: 'line',
			data: dataChart23,
			options: {
				responsive: true,
				radius: 0,
				borderWidth: 2,
				borderCapStyle: 'round',
				borderJoinStyle: 'round',
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

		const myChart23 = new Chart(chart23, configChart23);
	}
	/********************* Chart 23 End *********************/


	/******************** Chart 24 Start ********************/
	const chart24 = document.querySelector("#chart24");
	if (chart24) {
		// Chart 24 Config & Data
		var configChart24 = {
			series: [{
				data: [
					{
						x: new Date(1538778600000),
						y: [6629.81, 6650.5, 6623.04, 6633.33]
					},
					{
						x: new Date(1538780400000),
						y: [6632.01, 6643.59, 6620, 6630.11]
					},
					{
						x: new Date(1538782200000),
						y: [6630.71, 6648.95, 6623.34, 6635.65]
					},
					{
						x: new Date(1538784000000),
						y: [6635.65, 6651, 6629.67, 6638.24]
					},
					{
						x: new Date(1538785800000),
						y: [6638.24, 6640, 6620, 6624.47]
					},
					{
						x: new Date(1538787600000),
						y: [6624.53, 6636.03, 6621.68, 6624.31]
					},
					{
						x: new Date(1538789400000),
						y: [6624.61, 6632.2, 6617, 6626.02]
					},
					{
						x: new Date(1538791200000),
						y: [6627, 6627.62, 6584.22, 6603.02]
					},
					{
						x: new Date(1538793000000),
						y: [6605, 6608.03, 6598.95, 6604.01]
					},
					{
						x: new Date(1538794800000),
						y: [6604.5, 6614.4, 6602.26, 6608.02]
					},
					{
						x: new Date(1538796600000),
						y: [6608.02, 6610.68, 6601.99, 6608.91]
					},
					{
						x: new Date(1538798400000),
						y: [6608.91, 6618.99, 6608.01, 6612]
					},
					{
						x: new Date(1538800200000),
						y: [6612, 6615.13, 6605.09, 6612]
					},
					{
						x: new Date(1538802000000),
						y: [6612, 6624.12, 6608.43, 6622.95]
					},
					{
						x: new Date(1538803800000),
						y: [6623.91, 6623.91, 6615, 6615.67]
					},
					{
						x: new Date(1538805600000),
						y: [6618.69, 6618.74, 6610, 6610.4]
					},
					{
						x: new Date(1538807400000),
						y: [6611, 6622.78, 6610.4, 6614.9]
					},
					{
						x: new Date(1538809200000),
						y: [6614.9, 6626.2, 6613.33, 6623.45]
					},
					{
						x: new Date(1538811000000),
						y: [6623.48, 6627, 6618.38, 6620.35]
					},
					{
						x: new Date(1538812800000),
						y: [6619.43, 6620.35, 6610.05, 6615.53]
					},
					{
						x: new Date(1538814600000),
						y: [6615.53, 6617.93, 6610, 6615.19]
					},
					{
						x: new Date(1538816400000),
						y: [6615.19, 6621.6, 6608.2, 6620]
					},
					{
						x: new Date(1538818200000),
						y: [6619.54, 6625.17, 6614.15, 6620]
					},
					{
						x: new Date(1538820000000),
						y: [6620.33, 6634.15, 6617.24, 6624.61]
					},
					{
						x: new Date(1538821800000),
						y: [6625.95, 6626, 6611.66, 6617.58]
					},
					{
						x: new Date(1538823600000),
						y: [6619, 6625.97, 6595.27, 6598.86]
					},
					{
						x: new Date(1538825400000),
						y: [6598.86, 6598.88, 6570, 6587.16]
					},
					{
						x: new Date(1538827200000),
						y: [6588.86, 6600, 6580, 6593.4]
					},
					{
						x: new Date(1538829000000),
						y: [6593.99, 6598.89, 6585, 6587.81]
					},
					{
						x: new Date(1538830800000),
						y: [6587.81, 6592.73, 6567.14, 6578]
					},
					{
						x: new Date(1538832600000),
						y: [6578.35, 6581.72, 6567.39, 6579]
					},
					{
						x: new Date(1538834400000),
						y: [6579.38, 6580.92, 6566.77, 6575.96]
					},
					{
						x: new Date(1538836200000),
						y: [6575.96, 6589, 6571.77, 6588.92]
					},
					{
						x: new Date(1538838000000),
						y: [6588.92, 6594, 6577.55, 6589.22]
					},
					{
						x: new Date(1538839800000),
						y: [6589.3, 6598.89, 6589.1, 6596.08]
					},
					{
						x: new Date(1538841600000),
						y: [6597.5, 6600, 6588.39, 6596.25]
					},
					{
						x: new Date(1538843400000),
						y: [6598.03, 6600, 6588.73, 6595.97]
					},
					{
						x: new Date(1538845200000),
						y: [6595.97, 6602.01, 6588.17, 6602]
					},
					{
						x: new Date(1538847000000),
						y: [6602, 6607, 6596.51, 6599.95]
					},
					{
						x: new Date(1538848800000),
						y: [6600.63, 6601.21, 6590.39, 6591.02]
					},
					{
						x: new Date(1538850600000),
						y: [6591.02, 6603.08, 6591, 6591]
					},
					{
						x: new Date(1538852400000),
						y: [6591, 6601.32, 6585, 6592]
					},
					{
						x: new Date(1538854200000),
						y: [6593.13, 6596.01, 6590, 6593.34]
					},
					{
						x: new Date(1538856000000),
						y: [6593.34, 6604.76, 6582.63, 6593.86]
					},
					{
						x: new Date(1538857800000),
						y: [6593.86, 6604.28, 6586.57, 6600.01]
					},
					{
						x: new Date(1538859600000),
						y: [6601.81, 6603.21, 6592.78, 6596.25]
					},
					{
						x: new Date(1538861400000),
						y: [6596.25, 6604.2, 6590, 6602.99]
					},
					{
						x: new Date(1538863200000),
						y: [6602.99, 6606, 6584.99, 6587.81]
					},
					{
						x: new Date(1538865000000),
						y: [6587.81, 6595, 6583.27, 6591.96]
					},
					{
						x: new Date(1538866800000),
						y: [6591.97, 6596.07, 6585, 6588.39]
					},
					{
						x: new Date(1538868600000),
						y: [6587.6, 6598.21, 6587.6, 6594.27]
					},
					{
						x: new Date(1538870400000),
						y: [6596.44, 6601, 6590, 6596.55]
					},
					{
						x: new Date(1538872200000),
						y: [6598.91, 6605, 6596.61, 6600.02]
					},
					{
						x: new Date(1538874000000),
						y: [6600.55, 6605, 6589.14, 6593.01]
					},
					{
						x: new Date(1538875800000),
						y: [6593.15, 6605, 6592, 6603.06]
					},
					{
						x: new Date(1538877600000),
						y: [6603.07, 6604.5, 6599.09, 6603.89]
					},
					{
						x: new Date(1538879400000),
						y: [6604.44, 6604.44, 6600, 6603.5]
					},
					{
						x: new Date(1538881200000),
						y: [6603.5, 6603.99, 6597.5, 6603.86]
					},
					{
						x: new Date(1538883000000),
						y: [6603.85, 6605, 6600, 6604.07]
					},
					{
						x: new Date(1538884800000),
						y: [6604.98, 6606, 6604.07, 6606]
					},
				]
			}],
			chart: {
				type: 'candlestick',
				height: 350,
				foreColor: bodyColor,
				toolbar: {
					show: false
				},			
			},
			plotOptions: {
				candlestick: {
					colors: {
						upward: successColor,
						downward: dangerColor
					}
				}
			},
			xaxis: {
				type: 'datetime',
				axisBorder: {
					show: false
				},
			},
			yaxis: {
				tooltip: {
					enabled: true
				}
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

		const chart24Init = new ApexCharts(chart24, configChart24);
		chart24Init.render();
	}
	/********************* Chart 24 End *********************/


	/******************** Chart 25 Start ********************/
	const chart25 = document.querySelector("#chart25");
	if (chart25) {
		Highcharts.chart('chart25', {
		    chart: {
		        type: 'area',
		        zoomType: 'xy',
				backgroundColor:'rgba(255, 255, 255, 0.0)',		
		    },
		    title: {
		        text: ''
		    },
		    xAxis: {
		        minPadding: 0,
		        maxPadding: 0,
		        plotLines: [{
		            color: '#888',
		            value: 0.1523,
		            width: 1,
		            label: {
		                text: 'Actual price',
		                rotation: 90
		            }
		        }],
		        title: {
		            text: 'Price'
		        },
				labels: {
					style: {
						color: bodyColor,
					}
				},
		    },
		    yAxis: [{
		        lineWidth: 1,
		        gridLineWidth: 1,
		        title: null,
		        tickWidth: 1,
		        tickLength: 5,
		        tickPosition: 'inside',
		        labels: {
		            align: 'left',
		            x: 8,
					style: {
						color: successColor,
					}
		        }
		    }, {
		        opposite: true,
		        linkedTo: 0,
		        lineWidth: 1,
		        gridLineWidth: 0,
		        title: null,
		        tickWidth: 1,
		        tickLength: 5,
		        tickPosition: 'inside',
		        labels: {
		            align: 'right',
		            x: -8,
					style: {
						color: dangerColor,
					}
		        }
		    }],
		    legend: {
		        enabled: false
		    },
		    plotOptions: {
		        area: {
		            fillOpacity: 0.2,
		            lineWidth: 1,
		            step: 'center'
		        }
		    },
		    tooltip: {
		        headerFormat: '<span style="font-size=10px;">Price: {point.key}</span><br/>',
		        valueDecimals: 2
		    },
		    series: [{
		        name: 'Bids',
		        data: [
		            [
		                0.1524,
		                0.948665
		            ],
		            [
		                0.1539,
		                35.510715
		            ],
		            [
		                0.154,
		                39.883437
		            ],
		            [
		                0.1541,
		                40.499661
		            ],
		            [
		                0.1545,
		                43.262994000000006
		            ],
		            [
		                0.1547,
		                60.14799400000001
		            ],
		            [
		                0.1553,
		                60.30799400000001
		            ],
		            [
		                0.1558,
		                60.55018100000001
		            ],
		            [
		                0.1564,
		                68.381696
		            ],
		            [
		                0.1567,
		                69.46518400000001
		            ],
		            [
		                0.1569,
		                69.621464
		            ],
		            [
		                0.157,
		                70.398015
		            ],
		            [
		                0.1574,
		                70.400197
		            ],
		            [
		                0.1575,
		                73.199217
		            ],
		            [
		                0.158,
		                77.700017
		            ],
		            [
		                0.1583,
		                79.449017
		            ],
		            [
		                0.1588,
		                79.584064
		            ],
		            [
		                0.159,
		                80.584064
		            ],
		            [
		                0.16,
		                81.58156
		            ],
		            [
		                0.1608,
		                83.38156
		            ]
		        ],
		        color: dangerColor
		    }, {
		        name: 'Asks',
		        data: [
		            [
		                0.1435,
		                242.521842
		            ],
		            [
		                0.1436,
		                206.49862099999999
		            ],
		            [
		                0.1437,
		                205.823735
		            ],
		            [
		                0.1438,
		                197.33275
		            ],
		            [
		                0.1439,
		                153.677454
		            ],
		            [
		                0.144,
		                146.007722
		            ],
		            [
		                0.1442,
		                82.55212900000001
		            ],
		            [
		                0.1443,
		                59.152814000000006
		            ],
		            [
		                0.1444,
		                57.942260000000005
		            ],
		            [
		                0.1445,
		                57.483850000000004
		            ],
		            [
		                0.1446,
		                52.39210800000001
		            ],
		            [
		                0.1447,
		                51.867208000000005
		            ],
		            [
		                0.1448,
		                44.104697
		            ],
		            [
		                0.1449,
		                40.131217
		            ],
		            [
		                0.145,
		                31.878217
		            ],
		            [
		                0.1451,
		                22.794916999999998
		            ],
		            [
		                0.1453,
		                12.345828999999998
		            ],
		            [
		                0.1454,
		                10.035642
		            ],
		            [
		                0.148,
		                9.326642
		            ],
		            [
		                0.1522,
		                3.76317
		            ]
		        ],
		        color: successColor
		    }]
		});
	}
	/********************* Chart 25 End *********************/
})()