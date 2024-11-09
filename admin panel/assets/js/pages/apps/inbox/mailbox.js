(() => {
	'use strict'

	/******************** Table Checkbox Start ********************/
	const checkboxes = document.getElementsByClassName('select-item');
	if (checkboxes.length > 0) {
		const checkboxList = document.querySelectorAll('.select-item');
		const selectCount = document.querySelector('#selected-items');
		const checkAll = document.querySelector('#check1');
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