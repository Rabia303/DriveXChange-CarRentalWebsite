(() => {
	'use strict'

	// Retrieves the theme's color palette to be used in charts.
	let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-primary');
	let successColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-success');
	let infoColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-info');

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
	successColor = cleanColor(successColor);
	infoColor = cleanColor(infoColor);

	/******************** Chart 1 Start ********************/
	const chart1 = document.getElementsByClassName('chart1');
	if (chart1.length > 0) {
		// Chart 1 Data
		const dataChart1 = {
			labels: ['HTML Files', 'ZIP Files', 'PDF Files',],
			datasets: [{
				label: 'Files',
				data: [60, 70, 30],
				backgroundColor: [primaryColor, infoColor, successColor],
			}]
		};

		// Chart 1 Config
		const configChart1 = {
			type: 'doughnut',
			data: dataChart1,
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

		const myChart1 = new Chart(chart1, configChart1);
	}
	/********************* Chart 1 End *********************/


	/******************** Table Checkbox Start ********************/
	const checkboxes = document.getElementsByClassName('select-item');
	if (checkboxes.length > 0) {
		const checkboxList = document.querySelectorAll('.select-item');
		const selectCount = document.querySelector('#selected-items');
		const checkAll = document.querySelector('#check0');
		const editButtons = document.querySelector('#edit-buttons');

		checkboxList.forEach((checkbox) => {
			checkbox.addEventListener('click', () => {
				let count = document.querySelectorAll('.select-item:checked').length;
				selectCount.innerHTML = count;
				if (count > 0) {
					editButtons.classList.remove('visibility-hide');
				} else {
					editButtons.classList.add('visibility-hide');
				}
			});
		});

		checkAll.addEventListener('click', () => {
			checkboxList.forEach((checkbox) => {
				checkbox.checked = checkAll.checked;
			});
			let count = document.querySelectorAll('.select-item:checked').length;
			selectCount.innerHTML = count;
			if (count > 0) {
				editButtons.classList.remove('visibility-hide');
			} else {
				editButtons.classList.add('visibility-hide');
			}
		});
	}
	/******************** Table Checkbox End ********************/
})()